import { type ReactNode, useContext } from "react";
import { FormContext } from "@ui/Form/FormField.tsx";

export default function FormLabel({children}: {children: ReactNode}) {
    const field = useContext(FormContext);

    return (
        <label htmlFor={field?.name}>
            {children} {field?.required && <sup className={"text-red-500 ml-0.5"}>*</sup>}
        </label>
    )
}