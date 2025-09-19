export type Project = {
    title: string
    description: string
    longDescription: string
    role: string
    year: string
    image: string
    images?: string[]
    link: string
    github: string
    videoUrl?: string
    tags?: string[]
}

export const projects: Project[] = [
    {
        title: 'Atlas Copco Smart Portal',
        description:
            'First unified B2B e-commerce platform for industrial tools',
        longDescription: `The Atlas Copco Smart Portal was the company's first unified B2B e-commerce platform dedicated to industrial tools, serving as a progressive web app storefront built with Angular and powered by Intershop Commerce Suite. This agile-driven project brought together client, business, design, and development teams to deliver a first-class digital experience for Atlas Copco's industrial customers.`,
        role: `I was responsible for front-end development and led the front-end team in their daily tasks, working closely with the design team and business owner to ensure a seamless and user-centric implementation.`,
        year: '2020',
        image: '/uploads/f55b0014-566e-4de4-aceb-ee807cc694ef.png',
        link: 'https://www.atlascopco.com/en-uk/itba/products',
        github: 'https://github.com/intershop/intershop-pwa',
        tags: ['Web Development'],
    },
    {
        title: 'Rogue Bees – Accenture Song',
        description:
            'A global innovation initiative empowering employees across 125 hubs to explore emerging trends',
        longDescription: `Rogue Bees was a global innovation initiative launched by Accenture Song in collaboration with Hyper Island. It aimed to drive grassroots innovation by empowering employees across 125 global hubs to explore emerging trends and challenge conventional thinking. The project fostered a thriving creative community through monthly themes—starting with the Metaverse—along with newsletters, interviews, virtual events, and expert insights. Rogue Bees became a catalyst for culture change and ultimately inspired the creation of a new business unit focused on future technologies.`,
        role: `As the UX and visual designer for the Rogue Bees project, I was responsible for designing and producing all visual content and digital communication materials. I collaborated closely with the copywriter and content team to ensure a cohesive and engaging experience across platforms. My work included designing monthly newsletters, visual layouts, and digital assets that brought the stories and trends to life. I used Adobe Creative Cloud, Figma, and Mailchimp to create on-brand, impactful content that supported both storytelling and community engagement.`,
        year: '2021–2022',
        image: '/uploads/53337115-a82f-4bbe-b355-d37ab778ac4e.png',
        link:
            'https://www.figma.com/proto/0PBM6thwi2J4qBwhesBNwa/LookBack-Book?page-id=0%3A1&node-id=100-9185&p=f&viewport=564%2C-866%2C0.13&t=mgwDVMD1L9680Ct6-1&scaling=contain&content-scaling=fixed&starting-point-node-id=100%3A9185',
        github: '#',
        tags: ['Experience Design'],
    },
    {
        title: 'TransitionView',
        description:
            'A scientific innovation for companies transitioning to net-zero emissions',
        longDescription: `TransitionView represents a scientific innovation, born out of a collaborative effort between Another Tomorrow, esteemed professors, and climate scientists. Launched in 2023, this tool is currently undergoing trials by various Swedish companies as they navigate their transition towards net-zero emissions.`,
        role: `My responsibilities included researching and exploring various branding elements, ultimately initialising a design system. I also created a set of marketing materials and produced videos trailers to consistently convey the tool's capabilities and value in aiding companies toward their net-zero goals. This foundational work was crucial in establishing TransitionView's brand presence in its initial phase.`,
        year: '2023',
        image: '/uploads/d8131e9b-fecb-42f0-b46b-bdd4589231f8.png',
        link: '#',
        github: '#',
        videoUrl: 'https://drive.proton.me/urls/HBMQY5BR6M#4pRfg1ae1ddj',
        tags: ['Prototyping'],
    },
    {
        title: 'The Future of Breakfast with Arla',
        description:
            'A vending machine prototype for healthy breakfasts targeting teenagers',
        longDescription: `The 'Future of Breakfast' project was a collaborative effort with the Area Innovation Team, which has been working with Another Tomorrow since last summer. During a hackathon held in the summer, the winning idea was further developed in the fall. This concept involved creating a vending machine prototype designed to serve healthy breakfasts to teenagers at reasonable prices. The first test was run at Fryshuset in October 2023, collecting almost a hundred responses.`,
        role: `My responsibilities involved researching and exploring all the technical aspects of the prototypes. Once approved by the client, Daniele constructed the vending machine prototype and developed its digital counterpart in Figma. On the test day, the prototype was equipped with tracking analytics, enabling us to collect an extensive dataset about user interactions. This was complemented by qualitative data gathered from interviews.`,
        year: '2024',
        images: [
            '/uploads/43157a96-e053-4c75-9618-2b3ca6503f4e.png',
            '/uploads/a90c27c0-d51d-4b01-b7ee-acc92378aabb.png',
            '/uploads/15d70303-40c9-4aa2-8c9c-abe3ef9ec6cd.png',
        ],
        image: '/uploads/a90c27c0-d51d-4b01-b7ee-acc92378aabb.png',
        link:
            'https://www.figma.com/proto/5QNP1cHA1gde3dNKap7NhT/Breakbot?page-id=0%3A1&node-id=702-188&starting-point-node-id=702%3A188&show-proto-sidebar=1&t=SXTQ6dHhRvaShRrL-1',
        github: '#',
        tags: ['Experience Design', 'Prototyping'],
    },
    {
        title: 'Prototyping Sustainable Logistics with DFDS',
        description:
            "Redefining sustainable logistics routes for Denmark's largest logistics company",
        longDescription: `DFDS, standing as Denmark's largest logistics company, embarked on project to redefine sustainable logistics for their clients. The goal was to create a comprehensive model of logistic routes that incorporated a myriad of sustainable requirements, meeting the rising demand for eco-friendly transportation solutions.`,
        role: `My role was to bring clarity and interaction to the sustainable logistics model through proficient prototyping using Figma. I was tasked with translating the complex requirements and data into intuitive, user-friendly prototypes, showcasing the viability of sustainable routes.`,
        year: '2023',
        images: [
            '/uploads/87652519-d152-411b-a621-4a1d56fc71e6.png',
            '/uploads/a35d15e2-1374-4635-8e73-a20e9a7fc89e.png',
        ],
        image: '/uploads/87652519-d152-411b-a621-4a1d56fc71e6.png',
        link:
            'https://www.figma.com/proto/BNpDVxy3wEAWw2BChiCDxs/DFDS?page-id=1319%3A2&node-id=1458-1011&starting-point-node-id=1458%3A1011&show-proto-sidebar=1&t=gaOSikoek3NJmWXP-1',
        github: '#',
        tags: ['Prototyping'],
    },
    {
        title: 'PostNord Last Mile Dashboard',
        description:
            "A monitoring dashboard for Sweden's national postal service terminal managers",
        longDescription: `The Last Mile Dashboard, developed for Sweden's national postal service, is a web application that enables terminal managers at PostNord to monitor the activities of specific couriers during their shifts. This complex application began as a prototype in spring 2020 and was launched in Sweden in December 2020. The development process involved a team of three technologists and two project managers, who collaborated closely with the client's stakeholders and, later, IT architects.`,
        role: `I served as the Front End Developer and Designer for the application, which was built using React and Node.js. My responsibilities included creating the design system, wireframes, and mockups in Figma.`,
        year: '2020',
        images: [
            '/uploads/813e7db6-beb6-411d-8ecf-9f4c3bd54be4.png',
            '/uploads/631f779f-a34e-4e71-bd49-e5feaffa617f.png',
        ],
        image: '/uploads/813e7db6-beb6-411d-8ecf-9f4c3bd54be4.png',
        link: 'https://www.anothertomorrow.com/cases/prototyping-postnord',
        github: '#',
        tags: ['Prototyping', 'Web Development'],
    },
    {
        title: 'PostNord SWAN Dashboard',
        description:
            'A dashboard tool that saved over 1,000,000 failed deliveries for PostNord Sweden',
        longDescription: `Swan Dashboard is a product installed in all PostNord terminals in Sweden. It is a tool for the delivery team towards specific KPIs. Born as a prototype before COVID, it has been evolving in accordance with request from Customer Experience at PostNord. Since its launched into production, PostNord has saved more than 1.000.000 of failed deliveries within the range 2020-2022.`,
        role: `Front End Developer and Designer of the application based on React/Redux. Design system, wireframes and mockups built in Figma. Remote user testing to evaluate and iterate the app features.`,
        year: '2020–2022',
        image: '/uploads/2e635239-c6ce-4168-ac58-609fd397e61d.png',
        link: '#',
        github: '#',
        tags: ['Web Development'],
    },
    {
        title: 'Electrolux Scorecard',
        description:
            'An internal dashboard providing real-time overview of critical KPIs',
        longDescription: `An internal dashboard developed in collaboration with Fjord for Electrolux, the Electrolux Scorecard provides a real-time overview of the company's most critical KPIs. The web-based platform enables stakeholders to interactively explore and monitor the organization's performance, drawing live data directly from Electrolux's Qlik-managed data lake. This empowers decision-makers to gain timely insights and make data-driven decisions with confidence.`,
        role: `Leveraging the Qlik Sense data analytics framework, Daniele was responsible for collecting real-time data from the company's data lake and constructing the dashboard interface. The solution was primarily built using HTML, CSS, and vanilla JavaScript, ensuring a responsive and user-friendly experience. Daniele's work enabled seamless integration of dynamic analytics, allowing users to visualize, analyze, and act on key business metrics efficiently.`,
        year: 'Spring 19',
        image: '/uploads/04630c09-7217-4ad2-9d7e-c99576fd41ce.png',
        link: '#',
        github: '#',
        videoUrl: '#',
        tags: ['Prototyping', 'Web Development'],
    },
    {
        title: 'KIA Inspiration Lab',
        description:
            'Intensive 2-day global hackathon tackling educational creativity challenges',
        longDescription: `An intensive 2-day remote hackathon designed to tackle one of today's most pressing educational challenges: "How can we embed creativity into young people's lives as deeply as we embed literacy?" This global collaborative experience brought together 12 diverse participants across multiple time zones, including creative professionals from KIA, educational specialists, and hand-picked experts from education, science, and culture.`,
        role: `As both facilitator and active contributor on Team 3, I guided our diverse group through the human-centered design process while ensuring every voice was heard and valued. My dual role involved: Orchestrated productive remote collaboration across different time zones and cultural backgrounds and guided the team through structured ideation, prototyping, and presentation phases.`,
        year: '2023',
        image: '/uploads/47f7f473-4a8f-4714-99e8-69f8ddf01446.png',
        link: '#',
        github: '#',
        videoUrl:
            'https://www.youtube.com/watch?v=BFilUBLrVVc&feature=youtu.be',
        tags: ['Facilitation'],
    },
    {
        title: 'The Curious Question Cards',
        description:
            "A proof of concept card deck to spark children's curiosity through unexpected word combinations",
        longDescription: `The Curious Question Cards were born out of the KIA Inspirational Lab, a 2-day global hackathon co-organized with Hyper Island. We co-developed a proof of concept for a deck of cards designed to spark children's curiosity and imagination through unexpected word combinations. Our team created and tested the prototype in three languages with groups of children across Europe. The cards encourage open-ended thinking by prompting playful, exploratory questions — a tool to foster creative confidence in learning environments.`,
        role: `Led the proof of concept design, focusing on simplicity, clarity, and engagement for children. Facilitated and organized user testing sessions with children, incorporating feedback into rapid iterations. Supported a remote-first, cross-cultural team through structured ideation, prototyping, and storytelling.`,
        year: '2023',
        image: '/uploads/5e2552aa-8497-48c7-bf69-a2a63272a7e3.png',
        link: '#',
        github: '#',
        videoUrl:
            'https://www.youtube.com/watch?v=6lZ3q1EfRVI&feature=youtu.be',
        tags: ['Prototyping', 'Experience Design'],
    },
    {
        title: 'Utopia Lab',
        description:
            'A 290-participants hackathon in Helsingborg where youth and decision makers solve city challenges',
        longDescription: `I co-created a 290-participants hackathon in Helsingborg within H22 City Expo initiatives. The hackathon where youth and decision makers come together to solve some of the biggest challenges, creating Utopian Objects and Visions that will have the chance to be realised and tested in Helsingborg's city. The challenges are centered around some of today's most pertinent topics such as the environment and sustainability, mental health, democracy and participation, meaningful leisure time and discrimination.`,
        role: `My role was to create concepts and material for the hackathon, manage all the technical aspects of uploading and processing the content for Instagram and the interaction for voting each object with customised QR code.`,
        year: 'June 2022',
        image: '/uploads/e085c25c-8116-436a-a385-c1f6b10e76bb.png',
        link: 'https://www.instagram.com/utopialab_hbg/',
        github: '#',
        videoUrl: 'https://www.youtube.com/watch?v=mhb2m8TXc4o',
        tags: ['Facilitation'],
    },
]
