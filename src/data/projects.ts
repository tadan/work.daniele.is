export type Project = {
    title: string
    description: string
    challenge: string
    solution: string
    impact: string
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
        challenge: `Atlas Copco needed their first unified B2B e-commerce platform dedicated to industrial tools. The company required a scalable, user-centric digital experience that could serve their industrial customers efficiently while maintaining the high standards expected from a global leader in industrial solutions.`,
        solution: `We developed a progressive web app storefront built with Angular and powered by Intershop Commerce Suite. This agile-driven project brought together client, business, design, and development teams to deliver a first-class digital experience that unified Atlas Copco's industrial tool offerings into a single, cohesive platform.`,
        impact: `I was responsible for front-end development and led the front-end team in their daily tasks, working closely with the design team and business owner to ensure a seamless and user-centric implementation.`,
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
        challenge: `Accenture Song needed to drive grassroots innovation by empowering employees across 125 global hubs to explore emerging trends and challenge conventional thinking. The challenge was to create an engaging platform that would foster a thriving creative community and inspire culture change across the organization.`,
        solution: `We launched Rogue Bees, a global innovation initiative in collaboration with Hyper Island. The project fostered community engagement through monthly themes—starting with the Metaverse—along with newsletters, interviews, virtual events, and expert insights. This became a catalyst for culture change and ultimately inspired the creation of a new business unit focused on future technologies.`,
        impact: `As the UX and visual designer for the Rogue Bees project, I was responsible for designing and producing all visual content and digital communication materials. I collaborated closely with the copywriter and content team to ensure a cohesive and engaging experience across platforms. My work included designing monthly newsletters, visual layouts, and digital assets that brought the stories and trends to life. I used Adobe Creative Cloud, Figma, and Mailchimp to create on-brand, impactful content that supported both storytelling and community engagement.`,
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
        challenge: `Companies across Sweden needed a scientifically-backed tool to navigate their complex transition towards net-zero emissions. The challenge was to make cutting-edge climate science accessible and actionable for businesses of varying sizes and industries.`,
        solution: `TransitionView represents a scientific innovation, born out of a collaborative effort between Another Tomorrow, esteemed professors, and climate scientists. Launched in 2023, this tool is currently undergoing trials by various Swedish companies, providing them with data-driven insights to guide their net-zero transition strategies.`,
        impact: `My responsibilities included researching and exploring various branding elements, ultimately initialising a design system. I also created a set of marketing materials and produced videos trailers to consistently convey the tool's capabilities and value in aiding companies toward their net-zero goals. This foundational work was crucial in establishing TransitionView's brand presence in its initial phase.`,
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
        challenge: `Arla needed to explore innovative ways to serve healthy breakfasts to teenagers at reasonable prices. The challenge was to create a solution that would appeal to young consumers while maintaining nutritional standards and cost-effectiveness.`,
        solution: `During a hackathon with the Area Innovation Team, we developed a winning concept: a vending machine prototype designed specifically for healthy breakfasts targeting teenagers. The prototype was tested at Fryshuset in October 2023, where we collected almost a hundred responses and valuable user interaction data.`,
        impact: `My responsibilities involved researching and exploring all the technical aspects of the prototypes. Once approved by the client, I constructed the vending machine prototype and developed its digital counterpart in Figma. On the test day, the prototype was equipped with tracking analytics, enabling us to collect an extensive dataset about user interactions. This was complemented by qualitative data gathered from interviews.`,
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
        challenge: `DFDS, Denmark's largest logistics company, faced the challenge of meeting rising demand for eco-friendly transportation solutions. They needed to create a comprehensive model of logistic routes that incorporated numerous sustainable requirements while maintaining operational efficiency.`,
        solution: `We developed an innovative approach to redefine sustainable logistics for DFDS clients. The solution involved creating a comprehensive model that integrated various sustainable requirements into logistic route planning, making eco-friendly transportation both viable and efficient.`,
        impact: `My role was to bring clarity and interaction to the sustainable logistics model through proficient prototyping using Figma. I was tasked with translating the complex requirements and data into intuitive, user-friendly prototypes, showcasing the viability of sustainable routes.`,
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
        challenge: `PostNord needed a web application that would enable terminal managers to monitor the activities of specific couriers during their shifts. The challenge was to create a complex application that could handle real-time data while being intuitive for daily operational use.`,
        solution: `We developed the Last Mile Dashboard, a comprehensive web application that began as a prototype in spring 2020 and was successfully launched in Sweden in December 2020. The development process involved a team of three technologists and two project managers, who collaborated closely with the client's stakeholders and IT architects.`,
        impact: `I served as the Front End Developer and Designer for the application, which was built using React and Node.js. My responsibilities included creating the design system, wireframes, and mockups in Figma.`,
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
        challenge: `PostNord needed a tool for delivery teams to improve their performance against specific KPIs. The challenge was to create a solution that could significantly reduce failed deliveries while being practical for daily operations across all terminals in Sweden.`,
        solution: `We developed the Swan Dashboard, a product installed in all PostNord terminals in Sweden. Born as a prototype before COVID, it evolved continuously based on requests from Customer Experience at PostNord. The solution proved highly effective, helping PostNord save over 1,000,000 failed deliveries between 2020-2022.`,
        impact: `I served as Front End Developer and Designer of the application based on React/Redux. My responsibilities included creating the design system, wireframes and mockups in Figma, as well as conducting remote user testing to evaluate and iterate the app features.`,
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
        challenge: `Electrolux needed an internal dashboard that could provide stakeholders with a real-time overview of the company's most critical KPIs. The challenge was to create an interactive platform that could draw live data from their complex data infrastructure and present it in an actionable format.`,
        solution: `We developed the Electrolux Scorecard in collaboration with Fjord, a web-based platform that enables stakeholders to interactively explore and monitor the organization's performance. The solution draws live data directly from Electrolux's Qlik-managed data lake, empowering decision-makers to gain timely insights and make data-driven decisions with confidence.`,
        impact: `Leveraging the Qlik Sense data analytics framework, I was responsible for collecting real-time data from the company's data lake and constructing the dashboard interface. The solution was primarily built using HTML, CSS, and vanilla JavaScript, ensuring a responsive and user-friendly experience. My work enabled seamless integration of dynamic analytics, allowing users to visualize, analyze, and act on key business metrics efficiently.`,
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
        challenge: `The challenge was to tackle one of today's most pressing educational questions: "How can we embed creativity into young people's lives as deeply as we embed literacy?" This required bringing together diverse perspectives and expertise to find innovative solutions.`,
        solution: `We organized an intensive 2-day remote hackathon that brought together 12 diverse participants across multiple time zones, including creative professionals from KIA, educational specialists, and hand-picked experts from education, science, and culture. This global collaborative experience fostered creative problem-solving approaches to educational challenges.`,
        impact: `As both facilitator and active contributor on Team 3, I guided our diverse group through the human-centered design process while ensuring every voice was heard and valued. My dual role involved orchestrating productive remote collaboration across different time zones and cultural backgrounds, and guiding the team through structured ideation, prototyping, and presentation phases.`,
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
        challenge: `Following the KIA Inspirational Lab, we needed to create a tangible tool that could spark children's curiosity and imagination in learning environments. The challenge was to design something simple yet effective that could encourage open-ended thinking and creative confidence.`,
        solution: `We developed a proof of concept for a deck of cards designed to spark children's curiosity through unexpected word combinations. Our team created and tested the prototype in three languages with groups of children across Europe. The cards encourage open-ended thinking by prompting playful, exploratory questions.`,
        impact: `I led the proof of concept design, focusing on simplicity, clarity, and engagement for children. I facilitated and organized user testing sessions with children, incorporating feedback into rapid iterations. I also supported a remote-first, cross-cultural team through structured ideation, prototyping, and storytelling.`,
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
        challenge: `Helsingborg needed to bring together youth and decision makers to collaboratively solve some of the city's biggest challenges. The challenge was to create a large-scale hackathon that could generate viable solutions around pertinent topics such as environment and sustainability, mental health, democracy and participation, meaningful leisure time and discrimination.`,
        solution: `We co-created a 290-participants hackathon within H22 City Expo initiatives, where youth and decision makers came together to create Utopian Objects and Visions. These solutions had the opportunity to be realized and tested in Helsingborg's city, making the hackathon a bridge between ideation and real-world implementation.`,
        impact: `My role was to create concepts and material for the hackathon, manage all the technical aspects of uploading and processing the content for Instagram and the interaction for voting each object with customised QR code.`,
        year: 'June 2022',
        image: '/uploads/e085c25c-8116-436a-a385-c1f6b10e76bb.png',
        link: 'https://www.instagram.com/utopialab_hbg/',
        github: '#',
        videoUrl: 'https://www.youtube.com/watch?v=mhb2m8TXc4o',
        tags: ['Facilitation'],
    },
]
