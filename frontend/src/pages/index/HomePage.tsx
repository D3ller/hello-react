import PresentBanner from "@features/home/components/PresentBanner.tsx";
import CompanySlider from "@features/company/components/CompanySlider.tsx";
import HButton from "@ui/HButton.tsx";
import { useEffect, useState } from "react";
import { $fetch } from 'ofetch'
import type { JobBoardItem } from "@features/company/components/JobBoardCard.tsx";
import CompanySliderSkeleton from "@features/company/components/skeleton/CompanySliderSkeleton.tsx";

export default function HomePage() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [companies, setCompanies] = useState<JobBoardItem[]>([]);

    useEffect(() => {
        $fetch('/job.json').then((e: JobBoardItem[]) => {
            setCompanies(e);
            setIsLoaded(true);
        })
    }, [])

    return (
        <>
            <PresentBanner
                imageSrc={"https://www.hellowork.com/images/campaign-2026/home-cover-mobile-summer-spring.webp"}
                imageAlt={"Le mobile est arrivé"} jobNumber={2000}/>

            <div className={"hw-container-sm my-16 sm:my-12 px-4"}>
                <h2 className={"text-h2"}>Des entreprises <span>qui recrutent</span></h2>

                <div className={"mt-6 mb-4"}>
                    {isLoaded ? <CompanySlider items={companies.slice(0, 6)}/> : <CompanySliderSkeleton/>}
                </div>

                <HButton to={"/company"}>Voir toutes les entreprises</HButton>
            </div>
        </>
    )
}