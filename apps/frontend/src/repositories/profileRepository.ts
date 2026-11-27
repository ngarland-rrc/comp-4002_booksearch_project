import type { Comment, ProfileInfo } from "../../../../shared/types/profile";
import type { BookSummary } from "../../../../shared/types/book";
import {
    mockCurrentlyReading,
    mockFavoriteBooks,
    mockProfile,
} from "../mockData/profileMockData";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
const COMMENTS_URL = `${API_BASE}/api/comments`;

// async methods so still functional when backend is introduced next sprint
export const profileRepository = {
    async getProfile(): Promise<ProfileInfo> {
        return { ...mockProfile };
    },

    async getFavoriteBooks(): Promise<BookSummary[]> {
        return [ ...mockFavoriteBooks ];
    },

    async getCurrentlyReading(): Promise<BookSummary[]> {
        return [ ...mockCurrentlyReading ];
    },

    async getComments(): Promise<Comment[]> {
        const res = await fetch(COMMENTS_URL);
        if (!res.ok) throw new Error("Failed to load comments");
        return res.json();
    },

    async addComment(text: string): Promise<Comment> {
        const res = await fetch(COMMENTS_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
        if (!res.ok) throw new Error("Failed to post comment");
        return res.json();
    },

    async deleteComment(id: number): Promise<void> {
        const res = await fetch(`${COMMENTS_URL}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Failed to delete comment");
    },
};