import { companyData } from "@features/company/mocks/company-data.ts";
import JobBoardCard from "@features/company/components/JobBoardCard.tsx";

const listAllCompanies = () => {
    return (
        <div className={"hw-container-sm sm:my-12 my-16 px-4"}>
            <div className={"flex flex-col gap-4 items-center my-16 sm:mb-12"}>
                <h1 className={"font-semibold text-3xl"}>Les entreprises qui recrutent activement</h1>
                <p className={"text-gray-500"}>Découvrez tout les entreprises disponibles sur Hello React</p>
            </div>
                <div className={"grid sm:grid-cols-2 md:grid-cols-3 gap-8"}>
                    {companyData
                        .sort((a, b) => {
                            return b.jobCount - a.jobCount
                        })
                        .map((company) => {
                        return <JobBoardCard key={company.id} item={company}/>
                    })}
                </div>
        </div>
    )
}

export default listAllCompanies;