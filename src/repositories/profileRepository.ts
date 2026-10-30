import type { Book, Comment, ProfileInfo } from "../types/profileBooks";
import {
    mockCurrentlyReading,
    mockFavoriteBooks,
    mockProfile,
} from "../mockData/profileMockData";

// Local comment storage
let comments: Comment[] = [];
let nextCommentId = 1;

// async methods so still functional when backend is introduced next sprint
export const profileRepository = {
    async getProfile(): Promise<ProfileInfo> {
        return { ...mockProfile };
    },

    async getFavoriteBooks(): Promise<Book[]> {
        return [ ...mockFavoriteBooks ];
    },

    async getCurrentlyReading(): Promise<Book[]> {
        return [ ...mockCurrentlyReading ];
    },

    async getComments(): Promise<Comment[]> {
        return [ ...comments ];
    },

    async addComment(text: string): Promise<Comment> {
        const comment: Comment = {
            id: nextCommentId++,
            text,
            createdAt: new Date().toISOString(),
        };
        comments = [comment, ...comments];
        return comment;
    },

    async deleteComment(id: number): Promise<void> {
        comments = comments.filter((c) => c.id !== id);
    },
};