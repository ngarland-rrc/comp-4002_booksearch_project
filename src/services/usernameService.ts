import { usernameRepository } from "../repositories/usernameRepository";

export const MAX_USERNAME_LENGTH = 20;

export type UsernameResult = 
    | { ok: true; username: string }
    | { ok: false; error: string };
    
// Trim and require 1-20 characters
function validateUsername(raw: string): UsernameResult {
    const username = raw.trim();

    if (!username) {
        return { ok: false, error: "Enter a username." };
    }
    if (username.length > MAX_USERNAME_LENGTH) {
        return { ok: false, error: `Username must be ${MAX_USERNAME_LENGTH} characters or fewer.`};
    }
    return { ok: true, username};
}

export const usernameService = {
    async loadUsername(): Promise<string> {
        return usernameRepository.getUsername();
    },

    async saveUsername(raw: string): Promise<UsernameResult> {
        const result = validateUsername(raw);
        if (!result.ok) return result;

        await usernameRepository.saveUsername(result.username);
        return result;
    },
};