export default function Header({children}) {
    return (
        <header>
            <img src="/Logo.svg" alt="" />
            {children}
        </header>
    )
}