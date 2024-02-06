import { NavLink } from "react-router-dom";


export default function MainHeader() {
    return (
        <header id="main-header" className=" bg-main">
            <h1>Daily Planner</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/history" className={({ isActive }) => isActive ? 'active' : ''}>History</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
