import { useCallback, useEffect, useState } from "react";
import { profileService } from "../services/profileService";
import type { Book, CommentView, ProfileInfo } from "../types/profileBooks";

export function useProfile() {
    const [profile, setProfile] = useState<ProfileInfo | null>(null);
    const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);
    const [currentlyReading, setCurrentlyReading] = useState<Book[]>([]);
    const [comments, setComments] = useState<CommentView[]>([]);
    const [draft, setDraft] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        profileService.loadProfile()
            .then((data) => {
                if (cancelled) return;
                setProfile(data.profile);
                setFavoriteBooks(data.favoriteBooks);
                setCurrentlyReading(data.currentlyReading);
                setComments(data.comments);
            })
            .catch(() => {
                if (!cancelled) setError("Could not load the profile.");
            }).finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
        
    }, []);

    const addComment = useCallback(async () => {
        try {
            const created = await profileService.addComment(draft);
            if (!created) return;
            setComments((prev) => [created, ...prev]);
            setDraft("");
        } catch {
            setError("Could not post your comment. Try again.")
        }
    }, [draft]);

    const deleteComment = useCallback(async (id: number) => {
        try {
            await profileService.deleteComment(id);
            setComments((prev) => prev.filter((c) => c.id !== id));
        } catch {
            setError("Could not delete the comment. Try again.")
        }
    }, []);

    return {
        profile,
        favoriteBooks,
        currentlyReading,
        comments,
        draft,
        setDraft,
        loading,
        error,
        addComment,
        deleteComment,
    };
}