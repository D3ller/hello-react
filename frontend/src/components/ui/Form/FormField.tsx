import { type ComponentProps, createContext, type ReactNode } from "react";

interface FormFieldProps extends ComponentProps<"div"> {
    name: string;
    error?: string
    required?: boolean
    children: ReactNode;
}

interface FormContextValue {
    name: string;
    error?: string
    required?: boolean
}


export const FormContext = createContext<FormContextValue | null>(null);

const FormField = ({ name, required, error, children, ...props }: FormFieldProps) => {
    return (
        <FormContext.Provider value={{ name, required, error }}>
            <div {...props}>
                {children}
            </div>
        </FormContext.Provider>
    );
};

export default FormField;