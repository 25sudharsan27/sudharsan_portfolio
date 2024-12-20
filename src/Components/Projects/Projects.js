import './Projects.css';
import project1 from '../../Images/project/project1.svg';
import project2 from '../../Images/project/project2.svg';
import project3 from '../../Images/project/project3.svg';

const Projects = () =>{

    const projects = [
        {
            name : "Job Intern Catalyst",
            date_uploaded : "Sept 2024",
            technologies:"React, Node.js, Express, Redux, RESTful APIs, MongoDB",
            description:"Developed a platform for job seekers/providers: Implemented job applications, skill assessments, and resume building.",
            image : project1,
            github : "https://github.com/25sudharsan27/SIH",
            live : "https://frontend-sih-swart.vercel.app"
        },
        {
            name : "Pragmatic Project Consilium",
            date_uploaded : "Nov 2024",
            technologies:" ReactJS, ThreeJS, Javascript, AOS",
            description:"Built a website for the company with sections like services, completed works, and an interactive roadmap.",
            image : project2,
            github : "https://github.com/25sudharsan27/pragmatic-project",
            live : "https://pragmatic-project.vercel.app"
        },
        {
            name : "Sales Dashboard",
            date_uploaded : "April 2024",
            technologies:"Microsoft Excel",
            description:"In this dashboard, we analyze sales data across various cities and categories. The primary goal of this project is to gain real-life work experience utilizing my skills.",
            image : project3,
            github : "https://github.com/25sudharsan27/excel_dashboard1",
            live : "https://github.com/25sudharsan27/excel_dashboard1/blob/main/Dashboard.xlsx"
        }
    ]

    return (
        <div>
            <div className="academics_content1" id="projects_heading">
                <div style={{display:'inline'}} id="academics_content">
                    <h1 className="academics_heading">Projects</h1>
                </div>
            </div>
            <div className="projects_content4">
            <div className="projects_content2">
                {projects.map((project,index)=>{
                    return (
                        <div className="project_item">
                            <img src={project.image} className="project-image" alt="Project image" />
                            <h1 className="project_item_name">{project.name}</h1>
                            <h1 className="project_item_duration">{project.date_uploaded}</h1>
                            <h3 className="project_item_technologies"><span className="project_item_technologies1">Technologies Used : </span>{project.technologies}</h3>
                            <h3 className="project_item_description">{project.description}</h3>
                            <div className="project_item_links">
                                <h1 className="project_item_links1">Github</h1>
                                <h1 className="project_item_links1">Live</h1>
                                <h1 className="project_item_links1">show more</h1>
                            </div>
                        </div>
                    )
                })
                }
                
            </div>
            <div className="projects_content3">
                <a className="projects_content_btn" >Show more Projects</a>
            </div>
            </div>

        </div>
    )
}


export default Projects