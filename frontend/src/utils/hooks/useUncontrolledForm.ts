import { type SubmitEvent, useState } from "react";
import { z, type ZodObject } from "zod";

interface uncontrolledFormArgs<T extends ZodObject> {
    schema: T,
    onSubmit: (values: z.infer<T>) => Promise<void> | void;
    onError: (
        error: unknown,
        actions: {
            setFieldError: (field: string, message: string) => void
        }
    ) => void;
}

export const useUncontrolledForm = <T extends ZodObject>({schema, onError, onSubmit}: uncontrolledFormArgs<T>) => {

    const [errors, setError] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    function setFieldError(field: string, message: string) {
        setError(prev => ({
            ...prev,
            [field]: message
        }));
    }

    async function validateForm(formData: FormData) {
        const result = schema.safeParse(Object.fromEntries(formData));

        if (!result.success) {
            const errors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0];
                if (typeof field === "string") {
                    errors[field] = issue.message;
                }
            })
            setError(errors);
            return;
        }

        setError({});

        try {
            setIsSubmitting(true)
            await onSubmit(result.data);
        } catch (e) {
            onError(e, { setFieldError });
        } finally {
            setIsSubmitting(false);
        }
    }

    async function onFormSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await validateForm(formData);
    }

    return {
        errors,
        isSubmitting,
        onFormSubmit
    }
}