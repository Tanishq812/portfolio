const portfolio = [
    {
        id: 0,
        projectName: "BloodBank Management System",
        url: "",
        image: "/projects/bloodbank.jpg",
        projectDetail: "I successfully designed and implemented a Blood Bank Management System using MySQL,ensuring seamless data organization and retrieval. This project facilitated efficient tracking of blood inventory, donor information, and recipient details, contributing to streamlined operations in a healthcare setting.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "mySQL"
            },
            {
                tech: "NodeJS"
            },
            
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Web Browser Using Python",
        url: "",
        image: "/projects/WebBrowser.jpg",
        projectDetail: "Developed a custom web browser using Python, showcasing proficiency in GUI developmentand web navigation functionalities. Implemented features such as tab management and bookmarking, highlighting strong problem-solving and programming skills.",
        technologiesUsed: [
            {
                tech: "Python"
            },
            {
                tech: "Django"
            },
            
        ]
    },
    {
        id: 0,
        projectName: "Flight Reservation Management System",
        url: "",
        image: "/projects/flight.jpg",
        projectDetail: "I spearheaded the development of a comprehensive Flight Reservation Management System using HTML, CSS, JavaScript, Python, and Django. Through meticulous design and implementation, I ensured seamless user experiences and efficient backend processes,showcasing my proficiency in full-stack web development.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Javascript"
            },
            {
                tech: "Python"
            },
            {
                tech: "Django"
            },
        ]
    },
    {
        id: 0,
        projectName: "Github Repository Listing Page",
        url: "",
        image: "/projects/github.png",
        projectDetail: "I developed a GitHub Repositories listing page using Angular, leveraging the framework's powerful features to create a dynamic and responsive user interface. The page allows users to browse through GitHub repositories with ease, showcasing key information and enabling seamless navigation within the Angular environment.",
        technologiesUsed: [
            {
                tech: "Angular"
            },
            {
                tech: "ExpressJs"
            },
            {
                tech: "Nodejs"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Sign Language Detection Using Flask",
        url: "",
        image: "/projects/sign.jpg",
        projectDetail: "Developed a Sign Language Detection system using Flask, which accurately interprets hand gestures into corresponding text. Utilized machine learning algorithms for gesture recognition and integrated a user-friendly web interface for real-time interaction.",
        technologiesUsed: [
            {
                tech: "Machine Learning"
            },
            {
                tech: "OpenCV"
            },
            {
                tech: "TensorFLow"
            },
            
        ]
    },
    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
