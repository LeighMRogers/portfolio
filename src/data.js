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
        abouttext: "With over 10 years of experience in digital strategy, website management, and now front-end development, I have focused on producing high-quality digital products. A big picture thinker and strategist at heart, I love working on projects from conception to final execution, with the skills to implement a web project in its entirety. My extensive experience with digital strategy and management means I understand external marketing priorities as well as digital end-user needs. Attending Nashville Software School has allowed me to apply software development to the planning and implementation process of building websites that I’ve known for over a decade.",
        aboutImage: aboutImage,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here
       projects:[
           {
            id: 1,
                title:'Pac-Man Ghost Social Network', //Project Title - Add Your Project Title Here
                service:'React App Development', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                //Project URL - Add Your Project Url Here
                url:'http://chetanverma.com/'
            },
            {
                id: 2,
                title: 'Safe Trip',
                service: 'React App Development',
                imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
            },
            {
                id: 3,
                title: 'NSS Cohort 35 Website',
                service: 'UI/UX Website Development',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
            },
            {
                id: 4,
                title: 'Bangazon',
                service: 'UI/UX Design',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
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