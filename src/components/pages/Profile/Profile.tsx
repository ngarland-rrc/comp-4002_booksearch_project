// import { useState } from "react";
// import type { FormEvent } from "react";
import "./Profile.css";

interface Book {
    id: number;
    title: string;
    author: string;
    // Cover pulled from public imported as string
    cover: string;
}

//interface Comment {
//    id: number;
//    text: string;
//    createdAt: string;
//}

const books: Book[] = [
    { id: 1, title: "Blood Meridian", author: "Cormac McCarthy", cover: "/assets/book-cover/blood_meridian_book.png"},
    { id: 2, title: "The Passenger", author: "Cormac McCarthy", cover: "/assets/book-cover/The_Passenger_book.png"},
    { id: 3, title: "One Flew Over The Cuckoo's Nest", author: "Ken Kesey", cover: "/assets/book-cover/ken_kesey_book.jpg"},
    { id: 4, title: "Dune", author: "Frank Herbert", cover: "/assets/book-cover/dune_book.jpg"},
];

// favoriteBooks and currentlyReading share the same example books for now.
const favoriteBooks: Book[] = books;
const currentlyReading: Book[] = books;

function BookDisplay ({ title, books }: { title: string; books: Book[] }) {
    return (
        <section className="profile-section">
            <h2>{title}</h2>
            <ul className="book-grid">
                {books.map((book) => (
                    <li key={book.id} className="book">
                        <img
                            className="book-cover"
                            src={book.cover}
                            alt={`${book.title} Cover Image`}
                        />
                        <p className="book-title">{book.title}</p>
                        <p className="book-author">{book.author}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default function Profile() {
    return (
        <main className="profile">
            <section className="profile-section">
                <div>
                    <h1 className="profile-name">Example Username</h1>
                    <p className="profile-bio">I love reading books, this is my bio!</p>
                </div>
            </section>

            <BookDisplay title="Favorite Books" books={favoriteBooks} />
            <BookDisplay title="Currently Reading" books={currentlyReading} />
        </main>
    )
}