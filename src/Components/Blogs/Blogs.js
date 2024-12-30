import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import project1 from '../../Images/project/project1.svg';
import project2 from '../../Images/project/project2.svg';
import project3 from '../../Images/project/project3.svg';
import './Blogs.css';

const Blogs = () => {
  const blogs = [
    {
      name: "Job Intern Catalyst",
      date_uploaded: "Sept 2024",
      description:
        "Developed a platform for job seekers/providers: Implemented job applications, skill assessments, and resume building.",
      image: project1,
      link: "https://github.com/25sudharsan27/SIH",
    },
    {
      name: "Pragmatic Project Consilium",
      date_uploaded: "Nov 2024",
      description:
        "Built a website for the company with sections like services, completed works, and an interactive roadmap.",
      image: project2,
      link: "https://github.com/25sudharsan27/pragmatic-project",
    },
    {
      name: "Sales Dashboard",
      date_uploaded: "April 2024",
      description:
        "In this dashboard, we analyze sales data across various cities and categories. The primary goal of this project is to gain real-life work experience utilizing my skills.",
      image: project3,
      link: "https://github.com/25sudharsan27/excel_dashboard1",
    },
  ];

  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Trigger animations only once when they come into view
      easing: 'ease-in-out', // Easing function for smooth animation
    });
  }, []);

  // Helper function to apply AOS attributes with delay
  const getAosData = (animation, delay) => ({
    "data-aos": animation,
    "data-aos-delay": delay, // Delay for the animation in milliseconds
  });

  return (
    <div className="blogs_container">
      <div className="academics_content1" id="blogs_container">
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 className="academics_heading" {...getAosData('fade-up', 0)}>
            Blogs
          </h1>
        </div>
      </div>

      <div id="blogs_container4" className="projects_content4">
        <div className="projects_content2">
          {blogs.map((blog, index) => {
            return (
              <div
                className="project_item"
                key={index}
                {...getAosData('fade-up', index * 200)} // Stagger animations for each blog
              >
                <img
                  src={blog.image}
                  className="project-image"
                  alt="Project image"
                  {...getAosData('zoom-in', 200)} // Apply zoom-in animation for the image
                />
                <h1 className="project_item_name" {...getAosData('fade-up', 300)}>
                  {blog.name}
                </h1>
                <h1 className="project_item_duration" {...getAosData('fade-up', 400)}>
                  {blog.date_uploaded}
                </h1>
                <h3 className="project_item_description" {...getAosData('fade-up', 500)}>
                  {blog.description}
                </h3>
                <div className="project_item_links" {...getAosData('fade-up', 600)}>
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    <h1 className="project_item_links1">Show More</h1>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="projects_content3">
          <a className="projects_content_btn">Show more Blogs</a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
