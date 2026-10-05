import { type LoaderFunctionArgs, redirect, useLocation, useRouteLoaderData } from "react-router";
import { companyData } from "@features/company/mocks/company-data.ts";
import { TabsBar } from "@ui/TabsBar.tsx";
import { KVCard } from "@ui/Card/KVCard.tsx";
import { useState } from "react";
import { Icon } from "@iconify/react";
import type { CompanyProfile } from "../../../type.ts";

type CompanyTabType = "presentation" | "jobs";
type PresentationTab = "about" | "why-us" | "recrutement";
const companyTabType = new Set<CompanyTabType>(["jobs", "presentation"]);

const GetCompany = () => {
    const company = useRouteLoaderData<typeof GetCompanyLoader>("company");
    if (!company) throw new Error("Données de l'entreprise indisponibles");

    const hash = useLocation().hash;

    return <>
        <div className={"hw-container-lg px-4 mt-6 mb-12 sm:my-12"}>
            <div
                className={"h-50 md:h-70 w-full relative overflow-hidden bg-gray-200 animate-pulse rounded-md before:content-[''] before:absolute before:top-0 before:left-0 before:size-full"}>
                <img className={"size-full object-cover"} src={company.bannerUri}
                     alt={`Bannière de "${company.name}`}/>
            </div>
        </div>

        <div className={"hw-container-md px-4"}>
            <div className={"flex flex-col items-start"}>
                <div className={"flex flex-col gap-3.5"}>
                    <h1 className={"text-4xl md:text-5xl"}>{company.name}</h1>
                    <p className={"px-1 max-w-85 text-gray-500"}>{company?.type}</p>
                </div>

                <GetCompanyTabs hash={hash}/>

                <div className={"my-12"}>
                    <div className={`${hash !== "#jobs" ? "" : "hidden"} grid grid-cols-12 lg:gap-x-8`}>
                        <div className={"sticky top-0 col-span-12 bg-white"}>
                            <GetCompanyPresentationScrollTabBar/>
                        </div>
                        <div className={"col-span-12 lg:col-span-8"}><GetCompanyPresentation profile={company.profile}/>
                            <GetCompanyWhyUs/></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

const GetCompanyTabs = ({hash}: { hash: string }) => {

    const currentHash = hash.slice(1);

    const currentTab: CompanyTabType =
        companyTabType.has(currentHash as CompanyTabType)
            ? (currentHash as CompanyTabType)
            : "presentation";

    return (
        <>
            <div className={"mt-12"}>
                <TabsBar
                    current={currentTab}
                    items={[
                        {label: "Présentation", value: "presentation", to: "#presentation"},
                        {label: "Offres d'emploi", value: "jobs", to: "#jobs"}
                    ]}/>
            </div>
        </>
    )
}

const GetCompanyPresentationScrollTabBar = () => {
    const [currentTab, setCurrentTab] = useState<PresentationTab>("about");

    const handleChange = (value: PresentationTab) => {
        setCurrentTab(value);

        document.getElementById(value)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <TabsBar
            variant="underline"
            items={[
                {label: "Qui sommes-nous ?", value: "about"},
                {label: "Raisons de nous rejoindre", value: "why-us"},
                {label: "Étapes de recrutement", value: "recrutement"}
            ]}
            current={currentTab}
            onChange={handleChange}
        />
    );
};

const GetCompanyPresentation = ({profile}: { profile: CompanyProfile }) => {
    return (
        <div className={"my-8"}>
            <h2 className={"text-xl font-semibold mb-6"} id={"about"}>Qui sommes-nous ?</h2>

            <div className={"grid md:grid-cols-3 gap-4"}>
                {profile.facts && profile.facts.map(fact => {
                    return <KVCard key={fact.value} icon={fact?.icon} myKey={fact.label}
                                   value={fact.value}/>
                })}
            </div>

            <p className={"text-xl mt-8 mb-4"}>Présentation</p>

            <p className={"opacity-85 whitespace-pre-line"}>{profile.presentation}</p>

            <div className={""}>
                Nos réseaux <div>{profile.socialLinks?.map((social) => {
                    return <p>{social.label} {social.url}</p>
            })}</div>
            </div>
        </div>
    )
}

const GetCompanyWhyUs = () => {
    return (
        <div className={"my-8"}>
            <h2 className={"text-xl font-semibold mb-6"} id={"why-us"}>Raisons de nous rejoindre</h2>

            <div className={"h-full p-5 bg-[#ebefff] rounded-lg grid grid-cols-2"}>
                <Icon icon={"heroicons:check-20-solid"} className={"size-6 text-blue-500"}/>
            </div>
        </div>
    )
}

const GetCompanyLoader = ({params}: LoaderFunctionArgs) => {
    const companySlug = params["company-slug"]

    const company = companyData.find((c) => {
        return c.slug === companySlug
    })

    if (!company) throw redirect("/");

    return company;
}


export { GetCompany, GetCompanyLoader };
