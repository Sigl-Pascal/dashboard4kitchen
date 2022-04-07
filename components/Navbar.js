import Link from 'next/link'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link href="/">
                        <a className="nav-item nav-link">Home</a>
                    </Link>
                    <Link href="/recipes">
                        <a className="nav-item nav-link">Rezepte</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
