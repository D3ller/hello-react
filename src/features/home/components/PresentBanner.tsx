import { useCountContext } from "../../../components/Count.tsx";

interface PresentBannerProps {
    imageSrc: string;
    imageAlt: string;
    jobNumber: number;
}

const jobSearchBar = () => {
    return (
        <div>
        </div>
    );
}

const PresentBanner = ({imageAlt, imageSrc, jobNumber}: PresentBannerProps) => {

    const  count = useCountContext()

    return (
        <div className={"px-4"}>
            <div className={"bg-blue-50 w-full mt-2 h-117.5 rounded-2xl relative overflow-hidden hw-container-lg px-6"}>
                <div
                    className={'absolute right-20 top-0 bottom-0 flex items-center text-5xl tracking-[-.07em] leading-[110%] max-w-[45%] z-5 text-white'}>
                    <h1>Notre job, vous aider {count}
                        à choisir le vôtre parmi <strong>{jobNumber} offres</strong></h1></div>
                <img className={"absolute left-0 top-0 size-full object-cover"} alt={imageAlt} src={imageSrc}/>
            </div>
        </div>
    );
}

export default PresentBanner;