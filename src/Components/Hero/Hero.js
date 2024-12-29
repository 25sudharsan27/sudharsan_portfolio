import './Hero.css'
import profilepic from '../../Images/profile_pic.png'
import resume from '../../Images/resume.svg';
import linkedin from '../../Images/linkedin.svg';
import github from '../../Images/github.svg';
import leetcode from '../../Images/leetcode.svg';

const Hero = () => {
    return (
        <div className="hero">
            <img src={profilepic} className="profile-pic"/>
            <div id="hero1" className="hero__content">
                <div className="hero_name">
                    <h1 className="hero_name1">SUDHARSAN B</h1>
                    <h3 className="hero_name2">B.Tech CSE</h3>
                </div>
                <div className="hero_education">
                    <h1 className="hero_education1">Student @ Lovely Professional University</h1>
                </div>
                <div className="hero_about">
                    <h1 className="hero_about1">I am a dedicated and enthusiastic professional with a strong passion for technology and a hunger for continuous learning. Eager to explore diverse job roles within computer science and engineering, I actively update my skills and stay abreast of industry advancements. Committed to personal and professional growth in a dynamic and evolving field, I consistently apply the concepts learned in my classes to create projects, which I update on Github and Linkedin. Additionally, I am a consistent coder on Leetcode and achieved the April Batch of 2024, and I am still actively participating.</h1>
                </div>
                <div className="hero_links">
                    <div className="hero_link_btn">
                        <img src={resume} className="hero_link_btn_img" />
                        <h1 className="hero_link_btn_text">Resume</h1>
                    </div>
                    <div className="hero_link_btn1">
                        <img src={linkedin} className="hero_link_btn_img1" />
                        <img src={github} className="hero_link_btn_img1" />
                        <img src={leetcode} className="hero_link_btn_img1" />



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;