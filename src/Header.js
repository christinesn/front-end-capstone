import './Header.css'
import { Link } from 'react-router-dom'

export default function Header({children}) {
    return (
        <header>
            <Link to="/">
                <img src="/images/Logo.svg" alt="" />
            </Link>
            {children}
        </header>
    )
}