import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import MainNav from '@/components/MainNav'

const About = () => {
    const recommendations = [
        {
            text: "Daniele have been super helpful during our work with the Save the Children iOS and Android app; supportive, solution oriented, pro-active, always well informed.",
            author: "Program Manager, Accenture"
        },
        {
            text: "I enjoyed working with Daniele on the project for H&M. Not afraid to jump in and take care of stuff that had to be done. It could be anything from hardware, to software and design. Agile mindset. A perfect team player to have in a cross functional team! Ability to focus on what is important and not get stuck in details was something I appreciated a lot.",
            author: "Senior Full Stack Developer, Accenture"
        },
        {
            text: "It was a great fun working with Daniele. He is truly a great team player with open minded and positive energy. Always willing to help and problem-solving attitude even make things easier when worked with him.",
            author: "Industrial Designer, Fjord Stockholm"
        },
        {
            text: "I worked with Daniele on several projects, and he is a very smart and modest person. He has strong skills and experience in combining cutting-edge technologies, such as AR platforms and AI frameworks, with customer requirements. By rapidly setting up demo systems, he can deliver an excellent user experience in a short time. He works efficiently both as an independent developer and as a team player. Thanks to his outstanding self-learning ability, he can quickly acquire new skills and put them into practice. I truly enjoyed working with him.",
            author: "IoT Engineer, Accenture"
        }
    ]

    const getRandomPosition = (index: number) => {
        // Using index to create consistent but varied positioning
        const positions = [
            { left: '10%', top: '15%' },
            { right: '15%', top: '35%' },
            { left: '20%', top: '55%' },
            { right: '10%', top: '75%' }
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
            <section className='relative max-w-4xl mx-auto py-20 px-4 flex flex-col items-center'>
                <Avatar className='w-48 h-48 mb-8'>
                    <AvatarImage
                        src='/lovable-uploads/d9aa2c4f-c5ed-4678-aac4-af8454c044ce.png'
                        alt='Profile portrait'
                        className='object-cover'
                    />
                    <AvatarFallback>DT</AvatarFallback>
                </Avatar>

                <div className='text-center max-w-2xl'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-6'>
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
            </section>

            <section className='bg-white text-black py-20'>
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
                        {recommendations.map((rec, index) => (
                            <div key={index} className='space-y-4'>
                                <blockquote className={`font-sans italic ${getFontSize(rec.text.length)} leading-relaxed`}>
                                    "{rec.text}"
                                </blockquote>
                                <cite className='not-italic text-gray-600 font-mono text-sm'>
                                    — {rec.author}
                                </cite>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About