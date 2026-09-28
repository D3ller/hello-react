import { JobBoardCardSkeleton } from "@features/company/components/skeleton/JobBoardCardSkeleton.tsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function CompanySliderSkeleton() {
    return (
        <div aria-hidden="true">
            <Splide options={{
                perPage: 1,
                gap: '2rem',
                arrows: false,
                pagination: false,
                mediaQuery: "min",
                breakpoints: {
                    600: {
                        perPage: 2,
                    },
                    768: {
                        perPage: 3,
                    },
                },
                }}>
                {Array.from({ length: 6 }).map((_, index) => (
                    <SplideSlide key={index}>
                        <JobBoardCardSkeleton />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}
