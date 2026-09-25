import { Link } from "react-router";
import { Icon } from "@iconify/react";

export interface JobBoardItem {
    id: number;
    name: string;
    jobCount: number;
    bannerUri: string;
    logoUri: string;
}

const JobBoardCard = ({item}: { item: JobBoardItem }) => {

    return (
        <div
            className={"border border-gray-200 relative group hover:scale-98 transition-transform duration-300 rounded-md overflow-hidden w-full"}>
            <div className={"h-35 bg-blue-200 w-full rounded-t-md"}>
                <img alt={"alt"} src={item.bannerUri} className={"size-full object-cover"}/>
            </div>
            <div className={"absolute top-30 left-6 w-24 h-11 bg-white p-2 rounded-md border border-gray-200"}>
                <img src={item.logoUri}/>
            </div>
            <div className={"pt-8 pb-6 px-6 flex justify-between items-end"}>
                <div>
                    <Link className={"before:content-[''] before:z-1 before:inset-0 before:absolute text-xl"} to={"/"}>
                        {item.name}
                    </Link>
                    <p className={"mt-4 text-sm"}>{item.jobCount} jobs</p>
                </div>
                <button className={"size-12 bg-black inline-flex justify-center items-center group-hover:bg-black/70 duration-300 text-white rounded-full p-3"}>
                    <Icon className={"text-3xl"} icon={"heroicons:arrow-up-right"}/>
                </button>
            </div>
        </div>
    )


}


export default JobBoardCard;