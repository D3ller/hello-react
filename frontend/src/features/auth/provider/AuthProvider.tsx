import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import type { User } from "../../../type.ts";
import { loginSchema } from "@utils/schema.ts";
import { z } from "zod";
import { useNavigate } from "react-router";
import { apiFetch } from "@utils/api-fetch.ts";

type LoginCredentials = z.infer<typeof loginSchema>

type AuthContextType = {
    user: User | null;
    login: (credentials: LoginCredentials) => Promise<void>;
    register: (credentials: LoginCredentials) => Promise<void>;
    logout: () => Promise<void>;
    isLoading: boolean;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({children}: { children: ReactNode }) {
    const navigate = useNavigate()
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true)
    const isAuthenticated = user !== null;

    useEffect(() => {
        apiFetch<{ user: User | null }>('/auth/me', {
            credentials: 'include',
            retry: false,
        }).then(user => {
            setUser(user.user)
        }).catch(() => {
            setUser(null)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])

    const login = async (credentials: LoginCredentials) => {

        const response = await apiFetch<{ user: User }>('/auth/login', {
            body: credentials,
            method: "POST",
            credentials: "include"
        });

        setUser(response.user);
    }

    const logout = async () => {

        if (!isAuthenticated) {
            return navigate('/auth/login');
        }

        await apiFetch('/auth/logout', {
            method: "POST",
            credentials: "include"
        });

        setUser(null);
        navigate('/auth/login');

        return;
    }

    const register = async (credentials: LoginCredentials) => {
        if (isAuthenticated) return navigate('/');

        await apiFetch('/auth/register', {
            method: "POST",
            body: credentials,
            credentials: 'include'
        })

        navigate('/auth/login');

        return;
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, isLoading, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}