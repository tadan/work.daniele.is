import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import MainNav from '@/components/MainNav'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

const About = () => {
    const recommendations = [
        {
            text:
                'Daniele have been super helpful during our work with the Save the Children iOS and Android app; supportive, solution oriented, pro-active, always well informed.',
            author: 'Program Manager, Accenture',
        },
        {
            text:
                'I enjoyed working with Daniele on the project for H&M. Not afraid to jump in and take care of stuff that had to be done. It could be anything from hardware, to software and design. Agile mindset. A perfect team player to have in a cross functional team! Ability to focus on what is important and not get stuck in details was something I appreciated a lot.',
            author: 'Senior Full Stack Developer, Accenture',
        },
        {
            text:
                'It was a great fun working with Daniele. He is truly a great team player with open minded and positive energy. Always willing to help and problem-solving attitude even make things easier when worked with him.',
            author: 'Industrial Designer, Fjord Stockholm',
        },
        {
            text:
                'I worked with Daniele on several projects, and he is a very smart and modest person. He has strong skills and experience in combining cutting-edge technologies, such as AR platforms and AI frameworks, with customer requirements. By rapidly setting up demo systems, he can deliver an excellent user experience in a short time. He works efficiently both as an independent developer and as a team player. Thanks to his outstanding self-learning ability, he can quickly acquire new skills and put them into practice. I truly enjoyed working with him.',
            author: 'IoT Engineer, Accenture',
        },
    ]

    const getRandomPosition = (index: number) => {
        // Using index to create consistent but varied positioning
        const positions = [
            { left: '10%', top: '15%' },
            { right: '15%', top: '35%' },
            { left: '20%', top: '55%' },
            { right: '10%', top: '75%' },
        ]
        return positions[index % positions.length]
    }

    const getFontSize = (textLength: number) => {
        if (textLength < 150) return 'text-2xl'
        if (textLength < 250) return 'text-xl'
        return 'text-lg'
    }

    return (
        <div className='min-h-screen w-full'>
            <MainNav />
            <section className='relative max-w-6xl mx-auto py-20 px-4 flex flex-row'>
                <div className='text-left max-w-2xl'>
                    <h3 className='text-s uppercase font-bold mb-2'>About</h3>
                    <p className='text-xl text-muted-foreground leading-relaxed'>
                        I have over 7 years experience in digital product design
                        and frontend development, specializing in complex
                        technical systems and user-centered design solutions. I
                        learned and honed my craft in the fast-paced world of
                        enterprise consulting at Accenture, where I delivered
                        digital products and technical solutions for global
                        clients. Recognizing an opportunity to focus on product
                        leadership, I transitioned to in-house design roles.{' '}
                        <br></br> <br></br>In 2020 I joined Another Tomorrow as
                        Head of User Experience Design, where I delivered design
                        excellence on high-impact logistics and supply chain
                        projects. I led design system implementation across
                        multiple platforms, created innovative prototypes for
                        complex technical interfaces, and facilitated
                        cross-functional workshops with stakeholders from
                        engineering to operations teams. <br />
                        <br></br> In 2022 I Since 2024 I work as an independent
                        consultant through GGMR AB, helping companies bridge the
                        gap between complex technical systems and exceptional
                        user experiences. I'm a hands-on designer who excels at
                        translating business requirements into scalable design
                        solutions, with deep expertise in design systems and
                        enterprise product design. <br></br>
                        <br></br>I've been selling genuine Italian food from my
                        family farm to Sweden and I can make tasty pizza.
                    </p>
                </div>
                <Avatar className='w-30 h-80 m-32'>
                    <AvatarImage
                        src='/uploads/d9aa2c4f-c5ed-4678-aac4-af8454c044ce.png'
                        alt='Profile portrait'
                        className='object-cover'
                    />
                    <AvatarFallback>Daniele T's photo</AvatarFallback>
                </Avatar>
            </section>
            <section className='bg-stone-200 py-20'>
                <div className='max-w-6xl mx-auto px-4'>
                    <h3 className='text-s uppercase font-bold mb-6'>
                        Principles
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
                        <div className='space-y-3'>
                            <h3 className='text-lg font-semibold uppercase tracking-wide'>
                                Creativity, first and throughout
                            </h3>
                            <p className='text-muted-foreground leading-relaxed'>
                                For me, creativity isn't just the spark at the
                                beginning — it's the thread that runs through
                                every stage of the process.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h3 className='text-lg font-semibold uppercase tracking-wide'>
                                Consistency, always
                            </h3>
                            <p className='text-muted-foreground leading-relaxed'>
                                Great design is as much about reliability as it
                                is about innovation. I believe in creating
                                experiences that are clear, coherent, and
                                trustworthy across every touchpoint, ensuring
                                people know what to expect and can rely on it
                                every time.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h3 className='text-lg font-semibold uppercase tracking-wide'>
                                People and culture, essential
                            </h3>
                            <p className='text-muted-foreground leading-relaxed'>
                                Design doesn't exist in a vacuum — it's always
                                shaped by the people and the context around it.
                                I pay attention to human needs, cultural
                                nuances, and team dynamics, making sure
                                solutions are meaningful, inclusive, and
                                grounded in reality.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h3 className='text-lg font-semibold uppercase tracking-wide'>
                                Prototype it, fast
                            </h3>
                            <p className='text-muted-foreground leading-relaxed'>
                                Ideas gain value when they're tested. I
                                prototype early and often, turning concepts into
                                tangible experiences that spark conversations,
                                reveal opportunities, and accelerate learning.
                                Speed is key.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-stone-100 text-black py-20'>
                <div className='max-w-6xl mx-auto px-4'>
                    <h3 className='text-s uppercase font-bold mb-16'>
                        recommendations
                    </h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
                        {recommendations.map((rec, index) => (
                            <div key={index} className='space-y-4'>
                                <blockquote
                                    className={`font-sans italic ${getFontSize(
                                        rec.text.length
                                    )} leading-relaxed`}
                                >
                                    "{rec.text}"
                                </blockquote>
                                <cite className='not-italic text-gray-600 font-mono text-sm'>
                                    — {rec.author}
                                </cite>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <Button asChild size='lg'>
                        <a
                            href='https://linkedin.com/in/danieletatasciore'
                            className='block mt-8 text-center text-lg font-semibold'
                        >
                            See endorsements on LinkedIn &rarr;
                        </a>
                    </Button>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About
