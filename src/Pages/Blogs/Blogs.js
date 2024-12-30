
import Blogs from "../../Components/Blogs/Blogs"

const Blogs1 = () => {
    const blogs = [
        {
          name: "Smart India Hackathon 2024",
          date_uploaded: "Sept 2024",
          description:
            "🚀 Excited to share that our team participated in the Smart India Hackathon 2024 and developed an innovative job and internship platform that empowers students and job seekers to find the right opportunities! 🌟Together with hashtag#NiteshJ, hashtag#VinuKanth, hashtag#ShanmukhDevarasetty, hashtag#LogeshWaran, hashtag#AshishdeepKaur, ",
          image: "https://media.licdn.com/dms/image/v2/D5622AQFEIG1n95R5jQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726818879688?e=1738195200&v=beta&t=DMBkoMwYTM5VF6Nit1KZmjX7Xtzb2nnC4jwTSHNf-20",
          link: "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_niteshj-vinukanth-shanmukhdevarasetty-activity-7242803342760894464-ol0a?utm_source=share&utm_medium=member_desktop",
        },
        {
          name: "Summer PEP Completion",
          date_uploaded: "Aug 2024",
          description:
            "🌟 Proud to share my latest achievement! 🌟 I’m thrilled to have successfully completed the PEP (Professional Enhancement Program) classes this summer, where I honed my skills in competitive coding and deepened my understanding of data structures and algorithms. 🚀 This intensive program challenged me to think critically and solve complex problems, while also allowing me to connect with a fantastic community of like-minded professionals.",
          image: "https://media.licdn.com/dms/image/v2/D5622AQGy4ykOQpgnMg/feedshare-shrink_1280/feedshare-shrink_1280/0/1724766304212?e=1738195200&v=beta&t=YtSuKVTsMHLR44WlaAwq3nc46CK8keN5hlfDxcbbG8s",
          link: "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_competitivecoding-datastructures-algorithms-activity-7234194214660497408-xEyY?utm_source=share&utm_medium=member_desktop",
        },
        {
          name: "Leetcode 50 Days Completion",
          date_uploaded: "Jun 2024",
          description:
            "Excited to share that I've successfully completed my first 100 questions on LeetCode and earned the 50 Days Badge for 2024! 🎉 Through this journey, I've honed my problem-solving skills and delved into various techniques",
          image: "https://media.licdn.com/dms/image/v2/D5622AQEqEKKumEnIhg/feedshare-shrink_800/feedshare-shrink_800/0/1718619950146?e=1738195200&v=beta&t=Zp4CBCe--agICv1inDwRDxm1p0uCy_ZZAnbMFWi54sc",
          link: "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_leetcode-coding-problemsolving-activity-7208414538923200512-x4vP?utm_source=share&utm_medium=member_desktop",
        },
        {
            name:"MS Excel Dashboard",
            date_uploaded:"Apr 2024",
            description:"Excited to share my latest Excel dashboard project, featuring dynamic pivot tables, pivot charts, and slicers for seamless data analysis. Big shoutout to my teacher, Amit Katoch, and my friends for their support! hashtag#Excel hashtag#DataAnalysis hashtag#DashboardDesign Amit Katoch",
            image:"https://media.licdn.com/dms/image/v2/D5622AQGmzvQfkKzfxA/feedshare-shrink_1280/feedshare-shrink_1280/0/1713268297712?e=1738195200&v=beta&t=9wkF0d2HancuXMsy4DwiEvd7l9yAXEK2Rn1XiAQkcMw",
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_excel-dataanalysis-dashboarddesign-activity-7185968081511354369-a4Ev?utm_source=share&utm_medium=member_desktop"

        },
        {
            name:"Data Structures and Algorithm of 72 Hours",
            date_uploaded:"Aug 2023 - Nov 2023",
            description:"Got a chance to learn Data Structures and Algorithm from scratch to advanced level in 72 hours from imneao from my university. It was a great experience to learn from scratch to advanced level in 72 hours. I have learned a lot from this course and I am very happy to share this with you all. ",
            image:"https://media.licdn.com/dms/image/v2/D5622AQEAtqXupYlWJg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1706421965675?e=1738195200&v=beta&t=JO8zWM-oIaWQAG1KUISIJEP1v4HLNH9V9pQymWdgqX4",
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_activity-7157252479695417344-63LH?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Object Oriented Programming of 72 Hours",
            date_uploaded:"Aug 2023 - Nov 2023",
            description:"Got a chance to learn Object Oriented Programming from scratch to advanced level in 72 hours from imneao from my university. It was a great experience to learn from scratch to advanced level in 72 hours. I have learned a lot from this course and I am very happy to share this with you all. ",
            image:"https://media.licdn.com/dms/image/v2/D5622AQGzxELRxdTSOg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1706421859272?e=1738195200&v=beta&t=-wCZ07CxcDxIuqn9VilPuu3mNvmrsXmWwEp_6pJSenI",
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_activity-7157252479695417344-63LH?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Introducing my new Portfolio Website",
            date_uploaded:"Jan 2024",
            description:"🚀 Excited to unveil my portfolio website! 🌐 Hello LinkedIn community! 👋 I'm thrilled to share my portfolio website with you, where creativity meets functionality. 🎨💻 🔍 Explore my Expertise: Dive into a showcase of my skills in HTML, CSS, and JavaScript, where I've honed my expertise in web development. From mastering CSS animations to refining JavaScript functionality, I bring a passion for continuous learning that transforms ideas into impactful solutions.",
            image:"https://media.licdn.com/dms/image/v2/D562DAQEg11gldpXCdw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1703926271398?e=1736146800&v=beta&t=VIBy_NTf2UQ41nP4UqjdWKHttbXtZjs33apyDvmk05c",
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_portfolio-webdesign-techinnovation-activity-7146781998752149504-kB9t?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Introducing my new Flipkart Clone",
            date_uploaded:"Dec 2023",
            description:"I’m happy to share this Flipkart Clone project I worked on recently. It was a great learning experience for me. I learned a lot of new things while working on this project. I am very happy to share this with you all. ",
            image:"https://media.licdn.com/dms/image/v2/D562DAQHtXh9fu9ku1Q/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1703570470702?e=1736150400&v=beta&t=glOCV3j0Y4lRJSUywrreTtAXJ2HO2OGkMyl6a-JkN64",
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_im-happy-to-share-this-flipkart-clone-project-activity-7145292838178545665-tS6l?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Typing Speed Test",
            date_uploaded:"Oct 2023",
            description:"I feel very happy to share this to my all friends, because I have reached 97 Words per minute typing speed in monkeytype website.",
            image:"https://media.licdn.com/dms/image/v2/D4D22AQHJujiSQ5PyLg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1700029873116?e=1738195200&v=beta&t=xg37wp7eBobsgAsR2wYqTSSOmF-MhvjhfmBdmtXa88Q",
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_i-feel-very-happy-to-share-this-to-my-all-activity-7130442099937660930-_Xaw?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Type Writing Certificate Achievement",
            date_uploaded:"Oct 2023",
            description:"I am feeling extremely delighted to have received my typing certificate from Rata Type, Platinum category certificate of 77 words per minute with a flawless 100% accuracy.",
            image:"https://media.licdn.com/dms/image/v2/D5622AQGoWvDPvLTB1g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1697646168620?e=1738195200&v=beta&t=OmT5OCDMljr0HprBrbHsbs4Wzy62JM4H-HfUDJcg_z8",
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_i-am-feeling-extremely-delighted-to-have-activity-7120444119323222016-3wPR?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Completion of Baskara Tex Website",
            date_uploaded:"Oct 2023",
            description:"🌟 Exciting News! Introducing the revamped website for my father's textile business, Baskara Tex. 👔 We've combined tradition and technology to bring you the finest textiles. Our new website, built with HTML, CSS, JavaScript, and Bootstrap, is your gateway to a world of quality fabrics and exceptional service. 💼 Explore our exquisite collection of textiles, from handcrafted yarns to artisan textiles, all designed to elevate your creative projects.",
            image:"https://media.licdn.com/dms/image/v2/D562DAQEo6SPxXfW9yQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1706424288504?e=1736154000&v=beta&t=RLwX_vnkz2emnV1KXYkiJwf2eh3QQo-7s3-r2Bu2sqc",
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_textiles-craftsmanship-quality-activity-7115396166011256832-yuoi?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name : "CGPA calculator in PYthon",
            date_uploaded:"Sept 2023",
            description:"🔔 Today I write a simple code in PYTHON to calculate the CGPA of a student. This calculator is useful for college students to calculate the CGPA with just giving no of subjects , and marks and grade of each subject",
            image : "https://media.licdn.com/dms/image/v2/D5622AQHdd3rV-DAGDQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1693409172980?e=1738195200&v=beta&t=29oD21vlPRTrO4AORvYw1k6Sp0jGeV1u-OI2-zsFlbs",
            link : "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_getting-activity-7102672876381601792-6NOQ?utm_source=share&utm_medium=member_desktop"
        },
        {
            name : "Python Gold Badge in HackerRank",
            date_uploaded:"Aug 2023",
            description:"🌟 Excited to share that I've achieved the Gold Badge in Python on HackerRank! 🌟 Through this journey, I've honed my problem-solving skills and delved into various Python techniques, from basic to advanced. 💻🚀",
            image : "https://media.licdn.com/dms/image/sync/v2/D5627AQHeOq3v3ml33Q/articleshare-shrink_480/articleshare-shrink_480/0/1711625145717?e=1736150400&v=beta&t=TXaxSqd_vgpuyiw7WCPMafVkFx6TUK18OqLKC1VbHns",
            link : "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_just-earned-the-gold-badge-for-python-on-activity-7093829751869472768-IHH-?utm_source=share&utm_medium=member_desktop"
        },
        {
            name : "Python 4 Star in HackerRank",
            date_uploaded:"Sept 2023",
            description:"🌟 Excited to share that I've achieved 4 stars in Python on HackerRank! 🌟 Through this journey, I've honed my problem-solving skills and delved into various Python techniques, from basic to advanced. 💻🚀",
            image : "https://media.licdn.com/dms/image/sync/v2/D5627AQHLTFeZERCq6Q/articleshare-shrink_480/articleshare-shrink_480/0/1711625145927?e=1736150400&v=beta&t=LrNaaCn0EV6H003fEff3QzqAUgeTkJDVezytQTnrIkA",
            link : "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_just-earned-my-4th-star-on-the-python-badge-activity-7093504457467969536-pT2B?utm_source=share&utm_medium=member_desktop"
        }
        
      ];

    return (
        <div className="home">
            <Blogs blo={blogs} />
        </div>
    )
}

export default Blogs1