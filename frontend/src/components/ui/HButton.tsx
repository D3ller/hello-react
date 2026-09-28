import { type ComponentProps, type ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router";

export interface ButtonProps extends ComponentProps<"button">  {
    children: ReactNode,
    to?: NavLinkProps["to"],
    onClick?: () => void
}

const HButton = ({children, onClick, to, ...props}: ButtonProps) => {

    if(to) {
        return <NavLink to={to} className={"inline-block text-white bg-black px-6 md:px-8 py-4 rounded-full cursor-pointer"} onClick={() => onClick?.()}>{children}</NavLink>
    } else {
        return (
            <button {...props} className={"text-white bg-black px-8 py-4 rounded-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"} onClick={() => onClick?.()}>
                {children}
            </button>
        )
    }
}

export default HButton;