import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const usernameFeatiures = (username: string) => {
    return [
        { label: "Minimim 6 characters.", valid: username.length >= 6 },
        { label: "Contains lowercase letters.", valid: /[a-z]/.test(username) },
        { label: "Contains uppercase letters.", valid: /[A-Z]/.test(username) },
    ]
}

export const passwordFeatures = (password: string) => {
    return[
        {label: "Minimum 8 characters.", valid: password.length >= 8},
        { label: "Contains lowercase letters.", valid: /[a-z]/.test(password) },
        { label: "Contains uppercase letters.", valid: /[A-Z]/.test(password) },
        {
            label: "Contains special characters.",
            valid: /[^A-Za-z0-9]/.test(password),
        },
    ]
}