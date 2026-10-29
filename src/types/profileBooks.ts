export interface Book {
    id: number;
    title: string;
    author: string;
    // pubic/assets/book-cover
    cover: string;
}

export interface ProfileInfo {
    username: string
    bio: string
}

export interface Comment {
    id: number;
    text: string;
    createdAt: string;
}

export interface CommentView extends Comment {
    displayDate: string;
}