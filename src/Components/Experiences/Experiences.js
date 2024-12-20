import "./Experiences.css";



const Experiences = () =>{
    const experiences =[
        {
            name : "DCubix",
            role : "Web Developer",
            location : "Remote",
            technologies : "ReactJS, ThreeJS, Javascript, AOS",
            projects : "Pragmatic Project Consilium,  Athenas Frontend.",
            duration : "Sept 2024 - Present",
            description : "I actively contributed to team collaboration by developing interactive websites that involved both frontend and backend tasks, utilizing technologies such as ReactJS, Three.js, and Python. I built UI components and forms using Material UI in ReactJS and enhanced user experiences by adding engaging animations with AOS. As a member of the Pragmatic Project Consilium and Athena’s Frontend Project teams, I worked collaboratively to achieve project goals while managing tasks effectively using Jira. My technical skill set includes expertise in ReactJS, Three.js, Python, AOS, Figma, Material UI, JavaScript, and Jira, enabling me to deliver high-quality results within project teams."
        }
    ]
    return (
        <div className="experiences">
            <div id="experiences_heading" className="academics_content1" >
                <div style={{display:'inline'}} id="academics_content">
                    <h1 className="academics_heading">Experiences</h1>
                </div>
            </div>
            <div className="experiences_container">
                {experiences.map((academic,index)=>{
                    return (
                        <div id="experiences_item" className="academic_item">
                            <div className="academic_left">
                                <h1 className="academic_name">{academic.name}</h1>
                                <h1 className="academic_name">{academic.role}</h1>
                                <h3 className="academic_location">( {academic.location} )</h3>
                                <h3 className="project_item_technologies"><span className="project_item_technologies1">Technologies Used : </span>{academic.technologies}</h3>
                                <h3 className="project_item_technologies"><span className="project_item_technologies1">Projects Worked : </span>{academic.projects}</h3>
                                

                            </div>
                            <div className="academic_right">
                                <h1 className="academic_duration">{academic.duration}</h1>
                                <h3 className="academic_explanation">{academic.description}</h3>
                            </div>
                        </div>
                    )
                })

                }
            </div>

        </div>
    )
}

export default Experiences;