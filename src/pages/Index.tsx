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
        '/uploads/2e635239-c6ce-4168-ac58-609fd397e61d.png', // PostNord SWAN
        '/uploads/f55b0014-566e-4de4-aceb-ee807cc694ef.png', // Atlas Copco
        '/uploads/roguebees_lookbackbook.png', // Rogue Bees
        '/uploads/a90c27c0-d51d-4b01-b7ee-acc92378aabb.png', // Arla
        '/uploads/87652519-d152-411b-a621-4a1d56fc71e6.png', // DFDS
    ]

    // Show only Atlas Copco and PostNord SWAN projects
    const filteredProjects = projects.filter(
        (project) =>
            project.title === 'Atlas Copco Smart Portal' ||
            project.title === 'PostNord SWAN Dashboard'
    )

    return (
        <div className='min-h-screen w-full'>
            <MainNav />

            {/* Hero Section */}
            <section className='relative py-8 px-4 min-h-[70vh] flex items-center overflow-hidden'>
                <ShaderBackground className="opacity-30" />
                <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
                    <div className='hero-text-animate'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6'>
                            I am{' '}
                            <Link
                                to='/about'
                                className='text-brand hover:text-brand/80 transition-colors underline decoration-brand/30 hover:decoration-brand/80'
                            >
                                designer and technologist
                            </Link>{' '}
                            based in Malmö, Sweden. I help companies{' '}
                            <Link
                                to='/projects'
                                className='text-brand hover:text-brand/80 transition-colors underline decoration-brand/30 hover:decoration-brand/80'
                            >
                                accelerate innovation
                            </Link>{' '}
                            through prototyping. My experience ranges from small
                            studios to large consultancies, collaborating with some
                            of Sweden's biggest clients.{' '}
                            <a
                                href='mailto:work@daniele.is'
                                className='text-brand hover:text-brand/80 transition-colors underline decoration-brand/30 hover:decoration-brand/80'
                            >
                                Let's bring your idea to life
                            </a>{' '}
                            together.
                        </h1>
                    </div>
                    
                    <div className='hero-slideshow-animate'>
                        <HeroSlideshow 
                            images={heroImages}
                            className='h-[400px] lg:h-[500px] shadow-2xl'
                        />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className='py-8 px-4'>
                <div className='max-w-6xl mx-auto'>
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
                                Prototyping & Technology
                            </h3>
                            <ul className='space-y-2 text-muted-foreground'>
                                <li>Rapid Prototyping</li>
                                <li>Physical Prototyping</li>
                                <li>Design Systems</li>
                                <li>Front-End Development</li>
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

            {/* Logo Carousel Section */}
            <LogoCarousel />

            <section className='py-16 px-4 bg-gray-100'>
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
                    <Button asChild size='lg'>
                        <Link to='/projects'>See all my projects</Link>
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
