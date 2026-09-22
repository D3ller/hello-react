import { type ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router";

export interface ButtonProps {
    children: ReactNode,
    to?: NavLinkProps["to"]
    onClick?: () => void
}

const HButton = ({children, onClick, to}: ButtonProps) => {

    if(to) {
        return <NavLink to={to} className={"text-white bg-black px-6 md:px-8 py-4 rounded-full cursor-pointer"} onClick={() => onClick?.()}>{children}</NavLink>
    } else {
        return (
            <button className={"text-white bg-black px-8 py-4 rounded-full cursor-pointer"} onClick={() => onClick?.()}>
                {children}
            </button>
        )
    }
}

export default HButton;