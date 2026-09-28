export function JobBoardCardSkeleton() {
    return (
        <div className={"min-h-65 w-full border border-gray-200 relative rounded-md overflow-hidden"}>
            <div className={"h-35 bg-gray-200 animate-pulse w-full rounded-t-md"}>
                <div className={"size-full"}>
                </div>
                <div className={"absolute top-30 left-6 z-4 w-24 h-11 bg-gray-300 animate-pulse p-2 rounded-md border border-gray-200"}>
                </div>
            </div>
        </div>
    )
}