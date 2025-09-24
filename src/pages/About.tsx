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
                    <h1 className='text-3xl md:text-4xl font-bold mb-6'>
                        Daniele Tatasciore
                    </h1>
                    <p className='text-xl text-muted-foreground leading-relaxed'>
                        A cross-functional creative blending expertise in UI/UX
                        design, front-end development, and emerging
                        technologies. With a proven track record collaborating
                        with startups, consultancies, and corporate clients, I
                        specialize in transforming ideas into engaging,
                        user-centered digital experiences. I leverage creative
                        thinking, rapid prototyping, and AI-driven innovation to
                        deliver impactful solutions that drive meaningful
                        change. Passionate about pushing boundaries and turning
                        vision into reality through design and technology.
                    </p>
                </div>
                <Avatar className='w-48 h-72 mx-16'>
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
                    <h3 className='text-s uppercase mb-16'>recommendations</h3>

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
                            More Recommendations on LinkedIn &rarr;
                        </a>
                    </Button>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About
