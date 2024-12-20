import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Academics from '../../Components/Academics/Academics';
import Projects from '../../Components/Projects/Projects';
import Experiences from '../../Components/Experiences/Experiences';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Hero/>
            <Academics/>
            <Projects/>
            <Experiences/>
        </div>
    )
}

export default Home