import "./Navbar.css";


const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar__links">
                <a  className="navbar-link" href="/">Home</a>
                <a  className="navbar-link" href="/">Academices</a>
                <a  className="navbar-link" href="/">Projects</a>
                <a  className="navbar-link" href="/">Experiences</a>
                <a className="navbar-link"  href="/">Skills</a>
                <a className="navbar-link"  href="/">Blogs</a>
                <a className="navbar-link"  href="/">Connect</a>
            </div>
        </div>
    );
}

export default Navbar;