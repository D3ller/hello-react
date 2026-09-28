import type { Pagination } from "../../type.ts";
import { Icon } from "@iconify/react";

const Progress = ({currentPage, totalPages, onPageChange}: {
    currentPage: number,
    totalPages: number,
    onPageChange: (index: number) => void
}) => {
    return (
        <div className={"flex items-center gap-1"}>
            {Array.from({length: totalPages}).map((_, index) => {
                const isCurrent = index === currentPage
                return <button key={index} aria-label={`Aller à la page ${index + 1}`}
                               onClick={() => onPageChange(index)}
                               aria-current={isCurrent ? "page" : undefined}
                               className={"py-2.5 px-0.5 cursor-pointer aria-[current=page]:cursor-default"}>
                    <span className={`${isCurrent ? 'bg-black!' : ''} block w-3 h-1 rounded-md bg-gray-200 duration-50`}></span>
                </button>
            })}
        </div>
    )
}

const SliderControls = ({item, onNext, onPrev, onPageChange, progress = false}: {
    item: Pagination;
    onPrev: () => void;
    onNext: () => void;
    onPageChange: (index: number) => void;
    progress?: boolean
}) => {

    const {currentPage, totalPages} = item;

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className={"flex justify-between"}>
            <button
                className={"rounded-full size-10 border border-gray-200 disabled:border-gray-100 disabled:text-gray-500 duration-300 p-0.5 flex justify-center items-center disabled:cursor-not-allowed enabled:cursor-pointer"}
                disabled={currentPage === 0} onClick={onPrev}>
                <Icon className={"size-6"} icon={"heroicons:chevron-left-solid"}/>
            </button>
            {progress && <Progress currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>}
            <button
                className={"rounded-full size-10 border border-gray-200 disabled:border-gray-100 disabled:text-gray-500 duration-300 p-0.5 flex justify-center items-center disabled:cursor-not-allowed enabled:cursor-pointer"}
                disabled={currentPage === totalPages - 1} onClick={onNext}>
                <Icon className={"size-6"} icon={"heroicons:chevron-right-solid"}/>
            </button>
        </div>
    )

}

export default SliderControls;