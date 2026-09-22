import { useState } from "react";

const IsStrongPassword = () => {

    const [password, setPassword] = useState("");
    const goalScore = 3;

    const calculateScore = (password: string): number => {
        let initialScore = 0;

        if (isContainNumber(password)) initialScore++;
        if (isPasswordLengthIsCorrect(password)) initialScore++;
        if (isPasswordContainCapitalize(password)) initialScore++;

        return initialScore;
    }

    function isContainNumber(password: string): boolean {
        return /[0-9]/.test(password);
    }

    function isPasswordLengthIsCorrect(password: string): boolean {
        return password.length > 8;
    }

    function isPasswordContainCapitalize(password: string): boolean {
        return /[A-Z]/.test(password);
    }

    return (
        <div>
            <input className={"bg-black p-4 text-white"} onChange={(event) => setPassword(event.target.value)}/>

            <div className={"flex flex-col gap-2"}>
                <div>
                    <p>Le mot de passe fait plus de 8 caractères : {isPasswordLengthIsCorrect(password)}</p>
                    <p>Le mot de passe contient au moins 1 chiffres {isContainNumber(password)}</p>
                    <p>Le mot de passe contient au moins 1 majuscule {isPasswordContainCapitalize(password)}</p>

                    <div
                        className={"w-full h-2 bg-black mx-auto overflow-hidden max-w-sm rounded-md mt-4 flex justify-start"}>
                        <div className={"bg-blue-500 h-full transition-all duration-300"}
                             style={{width: (calculateScore(password) / goalScore) * 100 + '%'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IsStrongPassword;