import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            {/* This is the style sheet for the header font, will implement in CSS after routes are working */}
            <link rel="preconnect" href="https://rsms.me/"/>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>

            <h1>Booksearch</h1>
            <nav className="page-list">
                <ul>
                    <li className="books-header">
                        <Link to="/">BOOKS</Link>
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
        </header>
    );
}

export default Header;