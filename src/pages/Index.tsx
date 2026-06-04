import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '@/components/ProjectCard'
import ProjectModal from '@/components/ProjectModal'
import HeroSlideshow from '@/components/HeroSlideshow'
import ShaderBackground from '@/components/ShaderBackground'
import { projects, Project } from '@/data/projects'
import MainNav from '@/components/MainNav'

import LogoCarousel from '@/components/LogoCarousel'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

const Index = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const closeProject = () => {
        setSelectedProject(null)
    }

    // Hero slideshow images - selecting 5 representative project images
    const heroImages = [
        'https://www.sentisight.ai/wp-content/uploads/2025/04/claudecode-scaled.webp', // Sentisight Claudecode
        '/uploads/2e635239-c6ce-4168-ac58-609fd397e61d.png', // PostNord SWAN
        '/uploads/roguebees_lookbackbook.png', // Rogue Bees
        '/uploads/postnord_lastmile--screen.png', // PostNord Lastime
        '/uploads/87652519-d152-411b-a621-4a1d56fc71e6.png', // DFDS
    ]

    // Show OatFinder and PostNord SWAN projects
    const filteredProjects = projects.filter(
        (project) =>
            project.title === 'OatFinder for Oatly' ||
            project.title === 'PostNord SWAN Dashboard',
    )

    return (
        <div className='min-h-screen w-full'>
            <MainNav />

            {/* Hero Section */}
            <section className='relative py-8 px-4 min-h-[70vh] flex items-center overflow-hidden'>
                <ShaderBackground className='opacity-30' />
                <div className='max-w-6xl mx-auto grid grid-cols-1 items-center relative z-10'>
                    <div className='hero-slideshow-animate'>
                        <HeroSlideshow
                            images={heroImages}
                            className='h-[400px] lg:h-[500px] shadow-2xl mb-16'
                        />
                    </div>
                    <div className='hero-text-animate'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6'>
                            <em>Ciao </em>👋 <br></br>I'm Daniele Tatasciore, a{' '}
                            <Link
                                to='/about'
                                className='text-orange-500 hover:text-red-500 transition-colors decoration-brand hover:decoration-brand/80'
                            >
                                designer and technologist
                            </Link>{' '}
                            based in Malmö, Sweden. I help companies{' '}
                            <Link
                                to='/projects'
                                className='text-orange-500 hover:text-red-500 transition-colors decoration-brand/30 hover:decoration-brand/80'
                            >
                                accelerate innovation through AI-augmented
                                prototyping
                            </Link>
                            . From small studios to large consultancies, I've
                            worked with some of Sweden's biggest clients—now
                            shipping production systems in days instead of weeks
                            using Claude Code.{' '}
                            <a
                                href='mailto:work@daniele.is?subject=Let%27s%20work%20together&body=Hi%20Daniele%2C%0A%0AI%27m%20interested%20in%20working%20with%20you%20on%20a%20project.%20I%27d%20love%20to%20discuss%20how%20we%20can%20collaborate%20to%20bring%20innovative%20ideas%20to%20life%20through%20prototyping%20and%20design.%0A%0ALooking%20forward%20to%20hearing%20from%20you%21%0A%0ABest%20regards'
                                className='text-orange-500 hover:text-red-500 transition-colors decoration-brand/30 hover:decoration-brand/80'
                            >
                                Let's bring your idea to life
                            </a>{' '}
                            together.
                        </h1>
                    </div>
                </div>
            </section>

            {/* Logo Carousel Section */}
            <LogoCarousel />

            {/* Skills Section */}
            <section className='py-8 px-4 bg-slate-100'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-2xl md:text-2xl font-semibold text-foreground my-12'>
                        My Service and Skillset
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                        <div className='space-y-4'>
                            <h3 className='text-xl font-semibold mb-6'>
                                Design & Research
                            </h3>
                            <ul className='space-y-2 text-muted-foreground'>
                                <li>Product Design & Delivery</li>
                                <li>User Research</li>
                                <li>Human–Computer Interaction</li>
                                <li>Facilitation & Education</li>
                            </ul>
                        </div>

                        <div className='space-y-4'>
                            <h3 className='text-xl font-semibold mb-6'>
                                Prototyping & AI-Powered Development
                            </h3>
                            <ul className='space-y-2 text-muted-foreground'>
                                <li>AI-Augmented Prototyping</li>
                                <li>Rapid Prototyping</li>
                                <li>Workflow Automation (n8n, APIs)</li>
                                <li>Design Systems</li>
                                <li>Full-Stack Development</li>
                            </ul>
                        </div>

                        <div className='space-y-4'>
                            <h3 className='text-xl font-semibold mb-6'>
                                Brand & Communication
                            </h3>
                            <ul className='space-y-2 text-muted-foreground'>
                                <li>Social Media Management</li>
                                <li>Content Creation</li>
                                <li>Email Marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-16 px-4 bg-slate-100'>
                <div className='max-w-6xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                hovered={hoveredIndex === index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => {
                                    setSelectedProject(project)
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className='flex justify-center mt-16'>
                    <Button
                        asChild
                        size='lg'
                        className='text-lg bg-orange-600 hover:bg-orange-800 p-7'
                    >
                        <Link to='/projects'>See all my projects &rarr;</Link>
                    </Button>
                </div>
            </section>

            {selectedProject !== null && (
                <ProjectModal
                    project={selectedProject}
                    onClose={closeProject}
                />
            )}

            <Footer />
        </div>
    )
}

export default Index
