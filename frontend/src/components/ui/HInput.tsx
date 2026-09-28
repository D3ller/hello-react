import { type ComponentProps, useContext, useRef } from "react";
import { FormContext } from "@ui/Form/FormField.tsx";

export interface HInputProps extends ComponentProps<"input"> {}

export default function HInput({...props}: HInputProps) {

    const inputRef = useRef<HTMLInputElement>(null)

    function focusInputElement() {
        if(props.disabled) return;
        inputRef.current?.focus();
    }

    const field = useContext(FormContext);

    return (
        <div onClick={focusInputElement} aria-disabled={props.disabled} className={`bg-[#ececec] p-3 cursor-text aria-disabled:cursor-not-allowed aria-disabled:bg-gray-500/20 rounded-lg`}>
            <input ref={inputRef} {...props} required={field?.required} id={field?.name} name={field?.name} className={"h-5 w-full focus-visible:outline-0 focus:outline-0 bg-transparent autofill:bg-[#ececec]"} />
        </div>
    )
}