    import { z, type ZodObject } from "zod";
    import { useReducer } from "react";

    type UseFormOptions<TSchema extends ZodObject> = {
        initialValues: z.infer<TSchema>;
        schema: TSchema;
        onSubmit: (values: z.infer<TSchema>) => Promise<unknown>;
        onSuccess?: (data: unknown) => void;
        onError?: (error: unknown) => void;
    };

    type FormErrorKey<T> = keyof T | "global";

    type FormErrors<T> = {
        [K in keyof T]?: string;
    } & {
        global?: string;
    };

    type UseFormReducerAction<TSchema> =
        |
        { type: "SET_FIELD"; key: keyof TSchema; value: TSchema[keyof TSchema]; }
        | { type: "FORM_SUBMIT" }
        | { type: "FORM_ERROR"; errors: FormErrors<TSchema> }
        | { type: "FORM_SUCCESS" }
        | { type: "CLEAR_ERRORS" }
        | { type: "FORM_RESET" }
        | { type: "CLEAR_ERROR", key: FormErrorKey<TSchema> };


    type UseFormState<TSchema> = {
        values: TSchema,
        errors: FormErrors<TSchema>,
        isSubmitting: boolean,
    }
    export const useControlledForm = <TSchema extends ZodObject>({
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
                    const errors = {...state.errors};
                    delete errors[action.key as string];

                    return {
                        ...state,
                        errors,
                    };
                case "CLEAR_ERRORS":
                    return {
                        ...state,
                        errors: {}
                    }
                case "FORM_RESET":
                    return {
                        ...state,
                        values: initialValues,
                        errors: {},
                        isSubmitting: false,
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
                const errors: Record<string, string> = {global: ""};

                result.error.issues.forEach((issue) => {
                    const field = issue.path[0];

                    if (typeof field === "string") {
                        errors[field] = issue.message;
                    }
                });

                dispatch({
                    type: "FORM_ERROR",
                    errors: errors as FormErrors<Values>,
                });

                return;
            }

            dispatch({type: "FORM_SUBMIT"});
            try {
                const data = await onSubmit(result.data);

                dispatch({type: "FORM_SUCCESS"});
                onSuccess?.(data);
            } catch (error) {

                const errors: FormErrors<Values> = {
                    global: "Une erreur est survenue",
                };

                dispatch({
                    type: "FORM_ERROR",
                    errors
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

        const clearErrors = () => {
            dispatch({
                type: "CLEAR_ERRORS"
            });
        }

        const clearError = (key: FormErrorKey<Values>) => {
            dispatch({
                type: "CLEAR_ERROR",
                key,
            })
        }

        const reset = () => {
            dispatch({
                type: "FORM_RESET"
            })
        }

        return {
            ...state,
            reset,
            setValue,
            clearError,
            clearErrors,
            submit
        }

    }