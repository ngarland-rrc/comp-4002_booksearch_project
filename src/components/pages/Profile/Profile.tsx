import type { FormEvent } from "react";
import "./Profile.css";
import SiteMessage from "../../common/sitemessage/SiteMessage";
import type { SharedStateProps } from "../../common/sitemessage/SiteMessage";
import { useProfile } from "../../../hooks/useProfile";
import type { Book } from "../../../types/profileBooks";
 

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

export default function Profile({ message, setMessage }: SharedStateProps) {
    const {
        profile,
        favoriteBooks,
        currentlyReading,
        comments,
        draft,
        setDraft,
        loading,
        error,
        addComment,
        deleteComment,
    } = useProfile();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        void addComment();
    };

    // Loading profile message
    if (loading) return <main className="profle"><p>Loading profile...</p></main>

    // Add new error section at the top of the page
    return (
        <main className="profile">
            {error && <p role="alert">{error}</p>}

            <section className="profile-section">
                <div>
                    <h1 className="profile-name">{profile?.username}</h1>
                    <p className="profile-bio">{profile?.bio}</p>
                </div>
            </section>

            <BookDisplay title="Favorite Books" books={favoriteBooks} />
            <BookDisplay title="Currently Reading" books={currentlyReading} />

            <section className="comment-section">
                <h2>Comments ({comments.length})</h2>

                <form onSubmit={handleSubmit} className="comment-form">
                    <label htmlFor="comment-input" className="visually-hidden">
                        Write a comment
                    </label>
                    <textarea
                        id="comment-input"
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        placeholder="Write a comment..."
                        rows={3}
                    />
                    <button type="submit" disabled={!draft.trim()}>
                        Post comment
                    </button>
                </form>

                {/*Custom message if there are no comments present in comments list*/}
                {comments.length === 0 ? (
                    <p className="empty">No comments yet. Be the first to post one!</p>
                ) : (
                    <ul className="comment-list">
                        {comments.map((c) => (
                            <li key={c.id} className="comment">
                                <div>
                                    <p className="comment-text">{c.text}</p>
                                    <time className="comment-date">{c.createdAt}</time>
                                </div>
                                <button type="button" className="delete-button" onClick={() => deleteComment(c.id)}>
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* Prop */}
            <SiteMessage message={message} setMessage={setMessage} />
        </main>
    );
}