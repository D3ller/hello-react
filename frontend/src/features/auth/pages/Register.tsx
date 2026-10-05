import FormField from "@ui/Form/FormField.tsx";
import FormLabel from "@ui/Form/FormLabel.tsx";
import HInput from "@ui/HInput.tsx";
import HButton from "@ui/HButton.tsx";
import { useState, type SubmitEvent } from "react";
import FormError from "@ui/Form/FormError.tsx";
import { Link } from "react-router";
import HwLogo from "@components/Icon.tsx";
import { useControlledForm } from "@utils/hooks/useControlledForm.ts";

const Register = () => {

    const [errors, setErrorState] = useState<Record<string, string>>({})

    return (
        <div className={"flex justify-center items-center min-h-dvh"}>
            <form
                className={"max-w-100 bg-neutral-50/30 w-full border border-neutral-100 min-h-60 flex flex-col gap-6 justify-start items-center p-6"}
            >
                <div>
                    <div className={"max-w-16 w-full mx-auto"}>
                        <HwLogo/>
                    </div>

                    <h1 className={"text-xl font-semibold"}>
                        S'inscrire
                    </h1>

                    <div>
                        <p className={"text-gray-500 text-left text-sm"}>
                            Rejoignez notre communauté
                            de plus de 2000 employeurs afin
                            de trouver le job qui vous correspond
                        </p>
                    </div>
                </div>

                <div className={"flex flex-col gap-4 w-full"}>
                    <FormField className={"flex flex-col gap-2"} required name={"email"} error={errors?.email}>
                        <FormLabel>Adresse email</FormLabel>
                        <HInput autoComplete={"email"} type={"email"} placeholder={"ex. corentin.nelhomme@gmail.com"}/>
                        <FormError/>
                    </FormField>

                    <FormField className={"flex flex-col gap-2"} required name={"password"} error={errors?.password}>
                        <FormLabel>Mot de passe</FormLabel>
                        <HInput type={"password"} placeholder={"ex. password123"}/>
                        <FormError/>
                    </FormField>

                    <FormField className={"flex flex-col gap-2"} required name={"confirm-password"}>
                        <FormLabel>Mot de passe de confirmation</FormLabel>
                        <HInput type={"password"} placeholder={"ex. password123"}/>
                        <FormError/>
                    </FormField>

                    <div className={"w-full flex flex-col gap-6"}>
                        <p className={"text-gray-500 text-sm"}>Vous avez dêja un compte ? Connectez vous <Link
                            to={"/auth/login"} className={"underline underline-offset-2"}>ici</Link></p>
                        <HButton className={"w-full"} type={"submit"}>S'inscrire</HButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register