import { Splide, SplideSlide } from "@splidejs/react-splide";
import JobBoardCard, { type JobBoardItem } from "./JobBoardCard.tsx";
import SliderControls from "@ui/SliderControls.tsx";
import { useRef, useState } from "react";
import type { Pagination } from "../../../type.ts";

export interface JobBoardArray {
    items: JobBoardItem[]
}

type SplideInstance = NonNullable<Splide['splide']>;

const CompanySlider = ({items}: JobBoardArray) => {

    const splideRef = useRef<Splide>(null)

    const [pagination, setPagination] = useState<Pagination>({
        currentPage: 0,
        totalPages: 1,
    })

    const syncPagination = (splide: SplideInstance) => {
        const {Controller} = splide.Components;
        setPagination({
            currentPage: Controller.toPage(splide.index),
            totalPages: Controller.toPage(Controller.getEnd()) + 1,
        });
    }

    return (
        <>
            <Splide options={{
                perPage: 1,
                gap: '2rem',
                arrows: false,
                mediaQuery: "min",
                breakpoints: {
                    600: {
                        perPage: 2,
                    },
                    768: {
                        perPage: 3
                    }
                }
            }}
                    ref={splideRef}
                    onMounted={(splide) => {
                        syncPagination(splide);
                        splide.on('updated', () => syncPagination(splide));
                    }}
                    onMoved={syncPagination}
            >
                {items.map((item) => {
                    return <SplideSlide key={item.id}>
                        <JobBoardCard item={item}/>
                    </SplideSlide>;
                })}
            </Splide>

            <div className={"mt-4"}>
                <SliderControls progress={true} item={pagination} onPrev={() => splideRef?.current?.go('<')}
                                onNext={() => splideRef?.current?.go('>')} onPageChange={(index: number) => splideRef?.current?.go(`>${index}`)}/>
            </div>
        </>
    )
}

export default CompanySlider;