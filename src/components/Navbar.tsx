import type { User } from "../type.ts";
import HwLogo from "./Icon.tsx";
import HButton from "./ui/HButton.tsx";
import { NavLink, Outlet } from "react-router";
import { useState } from "react";

interface NavbarItem {
    label: string;
    to: string;
}

interface NavbarProps {
    user: Pick<User, "fullName" | "initial" | "avatarURL"> | null;
}

type UserNav = Pick<User, "fullName" | "initial" | "avatarURL">;

const helloNav: NavbarItem[] = [
    {
        label: "Trouver mon employée",
        to: "/find-my-employee"
    }, {
        label: "Trouver mon entreprise",
        to: "/find-my-company"
    }
]

const displayUser = (user: UserNav | null) => {
    if (user) {
        return (
            <div className={"size-10 bg-blue-50 rounded-full"}></div>
        )
    } else {
        return (
            <HButton to={"/auth/login"}>
                Se connecter
            </HButton>
        )
    }
};

const BurgerMenu = ({
                        onToggle,
                        state
                    }: {
    onToggle: () => void;
    state: boolean;
}) => {
    return (
        <button
            type="button"
            aria-expanded={state}
            aria-label={state ? "Fermer le menu" : "Ouvrir le menu"}
            className="relative flex h-8 w-8 items-center justify-center"
            onClick={onToggle}
        >
            {Array.from({length: 3}).map((_, index) => (
                <div
                    key={index}
                    className={`
                        absolute h-0.5 w-full bg-black
                        transition-all duration-300
                        
                        ${index === 0
                        ? state
                            ? "translate-y-0 rotate-45"
                            : "-translate-y-2"
                        : ""
                    }

                        ${index === 1
                        ? state
                            ? "opacity-0"
                            : "opacity-100"
                        : ""
                    }

                        ${index === 2
                        ? state
                            ? "translate-y-0 -rotate-45"
                            : "translate-y-2"
                        : ""
                    }
                    `}
                />
            ))}
        </button>
    );
};

const NavbarMenu = ({navbarState, user, onLinkClick}: {
    navbarState: boolean,
    user: UserNav | null,
    onLinkClick: () => void
}) => {
    return (
        <div
            className={`fixed top-(--navbar-height) left-0 w-full h-[calc(100dvh-var(--navbar-height))] z-100 duration-300 px-4 pt-10 flex flex-col gap-6 ${navbarState ? "opacity-100 bg-white"
                : "opacity-0 pointer-events-none"}`}>
            {helloNav.map((navItem) => {
                return <NavLink onClick={onLinkClick}
                                key={navItem.to}
                                className={"text-xl font-medium"}
                                to={navItem.to}>{navItem.label}
                </NavLink>
            })}
            {displayUser(user)}
        </div>
    )
}

const Navbar = ({user}: NavbarProps) => {

    const [navbarState, setNavbarState] = useState(false);

    return (
        <>
            <nav
                className={"flex items-center justify-between py-2 px-4 hw-container-md w-full min-h-(--navbar-height)"}>
                <NavLink to={"/"} className={"max-w-18 md:max-w-23 w-full"}><HwLogo/></NavLink>
                <div className={"hidden md:flex items-center gap-x-8"}>
                    {helloNav.map((navItem) => {
                        return <NavLink
                            className={({isActive}) => `${isActive ? 'text-(--navbar-active)' : 'text-(--navbar-inactive) hover:text-(--navbar-active) duration-150'} `}
                            key={navItem.to} to={navItem.to}>{navItem.label}</NavLink>;
                    })}
                    <div className={"hidden md:flex"}>{displayUser(user)}</div>
                </div>
                <div className={"block md:hidden"}>
                    <BurgerMenu onToggle={() => setNavbarState((prevState) => !prevState)} state={navbarState}/>
                    <NavbarMenu onLinkClick={() => setNavbarState(false)} user={user} navbarState={navbarState}/>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default Navbar;