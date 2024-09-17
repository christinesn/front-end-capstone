import './Header.css'

export default function Header({children}) {
    return (
        <header>
            <img src="/images/Logo.svg" alt="" />
            {children}
        </header>
    )
}