const NavAndButton = () => {
    return (
        <nav>
            <h1>SnapShot</h1>
            <div className="button_and_recherche">
                <input type="text"/>
                <button>Serch</button>
            </div>
            <div className="choises">
                <button>Bouffe</button>
                <button>Montagnes</button>
                <button>Oiseaux</button>
                <button>Plage</button>
            </div>
        </nav>
    )
}

export default NavAndButton
