import { Link, type LinkProps } from "react-router";
import { type ReactNode } from "react";

type Tab<T> = {
    label: string;
    value: T;
    to?: LinkProps["to"];
}

interface TabsBarProps<T extends string> {
    variant?: "underline" | "segmented";
    items: Tab<T>[];
    current: T;
    onChange?: (value: T) => void;
    children?: ReactNode;
}


export const TabsBar = <T extends string>({
                                              items,
                                              onChange,
                                              current,
                                              children,
                                              variant = "segmented"
                                          }: TabsBarProps<T>) => {

    let tabsClass = "";
    let tabItemClass = "";
    let tabItemActiveClass = "";

    switch (variant) {
        case 'segmented':
            tabsClass = "bg-[#e5e5e5] rounded-md";
            tabItemClass = "rounded-lg px-4 py-2 md:py-3 md:px-6"
            tabItemActiveClass = "bg-white";
            break;
        case 'underline':
            tabsClass = "pt-3 bg-white";
            tabItemClass = "pb-3 mr-3.5 text-sm text-gray-500"
            tabItemActiveClass = "border-b-2 border-black text-black!"
            break;
    }

    return (
        <div data-slot={"root"} className={`p-1 relative w-fit ${tabsClass}`}>
            <nav className={"flex"}>
                {items.map(item => {
                return item.to ?
                    <Link
                        key={item.value}
                        to={item.to}
                        onClick={() => onChange?.(item.value)}
                        className={`block cursor-pointer ${tabItemClass} ${current === item.value ? `${tabItemActiveClass}` : ''}`}>
                        {item.label}
                    </Link>
                    : <div
                        key={item.value}
                        onClick={() => onChange?.(item.value)}
                        className={`cursor-pointer ${tabItemClass} ${current === item.value ? `${tabItemActiveClass}` : ''}`}>
                        {item.label}
                    </div>
            })}
            </nav>

            {children}
        </div>
    )
}