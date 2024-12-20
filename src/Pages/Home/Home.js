import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Academics from '../../Components/Academics/Academics';
import Projects from '../../Components/Projects/Projects';
import Experiences from '../../Components/Experiences/Experiences';
import Skills from '../../Components/Skills/Skills';
import Blogs from '../../Components/Blogs/Blogs';
import Connect from '../../Components/Connect/Connect';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Hero/>
            <Academics/>
            <Projects/>
            <Experiences/>
            <Skills/>
            <Blogs/>
            <Connect/>
        </div>
    )
}

export default Home