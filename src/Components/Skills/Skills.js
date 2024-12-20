import "./Skills.css";


const Skill = () => {
    const skills = [
        {
            heading:"Languages",
            tools : [
                "C++",
                "JAVA",
                "C",
                "Python",
                "JavaScript",
                "R"
            ]
        },
        {
            heading:"Web Technologies",
            tools : [
                "HTML",
                "CSS",
                "React",
                "Node.js",
                "Express",
                "Redux",
                "RESTful APIs",
                "Three.js"
            ]
        },
        {
            heading:"Data Science Technologies",
            tools : [
                "R",
                "MS EXCEL",
                "TABLEAU",
            ]
        },
        {
            heading:"DataBase Technologies",
            tools : [
                "SQL",
                "MongoDB",
                "POSTGRESQL"
            ]
        }
    ]
    return (
        <div className="skill">
            <div id="skills_heading" className="academics_content1" >
                <div style={{display:'inline'}} id="academics_content">
                    <h1 className="academics_heading">Skills</h1>
                </div>
            </div>
            <div className="skills_content2">
                {skills.map((skill,index)=>{
                    return (
                        <div className="skill_item">
                            <h1 className="skill_item_heading">{skill.heading}</h1>
                            <div className="skill_item_tools">
                                {skill.tools.map((tool,index)=>{
                                    return (
                                        <h3 className="skill_item_tool">{tool}</h3>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}


export default Skill;