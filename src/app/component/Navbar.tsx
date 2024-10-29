import Link from "next/link";

export default function NavBar(){
    return (
    <nav className="navbar">
            <div className="container">
            <h1 className="logo">John's Portfolio</h1>
            <ul className="nav-links">
                <li><a href="#">Work</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}