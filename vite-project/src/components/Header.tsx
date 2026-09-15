function Header() {
    return (
        <header>
            <link rel="preconnect" href="https://rsms.me/"/>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>

            <h1>Booksearch</h1>
            <nav className="page-list">
                <ul>
                    <li className="books-header">BOOKS</li>
                    <li className="news-header">NEWS</li>
                    <li className="social-header">SOCIAL</li>
                    <li className="profile-header">PROFILE</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;