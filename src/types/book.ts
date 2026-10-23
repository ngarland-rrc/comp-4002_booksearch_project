import type { Review } from "./review";
export interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
    overview: string;
    reviews?: Review[];
}