import RedirectTags, { type RedirectTagsPropsItem } from "@ui/RedirectTags.tsx";

interface PresentBannerProps {
    imageSrc: string;
    imageAlt: string;
    jobNumber: number;
}

const JobSearchBar = () => {
    return (
        <div className={"grid grid-cols-2 border border-gray-900 max-w-207.5 w-full mx-auto rounded-lg overflow-hidden"}>
            <div className={"px-6 py-6.5 bg-white"}>
                <p className={"text-black font-semibold uppercase text-[13px] mb-2"}>
                    QUOI ?
                </p>
                <div>
                    <input className={"w-full"} placeholder={"Métier, entreprise, compétence..."}/>
                </div>
            </div>
            <div className={"px-6 py-6.5 bg-white"}>
                <p className={"text-black font-semibold uppercase text-[13px] mb-2"}>
                    OÙ ?
                </p>
                <div>
                    <input className={"w-full"} placeholder={"Ville, département, code postal..."}/>
                </div>
            </div>
        </div>
    );
}

const PresentBanner = ({imageAlt, imageSrc, jobNumber}: PresentBannerProps) => {

    const baseRedirectTags: RedirectTagsPropsItem[] = [
        {
            label: "Job étudiant",
            icon: "heroicons:academic-cap-solid",
            to: "/job"
        },
        {
            label: "Alternance",
            icon: "heroicons:building-office-16-solid",
            to: "/alternanc"
        },
        {
            label: "CDI",
            icon: "heroicons:document-text-20-solid",
            to: "/cdi"
        }
    ]

    return (
        <>
            <div className={"px-4"}>
                <div
                    className={"flex justify-center items-center md:block bg-blue-50 w-full mt-2 h-117.5 rounded-2xl relative overflow-hidden hw-container-lg px-6 max-md:py-6"}>
                    <div
                        className={'relative md:absolute z-10 max-md:h-full md:right-20 max-md:w-full md:top-0 md:bottom-0 flex  items-end md:items-center text-4xl md:text-5xl tracking-[-.07em] leading-[110%] md:max-w-[45%] text-white'}>
                        <h1>Notre job, vous aider
                            à choisir le vôtre parmi <strong>{jobNumber} offres</strong></h1></div>
                    <img className={"absolute left-0 top-0 size-full object-cover"} alt={imageAlt} src={imageSrc}/>

                    <div className={"absolute -bottom-2.5 left-0 w-full z-10000"}>
                        <JobSearchBar/>
                    </div>
                </div>

                <div className={"flex gap-2 overflow-x-auto mt-4 hw-container-sm"}>
                    <RedirectTags items={baseRedirectTags}/>
                </div>
            </div>
        </>
    );
}

export default PresentBanner;