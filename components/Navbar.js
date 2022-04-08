import Link from "next/link"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link href="/">
                        <a className="nav-item nav-link">Home</a>
                    </Link>
                    <div className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Rezepte
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <Link href="/recipes">
                                <a className="dropdown-item">Übersicht</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/recipes/new">
                                <a className="dropdown-item">Neues Rezept</a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
