import './Academics.css';

const Academics = () =>{
    const academics = [
        {
            name : "Lovely Professional University",
            location : "Phagwara, Punjab, India",
            extra_details : [
                {   heading : "Open Minor",
                    detail : "Data Science"
                },
                {
                    heading : "Elective Minor",
                    detail : "DevOps"
                }
            ],
            marks : {
                heading : "Grade",
                details : "8.31 CGPA"
            },
            duration : "Sept 2022 - Present",
            explanation : "I am currently pursuing a Bachelor of Technology in Computer Science and Engineering from Lovely Professional University, with Data Science as my open minor and DevOps as my elective minor. In 2024, I successfully cleared the technical interview for Summer Placement Classes at the college. During the training, I was mentored by Harsh Deep Singh, an SDE 1 at Google, who taught us competitive programming concepts and encouraged us to practice on various coding platforms. At the same time, I have worked on several projects, applying the skills I have learned through my university courses."

        },
        {
            name : "M.S.P Solai Nadar Memorial Higher Secondary School",
            location : "Dindigul, Tamil Nadu, India",
            extra_details : [
                {   heading : "Group",
                    detail : "Biology Mathematics"
                }
            ],
            marks : {
                heading : "Percentage",
                details : "73.4 %"
            },
            duration : "2016 - 2022",
            explanation : "I have completed my schooling at M.S.P. Solai Nadar Memorial Higher Secondary School, where I chose the Biology and Mathematics group for my 10+2 education."
        }

    ]
    return(
        <div className="academics">
            <div className="academics_content1" >
                <div style={{display:'inline'}} id="academics_content">
                    <h1 className="academics_heading">Academics</h1>
                </div>
            </div>
            <div className="academics_content2">
                {academics.map((academic,index)=>{
                    return (
                        <div className="academic_item">
                            <div className="academic_left">
                                <h1 className="academic_name">{academic.name}</h1>
                                <h3 className="academic_location">( {academic.location} )</h3>
                                <div className="academic_extra_details">
                                    {academic.extra_details.map((extra_detail,index)=>{
                                        return (
                                            <div className="academic_extra_detail">
                                                <h1 className="academic_extra_detail_heading">{extra_detail.heading} : </h1>
                                                <h3 className="academic_extra_detail_detail">{extra_detail.detail}</h3>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="academic_extra_detail1">
                                    <h1 className="academic_extra_detail_heading">{academic.marks.heading} : </h1>
                                    <h3 className="academic_extra_detail_detail">{academic.marks.details}</h3>
                                </div>

                            </div>
                            <div className="academic_right">
                                <h1 className="academic_duration">{academic.duration}</h1>
                                <h3 className="academic_explanation">{academic.explanation}</h3>
                            </div>
                        </div>
                    )
                })

                }
            </div>

        </div>
    )
}


export default Academics;