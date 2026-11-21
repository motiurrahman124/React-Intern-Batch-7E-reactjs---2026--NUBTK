import { NavLink } from "react-router"

function Header() {
    return (
        <>
            <header>
                <ul className="flex justify-center gap-4">
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>Products</li>
                    <li>Users</li>
                    <li>Product Details</li>
                </ul>
            </header>
        </>
    )
}

export default Header