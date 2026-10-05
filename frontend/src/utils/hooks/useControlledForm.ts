import { z, type ZodObject } from "zod";
import { useReducer } from "react";

type UseFormOptions<TSchema extends ZodObject> = {
    initialValues: z.infer<TSchema>;
    schema: TSchema;
    onSubmit: (values: z.infer<TSchema>) => Promise<unknown>;
    onSuccess?: (data: unknown) => void;
    onError?: (error: unknown) => void;
};

type UseFormReducerAction<TSchema> =
    | {
    type: "SET_FIELD";
    key: keyof TSchema;
    value: TSchema[keyof TSchema];
}
    | { type: "FORM_SUBMIT" }
    | { type: "FORM_ERROR"; errors: Record<string, string> }
    | { type: "FORM_SUCCESS" }
    | { type: "CLEAR_ERROR" }

type UseFormState<TSchema> = {
    values: TSchema,
    errors: Record<string, string>,
    isSubmitting: boolean,
}
export const useForm = <TSchema extends ZodObject>({
                                                       initialValues,
                                                       schema,
                                                       onSubmit,
                                                       onSuccess,
                                                       onError,
                                                   }: UseFormOptions<TSchema>) => {

    type Values = z.infer<TSchema>;

    function formReducer(
        state: UseFormState<Values>,
        action: UseFormReducerAction<Values>
    ): UseFormState<Values> {
        switch (action.type) {
            case "SET_FIELD":
                return {
                    ...state,
                    values: {
                        ...state.values,
                        [action.key]: action.value,
                    },
                };
            case "FORM_SUBMIT":
                return {
                    ...state,
                    isSubmitting: true,
                };

            case "FORM_SUCCESS":
                return {
                    ...state,
                    isSubmitting: false,
                };

            case "FORM_ERROR":
                return {
                    ...state,
                    isSubmitting: false,
                    errors: action.errors,
                };

            case "CLEAR_ERROR":
                return {
                    ...state,
                    errors: {},
                };
        }
    }

    const [state, dispatch] = useReducer(formReducer, {
        values: initialValues,
        errors: {},
        isSubmitting: false,
    });

    const submit = async () => {
        const result = schema.safeParse(state.values);

        if (!result.success) {
            const errors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0];
                if (typeof field === "string") {
                    errors[field] = issue.message;
                }
            })
            dispatch({type: "FORM_ERROR", errors});
            return;
        }

        dispatch({type: "FORM_SUBMIT"});
        try {
            const data = await onSubmit(state.values);

            dispatch({type: "FORM_SUCCESS"});
            onSuccess?.(data);
        } catch (error) {
            dispatch({
                type: "FORM_ERROR",
                errors: {
                    form: "Une erreur est survenue",
                },
            });

            onError?.(error);
        }
    };

    const setValue = <K extends keyof Values>(
        key: K,
        value: Values[K]
    ) => {
        dispatch({
            type: "SET_FIELD",
            key,
            value,
        });
    };

    const clearError = () => {
        dispatch({
            type: "CLEAR_ERROR"
        });
    }

    return {
        ...state,
        setValue,
        clearError,
        submit
    }

}