import { useState } from "react";
import type { FormEvent } from "react";
import { useUsername } from "../../../hooks/useUsername";
import { MAX_USERNAME_LENGTH } from "../../../services/usernameService";
import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    const { username, loading, error, saveUsername, clearError } = useUsername();
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState("");

    const showForm = !loading && (!username || editing);

    const startEditing = () => {
        setDraft(username);
        setEditing(true);
    };

    const cancelEditing = () => {
        setEditing(false);
        clearError();
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const saved = await saveUsername(draft);
        if (saved) {
            setEditing(false);
            setDraft("");
        }
    };

    return (
        <header className="parent-header">
            {/* This is the style sheet for the header font, will implement in CSS after routes are working */}
            <link rel="preconnect" href="https://rsms.me/"/>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>

            <h1>Booksearch</h1>

            <div className="header-right">
                <div className="user-greeting">
                    {showForm ? (
                        <form onSubmit={handleSubmit} className="username-form">
                            <label htmlFor="username-input" className="visually-hidden">
                                Username
                            </label>
                            <input
                                id="username-input"
                                value={draft}
                                onChange={(e) => {
                                    setDraft(e.target.value);
                                    if (error) clearError();
                                }}
                                placeholder="Enter your username"
                                maxLength={MAX_USERNAME_LENGTH}
                                autoComplete="off"
                                autoFocus={editing}
                                />
                                <button type="submit" disabled={!draft.trim()}>
                                    Save
                                </button>
                                {editing && (
                                    <button type="button" onClick={cancelEditing}>
                                        Cancel
                                    </button>
                                )}
                                {error && (
                                    <p id="username-error" role="alert" className="username-error">
                                        {error}
                                    </p>
                                )}
                        </form>
                    ) : (
                        !loading && (
                            <p className="username-hello">
                                Hello, <strong>{username}</strong>{""}
                                <button type="button" className="username-edit" onClick={startEditing}>
                                    Change
                                </button>
                            </p>
                        )
                    )}
                </div>

                <nav className="page-list">
                    <ul>
                        <li className="books-header">
                            <Link to="/books">BOOKS</Link>
                        </li>
                        <li className="news-header">
                            <Link to="/news">NEWS</Link>
                        </li>
                        <li className="social-header">
                            <Link to="/social">SOCIAL</Link>
                        </li>
                        <li className="profile-header">
                            <Link to="/profile">PROFILE</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;