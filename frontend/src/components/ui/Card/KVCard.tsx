import { Icon } from "@iconify/react";

interface KVCardProps {
    icon?: string;
    myKey: string;
    value: string;
}

export const KVCard = ({icon, myKey, value}: KVCardProps) => {
    return (
        <div className={"py-4 px-6 bg-[#ebefff] rounded-lg h-full"}>
            {icon && <Icon className={"size-6 text-blue-500"} icon={icon}/>}
            <p className={"text-sm mt-2 mb-1"}>{myKey}</p>
            <p className={"font-semibold"}>{value}</p>
        </div>
    )
}