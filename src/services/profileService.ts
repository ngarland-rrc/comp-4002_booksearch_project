import { profileRepository } from "../repositories/profileRepository";
import type { Book, Comment, CommentView, ProfileInfo } from "../types/profileBooks";

export interface ProfileData {
    profile: ProfileInfo;
    favoriteBooks: Book[];
    currentlyReading: Book[];
    comments: CommentView[];
}

function toCommentView(comment: Comment): CommentView {
    return {
        ...comment,
        displayDate: new Date(comment.createdAt).toLocaleString(),
    };
}

// Sorts comments by newest first
function sortNewestFirst(comments: Comment[]): Comment[] {
    return [...comments].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

// All profile service functions such for loading profile, fetching comments and books
// as well as adding and deleting comments
export const profileService = {
    async loadProfile(): Promise<ProfileData> {

        // TEMP TEMP TEMP!: I'm adding a fake 2 second delay here to test the load state,
        // and I think its a cool feature until real database interaction is implemented.
        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        const [profile, favoriteBooks, currentlyReading, comments] = await Promise.all([
            profileRepository.getProfile(),
            profileRepository.getCurrentlyReading(),
            profileRepository.getCurrentlyReading(),
            profileRepository.getComments(),
        ]);

        return {
            profile,
            favoriteBooks,
            currentlyReading,
            comments: sortNewestFirst(comments).map(toCommentView),
        };
    },

    async addComment(rawText: string): Promise<CommentView | null> {
        
        const text = rawText.trim();
        if (!text) return null;

        const comment = await profileRepository.addComment(text);

        return toCommentView(comment);
    },

    async deleteComment(id: number): Promise<void> {
        await profileRepository.deleteComment(id);
    },
};