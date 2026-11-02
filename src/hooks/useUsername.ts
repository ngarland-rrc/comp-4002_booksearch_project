import { useCallback, useEffect, useState } from "react";
import { usernameService } from "../services/usernameService";

export function useUsername() {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        usernameService.loadUsername()
            .then((saved) => {
                if (!cancelled) setUsername(saved);
            })
            .catch((err) => console.error("loadUsername failed: ", err))
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    const saveUsername = useCallback(async (raw: string): Promise<boolean> => {
        try {
            const result = await usernameService.saveUsername(raw);
            if (!result.ok) {
                setError(result.error);
                return false;
            }
            setUsername(result.username);
            setError(null);
            return true;
        } catch {
            setError("Could not save your username. Try again.")
            return false;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return { username, loading, error, saveUsername, clearError };
}

export type UsernameState = ReturnType<typeof useUsername>;