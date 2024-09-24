import './Footer.css'

export default function Footer () {
    return (
        <footer>
            <div className="container footer-content">
                <img
                    src="/images/restaurantfood.jpg"
                    alt=""
                />
                <article>
                    <h2>Navigation</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </article>
                <article>
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="#">Address</a></li>
                        <li><a href="#">Phone</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </article>
                <article>
                    <h2>Social Media</h2>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </article>
            </div>
        </footer>
    )
}