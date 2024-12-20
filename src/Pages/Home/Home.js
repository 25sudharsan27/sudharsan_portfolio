import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Hero/>
        </div>
    )
}

export default Home