import "./Navbar.css";
import { Link as ScrollLink } from 'react-scroll';
import { scroller } from 'react-scroll';

const Navbar = ({ activeSection }) => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <ScrollLink
                    className={`navbar-link ${activeSection === "hero" ? "active" : ""}`}
                    to="hero123"
                    smooth={true}
                    duration={1000}
                >
                    Home
                </ScrollLink>
                <ScrollLink
                    className={`navbar-link ${activeSection === "academics" ? "active" : ""}`}
                    to="academics"
                    smooth={true}
                    duration={1000}
                >
                    Academics
                </ScrollLink>
                <ScrollLink
                    className={`navbar-link ${activeSection === "projects" ? "active" : ""}`}
                    to="projects"
                    smooth={true}
                    duration={1000}
                >
                    Projects
                </ScrollLink>
                <ScrollLink
                    className={`navbar-link ${activeSection === "experiences" ? "active" : ""}`}
                    to="experiences"
                    smooth={true}
                    duration={1000}
                >
                    Experiences
                </ScrollLink>
                <ScrollLink
                    className={`navbar-link ${activeSection === "skills" ? "active" : ""}`}
                    to="skills"
                    smooth={true}
                    duration={1000}
                >
                    Skills
                </ScrollLink>
                <ScrollLink
                    className={`navbar-link ${activeSection === "blogs" ? "active" : ""}`}
                    to="blogs"
                    smooth={true}
                    duration={1000}
                >
                    Blogs
                </ScrollLink>
                <ScrollLink
                    className={`navbar-link ${activeSection === "connect" ? "active" : ""}`}
                    to="connect"
                    smooth={true}
                    duration={1000}
                >
                    Connect
                </ScrollLink>
            </div>
        </div>
    );
}

export default Navbar;
