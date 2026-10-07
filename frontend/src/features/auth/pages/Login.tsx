import HwLogo from "@components/Icon.tsx";
import HButton from "@ui/HButton.tsx";
import HInput from "@ui/HInput.tsx";

import FormField from "@ui/Form/FormField.tsx";
import FormLabel from "@ui/Form/FormLabel.tsx";
import FormError from "@ui/Form/FormError.tsx";

import { useAuth } from "@features/auth/provider/AuthProvider.tsx";
import { loginSchema } from "@utils/schema.ts";

import { Link } from "react-router";

import { useUncontrolledForm } from "@utils/hooks/useUncontrolledForm.ts";

const Login = () => {

    const { login } = useAuth();
    const {errors, onFormSubmit, isSubmitting} = useUncontrolledForm({
        schema: loginSchema,
        onSubmit: async (values) => {
            await login(values);
        },
        onError: (error, {setFieldError}) => {

        }
    })

    return (
        <div className={"flex min-h-dvh justify-center items-center"}>
            <form
                onSubmit={onFormSubmit}
                className={"max-w-100 bg-neutral-50/30 w-full border border-neutral-100 min-h-60 flex flex-col gap-6 justify-start items-center p-6"}>
                <div className={"w-full"}>
                    <div className={"max-w-28 w-full mx-auto mb-4"}>
                        <HwLogo/>
                    </div>

                    <div className={"text-left"}><h1 className={"text-xl font-semibold"}>Se connecter</h1></div>
                </div>

                <div className={"flex flex-col gap-4 w-full"}>
                    <FormField className={"flex flex-col gap-2"} required name={"email"} error={errors?.email}>
                        <FormLabel>
                            Email
                        </FormLabel>
                        <HInput autoComplete={"email"} type={"email"} placeholder={"e.g: durant.pierre@gmail.com"}/>
                        <FormError/>
                    </FormField>

                    <FormField className={"flex flex-col gap-2"} required name={"password"} error={errors?.password}>
                        <FormLabel>
                            Mot de passe
                        </FormLabel>
                        <HInput autoComplete={"current-password"} type={"password"} placeholder={"password1234"}/>
                        <FormError/>
                    </FormField>

                </div>


                <div className={"w-full flex flex-col gap-6"}>
                    <p className={"text-gray-500 text-sm"}>Vous n'avez pas de compte ? Inscrivez vous <Link to={"/auth/register"} className={"underline underline-offset-2"}>ici</Link></p>
                    <HButton disabled={isSubmitting} type={"submit"}>Se connecter</HButton>
                </div>
            </form>
        </div>
    )
}

export default Login;