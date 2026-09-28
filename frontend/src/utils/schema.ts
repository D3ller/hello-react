import { z } from "zod"

export const loginSchema = z.object({
    email: z.email({error: "Adresse email invalide"}),
    password: z.string().min(8, {error: "Votre mot de passe est trop court"}).max(64, {error: "Votre mot de passe est trop long"}).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Le mot de passe doit container un chiffre, une majuscule et un caractère spéciale")
});