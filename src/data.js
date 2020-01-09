import aboutImage from "./components/images/leigh-fun.jpg"

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'leigh rogers.',
        headerTagline: [//Line 1 For Header
                        'Hello! I\'m Leigh,',
                        //Line 2 For Header
                        'a UI/UX app developer.',
                        //Line 3 For Header
                        'Check out my work.'
    ],
        //Contact Email
        contactEmail:'limarkey@gmail.com',
        // Add Your About Text Here
        abouttext: "With over 10 years of experience in digital strategy and web project management, I have focused on producing high-quality digital products. Now as a front-end developer and UI/UX designer, I have the skills to implement projects from conception to deployment. This means I understand both stakeholder priorities and digital end-user needs. A big-picture thinker and strategist at heart, I excel at standardizing user-focused and data-centric processes like UX architecture, design systems, content audits, and user research.",
        aboutImage: aboutImage,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here
       projects:[
           {
            id: 1,
                title:'Ghost Pac Social Network', //Project Title - Add Your Project Title Here
                service:'React App Development', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                description:"Collaborated in a team environment to create a Pac-Man themed app using Git, React, and Ant Design. Constructed an ERD and built API calls to manage relationships, messages, events, and tasks for our ghostly users.",
                //Project URL - Add Your Project Url Here
                url:'https://github.com/LeighMRogers/Pac-Man-Themed-React-Social-Network'
            },
            {
                id: 2,
                title: 'Safe Trip',
                service: 'React App Development',
                imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                description:"Built a React-based app for users to create itineraries that display real-time, country-specific travel advisories, incorporating the Travel-Itinerary.info Travel API.",
                url: 'https://github.com/LeighMRogers/safeTrip'
            },
            {
                id: 3,
                title: 'NSS Cohort 35 Website',
                service: 'UI/UX Website Development',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                description:"Served as project manager and scrum master on React-based class website highlighting students and their work. Contributed to UI/UX design planning, information architecture, and site build.",
                url: 'https://nss-day-cohort-35.github.io/website/'
            },
            {
                id: 4,
                title: 'Bangazon',
                service: 'UI/UX Design',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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