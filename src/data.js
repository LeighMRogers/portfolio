import aboutImage from "./components/images/HeadshotFun.png"
import ghostPacImage from "./components/images/GhostPacLogin.png"
import classWebsite from "./components/images/ClassWebsiteScreenshot.png"
import bangazonMockup from "./components/images/BangazonDashboard.png"
import safeTripImage from "./components/images/SafeTripMyItineraries.png"
import resume from "./components/images/LeighRogersResume2019-Developer.pdf"
import AlcanzaImage from "./components/images/AlcanzaLanding.png"
import LivedInLanding from "./components/images/LivedInLanding.png"

export default
    {
        name :'LEIGH ROGERS',
        headerTagline: [//Line 1 For Header
                        'Hello! I\'m Leigh,',
                        //Line 2 For Header
                        'a UI/UX designer & developer.',
                        //Line 3 For Header
                        'Check out my work.'
    ],  resume: resume,
        //Contact Email
        contactEmail:'limarkey@gmail.com',
        abouttext: "With over 10 years of experience in digital strategy and web project management, I have focused on producing high-quality digital products. Now as a front-end developer and UI/UX designer, I have the skills to implement projects from conception to deployment. This means I understand both stakeholder priorities and end-user needs. A big-picture thinker and strategist at heart, I excel at standardizing user-focused and data-centric processes like UX architecture, design systems, content audits, and user research.",
        aboutImage: aboutImage,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true, //true or false
       // Change Projects Here
       projects:[
            {
                id: 1,
                title: 'LivedIn',
                service: 'React App Development | UI/UX Research & Design',
                date: "February 2020",
                imageSrc: LivedInLanding,
                description: "Built a React-based app that searches rental homes and apartment buildings by geolocation using Leaflet API and Mapbox and gives users the ability to rate apartment units and homes. Created a robust UI/UX case study including user research, empathy maps, personas, usability testing, lo- and hi-fi mockups, and design system.",
                url: 'https://github.com/LeighMRogers/LivedIn'
            },
            {
                id: 2,
                title: 'Alcanza',
                service: 'UI/UX Research & Design',
                date: "Jan-Feb 2020",
                imageSrc: AlcanzaImage,
                description:"Researched and delivered a user experience design solution for client Tennessee Immigrant & Refugee Rights Coalition (TIRRC) of a citizenship mentoring app, showcasing user research, contextual inquiry, lo- and hi-fi mockups, usability testing, user flow charts, and functional decomposition of the user experience of all user types: mentors, mentees, and admins. Resulted in high client satisfaction by clarifying user needs and program goals.",
                url: 'https://docs.google.com/presentation/d/1xbWSW-3UcPYLpLtxNnBuErsDtr0GCbcVcapARPrF8ow/edit?usp=sharing'
            },
            {
                id: 3,
                title: 'Bangazon',
                service: 'UI/UX Research & Design',
                date: "December 2019",
                imageSrc: bangazonMockup,
                description:"Delivered user experience design plan to stakeholders for an Etsy-like intranet platform incorporating information architecture, lo-fi and hi-fi mockups, user testing, competitor analysis, journey mapping, content mapping, and the HubSpot Canvas design system.",
                url: 'https://github.com/nss-day-cohort-35/bangazon'
            },
            {
                id: 4,
                title: 'NSS Cohort 35 Website',
                service: 'UI/UX Website Development',
                date: "December 2019",
                imageSrc: classWebsite,
                description:"Served as project manager and scrum master on React-based class website highlighting students and their work. Contributed to UI/UX design planning, information architecture, and site build.",
                url: 'https://nss-day-cohort-35.github.io/website/'
            },
            {
                id: 5,
                title: 'Safe Trip',
                service: 'React App Development',
                date: "November 2019",
                imageSrc: safeTripImage,
                description:"Built a React-based app for users to create itineraries that display real-time, country-specific travel advisories, incorporating the Travel-Itinerary.info Travel API.",
                url: 'https://github.com/LeighMRogers/safeTrip'
            },
           {
                id: 6,
                title:'Ghost Pac Social Network', //Project Title
                service:'React App Development', // Add Your Service Type Here
                date: "October 2019",
                imageSrc: ghostPacImage,
                description:"Collaborated in a team environment to create a Pac-Man themed app using Git, React, and Ant Design. Constructed an ERD and built API calls to manage relationships, messages, events, and tasks for our ghostly users.",
                //Project URL
                url:'https://github.com/LeighMRogers/Pac-Man-Themed-React-Social-Network'
            },
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