const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Music App</h1>
            <div className="links">

                <a href="/" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                    }}>Home</a>

                <a href="/" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Musics</a>

                <a href="/" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                    }}>About us</a>

            </div>
        </nav>
    );
}
 
export default Navbar;