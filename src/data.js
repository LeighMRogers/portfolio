import aboutImage from "./components/images/HeadshotFun.png"
import ghostPacImage from "./components/images/GhostPacLogin.png"
import classWebsite from "./components/images/ClassWebsiteScreenshot.png"
import bangazonMockup from "./components/images/BangazonDashboard.png"
import safeTripImage from "./components/images/SafeTripMyItineraries.png"
import resume from "./components/images/LeighRogersResume2019-Developer.pdf"

export default
    {
        name :'LEIGH ROGERS',
        headerTagline: [//Line 1 For Header
                        'Hello! I\'m Leigh,',
                        //Line 2 For Header
                        'a UI/UX app developer.',
                        //Line 3 For Header
                        'Check out my work.'
    ],  resume: resume,
        //Contact Email
        contactEmail:'limarkey@gmail.com',
        abouttext: "With over 10 years of experience in digital strategy and web project management, I have focused on producing high-quality digital products. Now as a front-end developer and UI/UX designer, I have the skills to implement projects from conception to deployment. This means I understand both stakeholder priorities and digital end-user needs. A big-picture thinker and strategist at heart, I excel at standardizing user-focused and data-centric processes like UX architecture, design systems, content audits, and user research.",
        aboutImage: aboutImage,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true, //true or false
       // Change Projects Here
       projects:[
           {
            id: 1,
                title:'Ghost Pac Social Network', //Project Title
                service:'React App Development', // Add Your Service Type Here
                imageSrc: ghostPacImage,
                description:"Collaborated in a team environment to create a Pac-Man themed app using Git, React, and Ant Design. Constructed an ERD and built API calls to manage relationships, messages, events, and tasks for our ghostly users.",
                //Project URL
                url:'https://github.com/LeighMRogers/Pac-Man-Themed-React-Social-Network'
            },
            {
                id: 2,
                title: 'Safe Trip',
                service: 'React App Development',
                imageSrc: safeTripImage,
                description:"Built a React-based app for users to create itineraries that display real-time, country-specific travel advisories, incorporating the Travel-Itinerary.info Travel API.",
                url: 'https://github.com/LeighMRogers/safeTrip'
            },
            {
                id: 3,
                title: 'NSS Cohort 35 Website',
                service: 'UI/UX Website Development',
                imageSrc: classWebsite,
                description:"Served as project manager and scrum master on React-based class website highlighting students and their work. Contributed to UI/UX design planning, information architecture, and site build.",
                url: 'https://nss-day-cohort-35.github.io/website/'
            },
            {
                id: 4,
                title: 'Bangazon',
                service: 'UI/UX Design',
                imageSrc: bangazonMockup,
                description:"Delivered user experience design plan to stakeholders for an Etsy-like intranet platform incorporating information architecture, lo-fi and hi-fi mockups, user testing, competitor analysis, journey mapping, content mapping, and the HubSpot Canvas design system.",
                url: 'https://github.com/nss-day-cohort-35/bangazon'
           }

                    /*
                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
            {
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/LeighMRogers'},
            {
                name: 'Behance',
                url: 'https://www.behance.net/leighmrogers'
            },
            {
                name: 'Dribbble',
                url: 'https://dribbble.com/LeighMRogers'
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/leighmrogers/'
            }

        ]
    }