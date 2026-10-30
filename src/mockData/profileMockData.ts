import type { Book, ProfileInfo } from "../types/profileBooks";

export const mockProfile: ProfileInfo = {
    username: "Example Username",
    bio: "I love reading books, this is my bio!",
};

// Mock book array from old profile page
const books: Book[] = [
    { id : 1, title: "Blood Meridian", author: "Cormac McCarthy", 
        cover: "/assets/book-cover/blood_meridian_book.png"},
    { id : 2, title: "The Passenger", author: "Cormac McCarthy", 
        cover: "/assets/book-cover/The_Passenger_book.png"},
    { id : 3, title: "One Flew Over the Cuckoo's Nest", author: "Ken Kesey", 
        cover: "/assets/book-cover/ken_kesey_book.jpg"},
    { id : 4, title: "Dune", author: "Frank Herbert", 
        cover: "/assets/book-cover/dune_book.jpg"},
];

export const mockFavoriteBooks: Book[] = books;
export const mockCurrentlyReading: Book[] = books;