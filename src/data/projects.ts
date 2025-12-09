export type Project = {
    title: string
    slug: string
    description: string
    challenge: string
    solution: string
    role: string
    year: string
    image: string
    images?: string[]
    link: string
    moreInfo: string
    videoUrl?: string
    tags?: string[]
    onlyLink?: boolean
    keyStudy?: boolean
    team?: Array<{
        role: string
        name?: string
        count?: number
    }>
    outcomes?: string[]
    keyResults?: Array<{
        value: string
        label: string
    }>
}

export const projects: Project[] = [
    {
        title: 'Atlas Copco Smart Portal',
        slug: 'atlas-copco-smart-portal',
        description:
            'First unified B2B e-commerce platform for industrial tools',
        challenge: `Atlas Copco needed their first unified B2B e-commerce platform dedicated to industrial tools. The company required a scalable, user-centric digital experience that could serve their industrial customers efficiently while maintaining the high standards expected from a global leader in industrial solutions.`,
        solution: `We developed a progressive web app storefront built with Angular and powered by Intershop Commerce Suite. This agile-driven project brought together client, business, design, and development teams to deliver a first-class digital experience that unified Atlas Copco's industrial tool offerings into a single, cohesive platform.`,
        role: `I was responsible for front-end development and led the front-end team in their daily tasks, working closely with the design team and business owner to ensure a seamless and user-centric implementation.`,
        year: '2020',
        image: '/uploads/AtlasCopco-gradient.png',
        link: 'https://www.atlascopco.com/en-uk/itba/products',
        moreInfo:
            'https://blog.intershop.com/en/digitalization-manufacturing-atlas-copco-b2b',
        tags: ['Web Development'],
        keyStudy: true,
        team: [
            { role: 'Front-End Lead & Developer', name: 'Daniele Tatasciore' },
            { role: 'Front-End Developers', count: 2 },
            { role: 'UX/UI Designers', count: 2 },
            { role: 'Backend Engineers', count: 3 },
            { role: 'Product Manager', count: 1 },
        ],
        outcomes: [
            'Delivered Angular-based e-commerce platform integrated with Adobe Experience Manager and Intershop Commerce Suite',
            'Deployed globally across Atlas Copco corporate website',
            'Led front-end team in daily development tasks and sprint planning',
            'Bridged design and development teams ensuring seamless alignment',
            'Created component-based architecture for scalability across markets',
            'Implemented responsive design for cross-device compatibility',
        ],
        keyResults: [
            { value: 'Global', label: 'Deployment across corporate site' },
            { value: '100+', label: 'Reusable Angular components' },
            { value: '8+', label: 'Cross-functional team members' },
            { value: '2020', label: 'Successful platform launch' },
        ],
    },
    {
        title: 'Rogue Bees – Accenture Song',
        slug: 'rogue-bees-accenture-song',
        description:
            'A global innovation **initiative empowering employees across 125 hubs** to explore emerging trends',
        challenge: `Accenture Song needed to drive grassroots innovation by empowering employees across 125 global hubs to **explore emerging trends and challenge conventional thinking**. The challenge was to create an engaging platform that would foster a thriving creative community and inspire culture change across the organization.`,
        solution: `We launched Rogue Bees, a global innovation initiative in collaboration with Hyper Island. The project fostered community engagement through monthly themes—starting with the Metaverse—along with newsletters, interviews, virtual events, and expert insights. This became **a catalyst for culture change and ultimately inspired the creation of a new business unit focused on future technologies.**`,
        role: `As the UX and visual designer for the Rogue Bees project, **I was responsible for designing and producing all visual content and digital communication materials.** I collaborated closely with the copywriter and content team to ensure a cohesive and engaging experience across platforms. **My work included designing monthly newsletters, visual layouts, and digital assets** that brought the stories and trends to life. I used Adobe Creative Cloud, Figma, and Mailchimp to create on-brand, impactful content that supported both storytelling and community engagement.`,
        year: '2021–2022',
        image: '/uploads/roguebees_lookbackbook.png',
        images: [
            '/uploads/roguebees_lookbackbook.png',
            '/uploads/roguebees_screens.png',
        ],
        link:
            'https://www.figma.com/proto/0PBM6thwi2J4qBwhesBNwa/LookBack-Book?page-id=0%3A1&node-id=100-9185&p=f&viewport=564%2C-866%2C0.13&t=mgwDVMD1L9680Ct6-1&scaling=contain&content-scaling=fixed&starting-point-node-id=100%3A9185',
        moreInfo:
            'https://medium.com/the-real-hero/driving-innovation-from-the-ground-up-accenture-song-case-study-39f1f1d0c863',
        tags: ['Visual Design, Marketing'],
    },
    {
        title: 'TransitionView',
        slug: 'transition-view',
        description:
            'A scientific innovation for companies transitioning to net-zero emissions',
        challenge: `Companies across Sweden needed a scientifically-backed tool to navigate their complex transition towards net-zero emissions. The challenge was to make cutting-edge **climate science accessible and actionable for businesses of varying sizes and industries.**`,
        solution: `TransitionView represents a scientific innovation, born out of a collaborative effort between Another Tomorrow, esteemed professors, and climate scientists. Launched in 2023, this tool is currently undergoing trials by various Swedish companies, providing them with data-driven insights to guide their net-zero transition strategies.`,
        role: `My responsibilities included **researching and exploring various branding elements,** ultimately initialising a design system. **I also created a set of marketing materials and produced videos trailers** to consistently convey the tool's capabilities and value in aiding companies toward their net-zero goals. This foundational work was crucial in establishing TransitionView's brand presence in its initial phase.`,
        year: '2023',
        image: '/uploads/d8131e9b-fecb-42f0-b46b-bdd4589231f8.png',
        link: null,
        moreInfo: 'https://www.anothertomorrow.com/transition-view',
        videoUrl: 'https://www.youtube.com/watch?v=MecLoA9Y0CI',
        tags: ['Visual Design, Marketing, Prototyping'],
    },
    {
        title: 'The Future of Breakfast with Arla',
        slug: 'future-of-breakfast-arla',
        description:
            'A vending machine **prototype for healthy breakfasts targeting teenagers**',
        challenge: `Arla needed to explore **innovative ways to serve healthy breakfasts to teenagers at reasonable prices**. The challenge was to create a solution that would appeal to young consumers while maintaining nutritional standards and cost-effectiveness.`,
        solution: `During a hackathon with Arla's Innovation Team, we developed a winning concept: **a vending machine prototype designed specifically for healthy breakfasts targeting teenagers.** The prototype was tested at Fryshuset in October 2023, where **we collected almost a hundred responses** and valuable user interaction data.`,
        role: `My responsibilities involved researching and exploring all the technical aspects of the prototypes. Once approved by the client, **I constructed the vending machine prototype and developed its digital counterpart in Figma**. On the test day, the prototype was **equipped with tracking analytics with Maze**, enabling us to collect an extensive dataset about user interactions. This was complemented by qualitative data gathered from interviews.`,
        year: '2024',
        images: [
            '/uploads/arla-breakbot.gif',
            '/uploads/43157a96-e053-4c75-9618-2b3ca6503f4e.png',
            '/uploads/a90c27c0-d51d-4b01-b7ee-acc92378aabb.png',
        ],
        image: '/uploads/a90c27c0-d51d-4b01-b7ee-acc92378aabb.png',
        link:
            'https://www.figma.com/proto/5QNP1cHA1gde3dNKap7NhT/Breakbot?page-id=0%3A1&node-id=702-188&starting-point-node-id=702%3A188&show-proto-sidebar=1&t=SXTQ6dHhRvaShRrL-1',
        moreInfo: 'https://www.anothertomorrow.com/cases/arla-breakbot',
        videoUrl:
            'https://www.youtube.com/watch?v=ocHqvyLf7wU&feature=youtu.be',
        tags: ['Experience Design', 'Prototyping'],
    },
    {
        title: 'Prototyping Sustainable Logistics with DFDS',
        slug: 'sustainable-logistics-dfds',
        description:
            "Redefining **sustainable logistics routes** for Denmark's largest logistics company",
        challenge: `DFDS, Denmark's largest logistics company, faced the challenge of meeting **rising demand for eco-friendly transportation solutions**. They needed to create a comprehensive model of logistic routes that incorporated numerous sustainable requirements while maintaining operational efficiency.`,
        solution: `We developed an innovative approach to redefine sustainable logistics for DFDS clients. The solution involved creating a **comprehensive model that integrated various sustainable requirements into logistic route planning**, making eco-friendly transportation both viable and efficient.`,
        role: `My role was to bring clarity and interaction to the sustainable logistics model through proficient prototyping using Figma. I was tasked with **translating the complex requirements and data into intuitive, user-friendly prototypes**, showcasing the viability of sustainable routes.`,
        year: '2023',
        images: [
            '/uploads/87652519-d152-411b-a621-4a1d56fc71e6.png',
            '/uploads/a35d15e2-1374-4635-8e73-a20e9a7fc89e.png',
        ],
        image: '/uploads/87652519-d152-411b-a621-4a1d56fc71e6.png',
        link:
            'https://www.figma.com/proto/BNpDVxy3wEAWw2BChiCDxs/DFDS?page-id=1319%3A2&node-id=1458-1011&starting-point-node-id=1458%3A1011&show-proto-sidebar=1&t=gaOSikoek3NJmWXP-1',
        moreInfo:
            'https://www.anothertomorrow.com/cases/facilitating-collaboration-transport-supplychain',
        tags: ['Prototyping', 'Experience Design'],
    },
    {
        title: 'PostNord Last Mile Dashboard',
        slug: 'postnord-last-mile-dashboard',
        description:
            "A monitoring dashboard for Sweden's national postal service terminal managers",
        challenge: `PostNord needed a web application that would enable terminal managers to monitor the activities of specific couriers during their shifts. The challenge was to create a complex application that could handle real-time data while being intuitive for daily operational use.`,
        solution: `We developed the Last Mile Dashboard, a comprehensive web application that began as a prototype in spring 2020 and was successfully launched in Sweden in December 2020. The development process involved a team of three technologists and two project managers, who collaborated closely with the client's stakeholders and IT architects.`,
        role: `I served as the Front End Developer and Designer for the application, which was built using React and Node.js. My responsibilities included creating the design system, wireframes, and mockups in Figma.`,
        year: '2020',
        images: [
            '/uploads/postnord_lastmile.gif',
            '/uploads/631f779f-a34e-4e71-bd49-e5feaffa617f.png',
            '/uploads/postnord_lastmile--screen.png',
        ],
        image: '/uploads/postnord_lastmile--screen.png',
        link: null,
        moreInfo: 'https://www.anothertomorrow.com/cases/prototyping-postnord',
        tags: ['Prototyping', 'Web Development'],
    },
    {
        title: 'PostNord SWAN Dashboard',
        slug: 'postnord-swan-dashboard',
        description:
            'Real-time analytics **dashboard that prevented over 1M failed deliveries**',
        challenge: `In 2018, PostNord, Sweden's largest logistics operator, **faced a critical moment: delivery errors were rising, customer satisfaction was falling, and brand trust was at risk.** With delivery precision at just 73%, missed deliveries were hurting customer experience and revenue streams were under threat. They needed a cultural and operational shift that started on the ground, inside their terminals—not just another top-down tech solution.`,
        solution: `Rather than starting with big tech implementations, we embedded ourselves directly in the terminals—listening, observing, and diagnosing the true friction points drivers and terminal staff faced daily. Through rapid prototyping and live installations, we developed SWAN Dashboard, a React/Redux-based real-time performance management system. The solution visualized critical KPIs in real-time, helping drivers and supervisors take immediate action. By working hand-in-hand with PostNord's people on both terminal floors and in board rooms, we built solutions that worked for—and with—the front-line teams, creating a pull-effect rather than pushing change top-down.`,
        role: `As Lead Frontend Developer and UX Designer, I refactored the initial jQuery prototype to React/Redux, establishing a comprehensive design system that ensured consistency and scalability across terminals. I worked directly on-site in Stockholm terminals, installing hardware and testing solutions side-by-side with drivers and terminal managers. Through participatory observation and constant feedback loops, I created high-fidelity prototypes in Figma and conducted iterative user testing to optimize the interface for real-world use. My real-time data visualization features became critical tools that helped achieve over 1 million fewer failed deliveries, turning front-line teams into advocates for the new ways of working.`,
        image: '/uploads/2e635239-c6ce-4168-ac58-609fd397e61d.png',
        images: [
            '/uploads/2e635239-c6ce-4168-ac58-609fd397e61d.png',
            '/uploads/postnord-terminal.png',
        ],
        year: '2020-2022',
        link: null,
        moreInfo: 'https://www.anothertomorrow.com/postnord',
        tags: [
            'React/Redux',
            'Design System',
            'UX Design',
            'Data Visualization',
        ],
        keyStudy: true,
        team: [
            { role: 'Lead Front-End Developer & UX Designer', name: 'Daniele Tatasciore' },
            { role: 'Backend Engineers', count: 2 },
            { role: 'Product Manager', count: 1 },
            { role: 'PostNord Stakeholders', count: 3 },
        ],
        outcomes: [
            'Refactored prototype from jQuery to React/Redux for improved performance and scalability',
            'Built real-time dashboard with API integration for parcel tracking across Swedish terminals',
            'Created comprehensive design system in Figma ensuring consistency across products',
            'Achieved 1 million fewer undelivered parcels after national rollout',
            'Improved delivery precision from 73% to 99% within just 2 months of pilot',
            'Reduced missed deliveries by 21% and decreased delayed package rates',
            'Increased positive customer feedback, outperforming national averages',
            'Improved driver collaboration and reduced employee turnover',
            'Worked directly in terminals with hands-on hardware installation and testing',
            'Created solutions through participatory observation and constant feedback loops',
        ],
        keyResults: [
            { value: '73% → 99%', label: 'Delivery precision in 2 months' },
            { value: '1M+', label: 'Fewer undelivered parcels' },
            { value: '21%', label: 'Reduction in missed deliveries' },
            { value: 'Real-time', label: 'KPI visibility across all terminals' },
        ],
    },
    {
        title: 'Electrolux Scorecard',
        slug: 'electrolux-scorecard',
        description:
            'Enterprise-scale analytics dashboard integrating complex data infrastructure for real-time business intelligence',
        challenge: `Electrolux needed to transform their complex data infrastructure into actionable insights for stakeholders. The challenge was creating an enterprise-grade dashboard that could process and **visualize real-time KPIs from their extensive Qlik-managed data lake** while maintaining performance and usability.`,
        solution: `Engineered a sophisticated web-based analytics platform in collaboration with Fjord that seamlessly integrated with Electrolux's Qlik Sense framework. The solution provided interactive data exploration capabilities and real-time performance monitoring, enabling data-driven decision-making across the organization.`,
        role: `As Technical Lead, I architected the integration between Qlik's data analytics framework and our custom frontend interface. Implemented advanced data visualization components using vanilla JavaScript for optimal performance, ensuring responsive design and cross-browser compatibility. Created a modular codebase that simplified future maintenance and updates while handling complex real-time data streams.`,
        year: '2019',
        image: '/uploads/04630c09-7217-4ad2-9d7e-c99576fd41ce.png',
        link: null,
        moreInfo: null,
        videoUrl: null,
        tags: ['Prototyping', 'Web Development', 'Qlink', 'Data Integration'],
    },
    {
        title: 'KIA Inspiration Lab',
        slug: 'kia-inspiration-lab',
        description:
            'Intensive 2-day global hackathon tackling educational creativity challenges',
        challenge: `The challenge was to tackle one of today's most pressing educational questions: "How can we embed creativity into young people's lives as deeply as we embed literacy?" This required bringing together diverse perspectives and expertise to find innovative solutions.`,
        solution: `We organized an intensive 2-day remote hackathon that brought together 12 diverse participants across multiple time zones, including creative professionals from KIA, educational specialists, and hand-picked experts from education, science, and culture. This global collaborative experience fostered creative problem-solving approaches to educational challenges.`,
        role: `As both facilitator and active contributor on Team 3, I guided our diverse group through the human-centered design process while ensuring every voice was heard and valued. My dual role involved orchestrating productive remote collaboration across different time zones and cultural backgrounds, and guiding the team through structured ideation, prototyping, and presentation phases.`,
        year: '2023',
        image: '/uploads/47f7f473-4a8f-4714-99e8-69f8ddf01446.png',
        link: null,
        moreInfo: null,
        videoUrl:
            'https://www.youtube.com/watch?v=BFilUBLrVVc&feature=youtu.be',
        tags: ['Facilitation'],
    },
    {
        title: 'The Curious Question Cards',
        slug: 'curious-question-cards',
        description:
            'Innovative educational tool tested across European markets, fostering creative thinking in children',
        challenge: `Following the KIA Inspirational Lab, we needed to transform abstract educational concepts into a tangible, multilingual learning tool. The key challenge was creating an engaging format that could transcend cultural and language barriers while promoting creative thinking in children.`,
        solution: `Designed and validated a multilingual card deck system that uses strategic word combinations to trigger creative thinking. The proof of concept was successfully tested with diverse groups of children across Europe, demonstrating its effectiveness in fostering curiosity and imagination in educational settings.`,
        role: `Led end-to-end product development from concept to testing, including facilitating cross-cultural user research sessions. Designed an intuitive card system that worked effectively across three languages. Implemented rapid prototyping cycles based on direct user feedback, resulting in a highly engaging educational tool that received positive feedback from both educators and children.`,
        tags: ['User Research', 'Visual Design'],
        year: '2023',
        image: '/uploads/5e2552aa-8497-48c7-bf69-a2a63272a7e3.png',
        images: [
            '/uploads/TheCuriousQuestions.gif',
            '/uploads/curious-question-card.jpg',
            '/uploads/5e2552aa-8497-48c7-bf69-a2a63272a7e3.png',
        ],
        link: null,
        moreInfo: null,
        videoUrl:
            'https://www.youtube.com/watch?v=6lZ3q1EfRVI&feature=youtu.be',
    },
    {
        title: 'Utopia Lab',
        slug: 'utopia-lab',
        description:
            'A 290-participants hackathon in Helsingborg where youth and decision makers solve city challenges',
        challenge: `Helsingborg needed to bring together youth and decision makers to collaboratively solve some of the city's biggest challenges. The challenge was to create a large-scale hackathon that could generate viable solutions around pertinent topics such as environment and sustainability, mental health, democracy and participation, meaningful leisure time and discrimination.`,
        solution: `We co-created a 290-participants hackathon within H22 City Expo initiatives, where youth and decision makers came together to create Utopian Objects and Visions. These solutions had the opportunity to be realized and tested in Helsingborg's city, making the hackathon a bridge between ideation and real-world implementation.`,
        role: `My role was to create concepts and material for the hackathon, manage all the technical aspects of uploading and processing the content for Instagram and the interaction for voting each object with customised QR code.`,
        year: 'June 2022',
        image: '/uploads/e085c25c-8116-436a-a385-c1f6b10e76bb.png',
        images: [
            '/uploads/e085c25c-8116-436a-a385-c1f6b10e76bb.png',
            '/uploads/teams-logic.png',
            '/uploads/utopia-lab-process.png',
        ],
        link: 'https://www.instagram.com/utopialab_hbg/',
        moreInfo:
            'https://innovation.helsingborg.se/initiativ/utopia-lab-ungdomarna-hittar-losningarna-pa-framtidens-utmaningar/',
        videoUrl: 'https://www.youtube.com/watch?v=mhb2m8TXc4o',
        tags: ['Facilitation', 'Visual Design'],
    },
    {
        title: 'Mobility 2039',
        slug: 'mobility-2039',
        description:
            'An innovative WebGL-based interactive experience that transported users into a 3D vision of future mobility',
        challenge:
            'Following the successful physical installation showcased at MWC 2019 in Barcelona and Accenture Studio in Frankfurt, the challenge was to create a digital companion that could extend the mobility experience beyond physical exhibitions. The goal was to develop an interactive online platform that would engage a broader audience and serve as a conversational starter about the future of transportation.',
        solution:
            'Mobility 2039 became an innovative WebGL-based interactive experience that transported users into a 3D vision of future mobility. Built with Unity and optimized for web deployment, the platform featured immersive 3D environments and interactive elements that allowed users to explore future transportation scenarios. This digital iteration successfully extended the impact of the original physical installation to global audiences.',
        role:
            "As Web Developer, I created the complete WebGL-based website using Unity and web deployment techniques. I collaborated closely with Fjord's UX and UI design teams to translate the physical installation's vision into an engaging digital experience, ensuring seamless interaction and optimal performance across web platforms.",
        year: '2019',
        image: '/uploads/mobility_web--homepage.png',
        images: [
            '/uploads/mobility_web.gif',
            '/uploads/mobility_web--homepage.png',
            '/uploads/mobility_web--screens.jpg',
        ],
        link: '',
        moreInfo:
            "Extended a premium physical exhibition experience to worldwide digital audiences, successfully deployed complex Unity 3D content for web platforms, created a lasting digital archive of the acclaimed MWC 2019 and Frankfurt installations, and delivered an accessible experience that maintained the original installation's immersive quality.",
        tags: ['WebGL - Unity', 'Web Development'],
    },
    {
        title: 'Save the Children - Mina Svar',
        slug: 'save-the-children-mina-svar',
        description:
            'I was responsible for bug fixes and feature improvements using Xcode and TestFlight for deployment and testing cycles',
        challenge:
            'Organizations increasingly recognize the importance of ensuring social sustainability in their operations, but measuring and following up on social sustainability efforts is complex. Unlike environmental sustainability, social sustainability was difficult to measure using absolute and quantifiable values, making it challenging to assess the effectiveness of youth engagement programs.',
        solution:
            'Mina Svar became a comprehensive impact measurement platform examining five focus areas developed by young people and quality-assured by Uppsala University. The tool enables measurement across three interconnected levels: societal change, individual progress, and activity level, allowing organizations to precisely track all efforts and ensure they create meaningful impact for their target groups.',
        role:
            "I was responsible for bug fixes and feature improvements using Xcode and TestFlight for deployment and testing cycles. I collaborated with Accenture, Fjord, and youth from Save the Children's 'På Lika Villkor' program to ensure the app delivered reliable data collection and maintained high quality standards.",
        year: '2018',
        image: '/uploads/radda-barnen-mina-svar.jpg',
        images: [
            '/uploads/radda-barnen.gif',
            '/uploads/radda-barnen-mina-svar.jpg',
        ],
        link: 'https://www.youtube.com/watch?v=VMCsIlPesj8?feature=shared',
        moreInfo:
            "Contributed to creating structural societal change and reducing discrimination against children in socially and economically vulnerable areas. The app strengthens young people's influence, participation and engagement in issues that affect them, supporting UN Agenda 2030 goals through data-driven social sustainability measurement.",
        tags: ['iOS', 'Swift', 'TestFlight'],
        onlyLink: true,
    },
    {
        title: 'Airmee - Design & Development',
        slug: 'airmee-design-development',
        description:
            'Led design of last-mile logistics applications. Built the first company website and produce content for marketing campaigns.',
        challenge:
            'Airmee, a rapidly growing logistics startup, now established as large company, needed to scale their delivery management system while maintaining operational efficiency. The challenge was to redesign their internal dashboard for both desktop and mobile use, enhance their customer-facing tracking application, and explore innovative solutions for package tracking.',
        solution:
            'Developed a comprehensive suite of applications including a responsive internal dashboard for delivery management, an optimized customer-facing tracking system, and a prototype AR-based package recognition system. The solutions significantly improved operational efficiency and enhanced the customer experience.',
        role:
            "As Front End Developer and UX Designer, I led multiple critical projects: redesigned the internal analytics dashboard for cross-platform use, enhanced the company's most-used customer tracking application, and developed an innovative AR marker recognition system for in-vehicle package tracking. Utilized Angular and Figma while collaborating closely with operations teams to ensure solutions met real-world needs.",
        year: '2017-2018',
        image: '/uploads/airmee-skåpbil.jpg',
        images: [
            '/uploads/DelivAR-Demo.gif',
            '/uploads/airmee-dashboard.png',
            '/uploads/airmee-skåpbil.jpg',
        ],
        link: null,
        moreInfo: null,
        videoUrl: null,
        tags: [
            'Web Development',
            'Angular',
            'Prototyping',
            'UX Design',
            'Visual Design',
            'Photography',
        ],
    },
    {
        title: 'Stagecast',
        slug: 'stagecast',
        description:
            'Developed and maintained a sophisticated web platform connecting artists with live event venues',
        challenge:
            'Stagecast needed a robust web platform to facilitate seamless connections between artists and venues, requiring real-time interaction capabilities and integration with native mobile applications.',
        solution:
            'Built and maintained a comprehensive web platform using Angular, implementing a launchpad feature that enabled seamless interaction between web and native mobile applications. The platform successfully streamlined the event booking process and enhanced user engagement.',
        role:
            'As Web Developer, I managed the development of the main web platform using Angular framework, created an innovative launchpad feature for cross-platform functionality, and implemented real-time interaction capabilities between web and native applications. Focused on creating a seamless experience for both performers and venue managers.',
        year: '2018',
        image: 'uploads/stagecast-platform.jpg',
        link: null,
        moreInfo: null,
        videoUrl: null,
        tags: ['Angular', 'Web Development', 'Cross-Platform Integration'],
    },
    {
        title: 'Freelance Work',
        slug: 'freelance-work',
        description:
            'Various freelance projects involving web development and design.',
        challenge: `Freelance projects often come with unique challenges, requiring adaptability and a broad skill set to meet diverse client needs. The challenge is to deliver high-quality solutions that align with client goals while managing time and resources effectively.`,
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        role: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        year: '2016-2017',
        image: '/uploads/cinematic.jpg',
        images: [
            '/uploads/habitable-wifi.jpg',
            '/uploads/cinematic.jpg',
            '/uploads/oort-top-white.jpg',
        ],
        link: 'https://lumakollektiv.com',
        moreInfo: null,
        videoUrl: null,
        tags: ['Web Development', 'Design'],
        onlyLink: true,
    },
]
