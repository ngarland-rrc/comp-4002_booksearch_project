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