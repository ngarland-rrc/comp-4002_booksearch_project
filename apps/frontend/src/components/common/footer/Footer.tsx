import "./Footer.css"

function Footer() {
    return(<footer>
        <div className= "social_row">
            <a href=""><img src="/assets/social-icons/facebook.png" alt="Facebook" /></a>
            <a href=""><img src="/assets/social-icons/youtube.png" alt="Youtube" /></a>
            <a href=""><img src="/assets/social-icons/instagram.png" alt="Instagram" /></a>
            <a href=""><img src="/assets/social-icons/twitter.png" alt="Twitter" /></a>
        </div>
        <div className = "ft-list-row">
            <li><a href="">Contact us</a></li>
            <li><a href="">Our Services</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Career</a></li>
        </div>
        <div className = "copy-write">
            Nick, Lukas, Wei &#169; The Book Search Team, {new Date().getFullYear()}
        </div>
    </footer>);
}

export default Footer;