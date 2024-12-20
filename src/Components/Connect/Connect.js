import "./Connect.css";
import image from "../../Images/connect.svg";
const connect = () =>{
    return(
        <div className="connect_container">

            <div className="academics_content1" id="connect_heading">
                <div style={{display:'inline'}} id="academics_content">
                    <h1 className="academics_heading">Connect with me</h1>
                </div>
            </div>
            <div className="connect_container2">
                <img src={image} className="connect-image" alt="connect image" />
                <div className="connect_form">
                    <h1 className="connect_input_label">Name</h1>
                    <input type="text" placeholder="Enter your Name" aboveholder="Name" className="connect_input" />
                    <h1 className="connect_input_label">Email</h1>
                    <input type="text" placeholder="Enter your Email" aboveholder="Name" className="connect_input" />
                    <h1 className="connect_input_label">Message</h1>
                    <textarea type="text" placeholder="Write your Message" aboveholder="Name" id="connect_textarea" className="connect_input" />
                    <button className="connect_button">Send</button>
                </div>
            </div>
        </div>
    )
}


export default connect;