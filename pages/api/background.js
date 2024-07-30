const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Amity University Mumbai',
                degree: 'B.Tech, Computer System & Engineering',
                detail: "Bachelor's Degree in Computer System Engineering from Amity University, CGPA - 8.38",
                year: '2021-2025'
            },
            {
                id: 1,
                title: 'K.M Agrawal College',
                degree: 'HSC',
                detail: "Completed My 12th std from K.M. Agrawa' college with 91%.",
                year: '2019-2021'
            },
            {
                id: 2,
                title: 'Balak Mandir School',
                degree: 'SSC',
                detail: "Completed SSC  from Balak Mandir School",
                year: '2019'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Sahasrara Metatech Pvt. Ltd',
                role: 'Developer Intern',
                url: 'https://sahasrarameta.tech/',
                desc: 'As a MERN stack intern, I developed full-stack web applications using MongoDB, Express.js React, and Node.js. I designed RESTful APIs, managed databases, created responsive UIs, and collaborated with senior developers to optimize performance and resolve issues. This role enhanced my web development skills and teamwork abilities.',
                year: '06/2024 - Present',
                location: 'Thane, Mumbai'
            },
            {
                id: 2,
                title: 'IEEE BOMBAY SECTION',
                role: 'Intern',
                url: 'https://ieeebombay.org/',
                desc: 'As a Full Stack Developer Intern, I contributed to the development of dynamic web applications, employing a diverse tech stack to enhance both frontend and backend functionalities. Engaging in collaborative projects, I honed my skills in designing responsive user interfaces and implementing efficient server-side logic.',
                year: '09/2023 - 11/2023',
                location: 'Mumbai,Maharashtra'
            },
            

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
