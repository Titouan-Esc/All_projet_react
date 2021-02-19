import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">
                <img src="https://images.pexels.com/photos/6032870/pexels-photo-6032870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Un avion"/>
            </NavLink>
            <div>
                <NavLink to = "/Projets" activeClassName="select">
                    <p>Projets</p>
                </NavLink>
                <NavLink to = "/Contact" activeClassName="select">
                    <p>Contact</p>
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar
