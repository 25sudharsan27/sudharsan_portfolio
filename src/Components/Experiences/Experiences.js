import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import './Experiences.css';

const Experiences = () => {
  const experiences = [
    {
      name: "DCubix",
      role: "Web Developer",
      location: "Remote",
      technologies: "ReactJS, ThreeJS, Javascript, AOS",
      projects: "Pragmatic Project Consilium, Athenas Frontend.",
      duration: "Sept 2024 - Present",
      description: "I actively contributed to team collaboration by developing interactive websites that involved both frontend and backend tasks, utilizing technologies such as ReactJS, Three.js, and Python. I built UI components and forms using Material UI in ReactJS and enhanced user experiences by adding engaging animations with AOS. As a member of the Pragmatic Project Consilium and Athena’s Frontend Project teams, I worked collaboratively to achieve project goals while managing tasks effectively using Jira. My technical skill set includes expertise in ReactJS, Three.js, Python, AOS, Figma, Material UI, JavaScript, and Jira, enabling me to deliver high-quality results within project teams."
    }
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation triggers once when scrolled into view
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  // Helper function to apply AOS animations with delay
  const getAosData = (animation, delay) => ({
    "data-aos": animation,
    "data-aos-delay": delay,
  });

  return (
    <div className="experiences">
      <div id="experiences_heading" className="academics_content1">
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 className="academics_heading" {...getAosData('fade-up', 0)}>Experiences</h1>
        </div>
      </div>
      <div className="experiences_container">
        {experiences.map((experience, index) => {
          return (
            <div
              id="experiences_item"
              className="academic_item"
              {...getAosData('fade-up', index * 200)} // Adding delay based on index for staggered animation
              key={index}
            >
              <div className="academic_left">
                {/* Company Name */}
                <h1 className="academic_name" {...getAosData('fade-left', 0)}>{experience.name}</h1>
                {/* Role */}
                <h1 className="academic_name" {...getAosData('fade-left', 100)}>{experience.role}</h1>
                {/* Location */}
                <h3 className="academic_location" {...getAosData('fade-left', 200)}>( {experience.location} )</h3>
                {/* Technologies */}
                <h3 className="project_item_technologies" {...getAosData('fade-left', 300)}>
                  <span className="project_item_technologies1">Technologies Used: </span>{experience.technologies}
                </h3>
                {/* Projects Worked */}
                <h3 className="project_item_technologies" {...getAosData('fade-left', 400)}>
                  <span className="project_item_technologies1">Projects Worked: </span>{experience.projects}
                </h3>
              </div>
              <div className="academic_right">
                {/* Duration */}
                <h1 className="academic_duration" {...getAosData('fade-right', 100)}>{experience.duration}</h1>
                {/* Description */}
                <h3 className="academic_explanation" {...getAosData('fade-right', 200)}>{experience.description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experiences;
