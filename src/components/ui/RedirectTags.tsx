import { Link, type LinkProps } from "react-router";
import { Icon } from "@iconify/react";

interface RedirectTagsProps {
    items: RedirectTagsPropsItem[]
}

export interface RedirectTagsPropsItem {
    icon?: string;
    label: string;
    to: LinkProps["to"];
}

const RedirectTags = ({items}: RedirectTagsProps) => {
    return (
        <>{items.map((item) => {
            return <Link key={item.label} className={"flex gap-3.5 px-4 py-2 border hover:bg-black hover:text-white duration-300 rounded-full"} to={item.to}>
                {item.icon && <Icon className={"size-5"} icon={item.icon}/>}
                <p className={"whitespace-nowrap"}>{item.label}</p>
            </Link>
        })}</>
    )
}

export default RedirectTags;