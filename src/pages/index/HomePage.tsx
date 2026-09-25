import PresentBanner from "@features/home/components/PresentBanner.tsx";
import CompanySlider from "@features/company/components/CompanySlider.tsx";
import { companyData } from "@features/company/mocks/company-data.ts";
import HButton from "@ui/HButton.tsx";
export default function HomePage() {
    return (
        <>
        <PresentBanner imageSrc={"https://www.hellowork.com/images/campaign-2026/home-cover-mobile-summer-spring.webp"} imageAlt={"Le mobile est arrivé"} jobNumber={2000}/>

            <div className={"hw-container-sm my-16 sm:my-12 px-4"}>
                <h2 className={"text-h2"}>Des entreprises <span>qui recrutent</span></h2>

                <div className={"mt-6 mb-4"}>
                    <CompanySlider items={companyData.slice(0,6)}/>
                </div>

                <HButton>Voir toutes les entreprises</HButton>
            </div>
        </>
    )
}