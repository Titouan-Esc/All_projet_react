import { NavLink } from 'react-router-dom'


const NavAndButton = () => {
    return (
        <nav>
            <h1>SnapShot</h1>
            <div className="button_and_recherche">
                <input type="text"/>
                <button>Serch</button>
            </div>
            <div className="choises">
                <NavLink to="/">
                    <p>Bouffes</p>
                </NavLink>
                <NavLink to="/Montaigne">
                    <p>Montagnes</p>
                </NavLink>
                <NavLink to="/Plage">
                    <p>Plages</p>
                </NavLink>
                <NavLink to="/Oiseaux">
                    <p>Oiseaux</p>
                </NavLink>
            </div>
        </nav>
    )
}

export default NavAndButton
