import { useContext } from "react";
import { FormContext } from "@ui/Form/FormField.tsx";

export default function FormError() {
    const field = useContext(FormContext);

    return (
        <>
            {field?.error && <div className={"text-red-500 text-sm"}>{field.error}</div>}
        </>
    )
}