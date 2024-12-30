import { useEffect, useRef, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Projects from '../../Components/Projects/Projects';
import project1 from '../../Images/project/project1.svg';
import project2 from '../../Images/project/project2.svg';
import project3 from '../../Images/project/project3.svg';

const Home = () => {
    const projects = [
        {
          name: "Job Intern Catalyst",
          date_uploaded: "Sept 2024",
          technologies: "React, Node.js, Express, Redux, RESTful APIs, MongoDB",
          description: "Developed a platform for job seekers/providers: Implemented job applications, skill assessments, and resume building.",
          image: project1,
          github: "https://github.com/25sudharsan27/SIH",
          live: "https://frontend-sih-swart.vercel.app"
        },
        {
          name: "Pragmatic Project Consilium",
          date_uploaded: "Nov 2024",
          technologies: "ReactJS, ThreeJS, Javascript, AOS",
          description: "Built a website for the company with sections like services, completed works, and an interactive roadmap.",
          image: project2,
          github: "https://github.com/25sudharsan27/pragmatic-project",
          live: "https://pragmatic-project.vercel.app"
        },
        {
          name: "Sales Dashboard",
          date_uploaded: "April 2024",
          technologies: "Microsoft Excel",
          description: "In this dashboard, we analyze sales data across various cities and categories. The primary goal of this project is to gain real-life work experience utilizing my skills.",
          image: project3,
          github: "https://github.com/25sudharsan27/excel_dashboard1",
          live: "https://github.com/25sudharsan27/excel_dashboard1/blob/main/Dashboard.xlsx"
        },
          {
            name: "Flipkart Clone",
            date_uploaded: "Dec 2023",
            technologies: "Server Side · Web Applications · Git · Cascading Style Sheets (CSS) · React.js · Debugging · Express.js · Node.js · MongoDB · JavaScript · HTML · GitHub",
            description: "This project is a frontend-clone of the popular e-commerce platform Flipkart. It replicates key features and functionalities to provide a similar user experience. The primary goal of this project is to understand concepts of communication between client and server, working with AXIOS API, node, and mongoose module.",
            image: "https://media.licdn.com/dms/image/v2/D562DAQHtXh9fu9ku1Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1703570470702?e=1736146800&v=beta&t=42LMr-wOpkvTwy1Ey3HyzEqwNbxOqk0fkKaiKtKSlUE",  // Correct image URL

            github: "https://github.com/25sudharsan27/flipkart-clone",
            live: "https://flipkart-clone-live-link"  // Replace with actual live project link
          },
          {
            name: "Portfolio",
            date_uploaded: "Dec 2023",
            technologies: "Web Applications · Git · User Interface Design · Cascading Style Sheets (CSS) · Debugging · Bootstrap (Framework) · JavaScript · HTML · Search Engine Optimization (SEO) · GitHub",
            description: "In this project, I used only HTML, CSS, and JavaScript to build this website. The goal of this website is to enhance my knowledge in CSS and JavaScript animation skills and to share my experiences and knowledge with my connections.",
            image: "https://media.licdn.com/dms/image/v2/D562DAQEg11gldpXCdw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1703926271398?e=1736146800&v=beta&t=VIBy_NTf2UQ41nP4UqjdWKHttbXtZjs33apyDvmk05c",  // Replace with actual image path
            github: "https://github.com/25sudharsan27/sudhport",
            live: "http://sudharsanb.liveblog365.com/"  // Replace with actual live project link
          },
          {
            name: "Baskara Tex Website",
            date_uploaded: "Oct 2023",
            technologies: "Web Applications · On-Page SEO · Git · User Interface Design · Cascading Style Sheets (CSS) · Debugging · Bootstrap (Framework) · JavaScript · HTML · Search Engine Optimization (SEO) · GitHub",
            description: "This website was built for the company Baskara Textiles located in Dindigul, Tamil Nadu. It was designed to provide information about the company and its services. The website was deployed using Cloudflare.",
            image: "https://media.licdn.com/dms/image/v2/D562DAQEo6SPxXfW9yQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1706424288504?e=1736146800&v=beta&t=pHyCIsGvSkOxHcpJlCYNOs0qsBo9lV0Jx4YFARfhka4",  // Replace with actual image path
            github: "https://github.com/25sudharsan27/baskaratex",
            live: "http://baskaratex.liveblog365.com/"  // Replace with actual live project link
          },
          {
            name: "Amazon-clone",
            date_uploaded: "Jul 2023 - Aug 2023",
            technologies: "Redux.js · Web Applications · Git · Cascading Style Sheets (CSS) · React.js · Debugging · Express.js · Node.js · JavaScript · HTML · GitHub",
            description: "This is a clone of the famous e-commerce platform Amazon, with functionalities such as adding items to cart, payment integration, and user authentication for login/logout. The project helps understand frontend-backend communication and how to integrate payment systems like Stripe.",
            image: "https://media.licdn.com/dms/image/v2/D562DAQECoXwuSZ-_UQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1691341799224?e=1736146800&v=beta&t=yF7ufGomEWU1M6xTSFr4D-wY9KiuMVMD2sLyu0d9i_8",  // Replace with actual image path
            github: "https://github.com/25sudharsan27/amazon-clone",
            live: "https://github.com/25sudharsan27/amazon-clone"  // Replace with actual live project link
          },
          {
            name: "Dynamic-Website",
            date_uploaded: "Jul 2023",
            technologies: "Web Applications · Git · Cascading Style Sheets (CSS) · Debugging · Express.js · Bootstrap (Framework) · Node.js · MongoDB · JavaScript · HTML · GitHub",
            description: "This website dynamically connects to a MongoDB database, allowing the client to modify website content such as names, links, and images. The website uses Mongoose to manage data with four schemas: queries, details, services, and slides.",
            image: "https://media.licdn.com/dms/image/v2/D4D2DAQFEhyty77lAEA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1689578835738?e=1736146800&v=beta&t=NH7h9O6SPRZtcQkNLnLSe4D0OaIeymhcr12CdMUdJm0",  // Replace with actual image path
            github: "https://github.com/25sudharsan27/Dynamic_website",
            live: "https://github.com/25sudharsan27/Dynamic_website"  // Replace with actual live project link
          },
          {
            name: "Spam-or-ham",
            date_uploaded: "Jun 2023 - Jul 2023",
            technologies: "TensorFlow · Machine Learning · Deep Learning · Python (Programming Language) · Artificial Intelligence (AI) · Natural Language Processing (NLP)",
            description: "In this project, I created a deep learning AI model to classify whether a given sentence is spam or ham, using data derived from online sources.",
            image: "https://media.licdn.com/dms/image/sync/v2/D4D27AQHcBTPiyN5Cfg/articleshare-shrink_160/articleshare-shrink_160/0/1731741324776?e=1736146800&v=beta&t=AbFjGk6YspF87-tARn_moQ-enRkWxhIq4SMSZ_lYrlM",  // Replace with actual image path
            github: "https://github.com/25sudharsan27/deeplearning-ai-models",
            live: "https://github.com/25sudharsan27/deeplearning-ai-models"  // Replace with actual live project link
          },
          {
            name: "Species-finder(ANN)",
            date_uploaded: "Jun 2023 - Jul 2023",
            technologies: "TensorFlow · Machine Learning · Deep Learning · Python (Programming Language) · Artificial Intelligence (AI)",
            description: "This project uses species data (petal and sepal sizes) to create a deep learning AI model with 3 output nodes and 2 hidden layers, built using TensorFlow in Python.",
            image: "https://media.licdn.com/dms/image/sync/v2/D4D27AQHcBTPiyN5Cfg/articleshare-shrink_160/articleshare-shrink_160/0/1731741324776?e=1736146800&v=beta&t=AbFjGk6YspF87-tARn_moQ-enRkWxhIq4SMSZ_lYrlM",  // Replace with actual image path
            github: "https://github.com/25sudharsan27/deeplearning-ai-models",
            live: "https://github.com/25sudharsan27/deeplearning-ai-models"  // Replace with actual live project link
          },
          {
            name: "is-Sarcastic-model",
            date_uploaded: "Jun 2023 - Jul 2023",
            technologies: "TensorFlow · Machine Learning · Deep Learning · Python (Programming Language) · Artificial Intelligence (AI) · Natural Language Processing (NLP)",
            description: "This model determines whether a given sentence is sarcastic or not, using deep learning techniques.",
            image: "https://media.licdn.com/dms/image/sync/v2/D4D27AQHcBTPiyN5Cfg/articleshare-shrink_160/articleshare-shrink_160/0/1731741324776?e=1736146800&v=beta&t=AbFjGk6YspF87-tARn_moQ-enRkWxhIq4SMSZ_lYrlM",  // Replace with actual image path
            github: "https://github.com/25sudharsan27/deeplearning-ai-models",
            live: "https://github.com/25sudharsan27/deeplearning-ai-models"  // Replace with actual live project link
          },
          {
            name: "text-generator-model",
            date_uploaded: "Jun 2023 - Jul 2023",
            technologies: "TensorFlow · Machine Learning · Deep Learning · Python (Programming Language) · Artificial Intelligence (AI) · Natural Language Processing (NLP)",
            description: "This model generates text based on a set of sentences derived from the Harry Potter 4 storyline, generating over 50 words to maintain continuity of the given sentences.",
            image: "https://media.licdn.com/dms/image/sync/v2/D4D27AQHcBTPiyN5Cfg/articleshare-shrink_160/articleshare-shrink_160/0/1731741324776?e=1736146800&v=beta&t=AbFjGk6YspF87-tARn_moQ-enRkWxhIq4SMSZ_lYrlM",  // Replace with actual image path
            github: "https://github.com/25sudharsan27/deeplearning-ai-models",
            live: "https://github.com/25sudharsan27/deeplearning-ai-models"  // Replace with actual live project link
          },
          {
            name: "Conservation of Biodiversity Website",
            date_uploaded: "Mar 2023 - May 2023",
            technologies: "Cascading Style Sheets (CSS) · HTML",
            description: "This project aimed to raise awareness about biodiversity and its conservation. It is an Environmental Studies CA project created with my group members.",
            image: "https://media.licdn.com/dms/image/v2/D4D2DAQEHhed91vGkPQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1689303105381?e=1736146800&v=beta&t=WPeMq-KqREQG6z5lQTb6ekWe4yUa35dPQD4kA2JwUmk",  // Replace with actual image path
            github: "https://github.com/25sudharsan27/Biodiversity-Website",
            live: "https://github.com/25sudharsan27/Biodiversity-Website"  // Replace with actual live project link
          },
          {
            name: "KAVACH_APP",
            date_uploaded: "Apr 2023",
            technologies: "Cybersecurity, Python",
            description: "This application analyzes incoming calls and messages for potential cybersecurity threats.",
            image: "https://media.licdn.com/dms/image/v2/D4D2DAQG-GW7SRNNuXg/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1689303525950?e=1736146800&v=beta&t=hJNWKrm0qivs9Nn7mjhmuxg1l7VoagC9JsFUdCl7ZpQ",  // Replace with actual image path
            github: "https://github.com/Sd-Shiivam/KAVACH_App",
            live: "https://github.com/Sd-Shiivam/KAVACH_App"  // Replace with actual live project link
          },
          {
            name: "Personal Finance Management System",
            date_uploaded: "Mar 2023",
            technologies: "Microsoft Excel · Tkinter · SQL · Python (Programming Language)",
            description: "This was my first hackathon project, focusing on managing personal finances and learning new tech like Tkinter and SQL.",
            image: "https://media.licdn.com/dms/image/v2/D4D2DAQHesIkOnm_q0Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1689303870552?e=1736146800&v=beta&t=FhA8t-QcQcYAv8DtWrf_PgsKsy3XwRelKQM0T92dSQs",  // Replace with actual image path
            github: "https://github.com/25sudharsan27/Personal-finance-Management-System",
            live: "https://github.com/25sudharsan27/Personal-finance-Management-System"  // Replace with actual live project link
          }
      ];

     
      
    return (
        <div className="home">
            <Projects pro={projects}/>
        </div>
    );
}

export default Home;
