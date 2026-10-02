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
    { id: 1, title: "Blood Meridian", author: "Cormac McCarthy", cover: "/public/assets/book-cover/blood_meridian_book.png"},
    { id: 2, title: "The Passenger", author: "Cormac McCarthy", cover: "/public/assets/book-cover/The_Passenger_book.png"},
    { id: 3, title: "One Flew Over The Cuckoo's Nest", author: "Ken Kesey", cover: "/public/assets/book-cover/ken_kesey_book.png"},
    { id: 4, title: "Dune", author: "Frank Herbert", cover: "/public/assets/book-cover/dune_book.png"},
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
            <header className="profile-header">
                <div className="avatar">
                    Users Name
                </div>
                <div>
                    <h1>Users Name</h1>
                    <p className="user-bio">I enjoy reading books</p>
                </div>
            </header>

            <BookDisplay title="Favorite Books" books={favoriteBooks} />
            <BookDisplay title="Currently Reading" books={currentlyReading} />
        </main>
    )
}