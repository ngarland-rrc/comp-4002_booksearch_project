import type { Review } from "./review";

export interface BookSummary {
    id: number;
    title: string;
    author: string;
    cover: string;
}

export interface Book extends BookSummary {
    overview: string;
    reviews: Review[];
}