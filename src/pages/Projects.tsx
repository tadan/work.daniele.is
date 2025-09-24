import { useState, useEffect } from 'react'
import ProjectCard from '@/components/ProjectCard'
import ProjectModal from '@/components/ProjectModal'
import { projects } from '@/data/projects'
import MainNav from '@/components/MainNav'
import Footer from '@/components/Footer'
import ReactMarkdown from 'react-markdown'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const closeProject = () => {
        setSelectedProject(null)
        setCurrentImageIndex(0)
    }

    // Organize projects by company
    const anotherTomorrowProjects = projects.filter((project) =>
        [
            'The Future of Breakfast with Arla',
            'Prototyping Sustainable Logistics with DFDS',
            'PostNord Last Mile Dashboard',
            'PostNord SWAN Dashboard',
            'Utopia Lab',
            'KIA Inspiration Lab',
            'The Curious Question Cards',
            'TransitionView',
            'Rogue Bees – Accenture Song',
        ].includes(project.title)
    )

    const accentureProjects = projects.filter((project) =>
        [
            'Atlas Copco Smart Portal',
            'Electrolux Scorecard',
            'Mobility 2039',
            'Save the Children - Mina Svar',
        ].includes(project.title)
    )

    const otherProjects = projects.filter((project) =>
        [
            'Stagecast',
            'Airmee - Design & Development',
            'Freelance Work',
        ].includes(project.title)
    )

    // Get all images from projects in a company
    const getCompanyImages = (projectList: typeof projects) => {
        const images: string[] = []
        projectList.forEach((project) => {
            if (project.images) {
                images.push(...project.images)
            } else {
                images.push(project.image)
            }
        })
        return images
    }

    const anotherTomorrowImages = getCompanyImages(anotherTomorrowProjects)
    const accentureImages = getCompanyImages(accentureProjects)
    const otherProjectImages = getCompanyImages(otherProjects)

    const renderCompanySection = (
        projectList: typeof projects,
        title: string,
        description: string,
        images: string[]
    ) => (
        <div className='mb-20 sm:px-4 '>
            {/* Top section with title, description, and carousel */}
            <div className='mb-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
                    <div>
                        <h2 className='text-4xl font-semibold mb-4'>{title}</h2>
                        <p className='text-muted-foreground text-lg mb-8 leading-relaxed'>
                            {description}
                        </p>
                    </div>

                    <div className='w-full'>
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 1200,
                                    stopOnInteraction: false,
                                }),
                            ]}
                            opts={{
                                align: 'start',
                                loop: true,
                                skipSnaps: false,
                                duration: 0,
                            }}
                            className='w-full relative'
                        >
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className='aspect-video'>
                                            <img
                                                src={image}
                                                alt={`${title} project ${
                                                    index + 1
                                                }`}
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>

            {/* Project list below */}
            <div className='relative w-screen left-1/2 right-1/2 -mx-[50vw] px-2 bg-white'>
                <div className='max-w-7xl mx-auto'>
                    {projectList.map((project, index) => {
                        const globalIndex = projects.findIndex(
                            (p) => p.title === project.title
                        )
                        return (
                            <div
                                key={project.title}
                                className='grid grid-cols-2 md:grid-cols-4 gap-1 h-24 border-b border-gray-900 hover:bg-blue-100 hover:text-brand cursor-pointer transition-all mx-0 px-4 md:px-8 items-center'
                                onClick={() => {
                                    if (project.onlyLink && project.link) {
                                        window.open(
                                            project.link,
                                            '_blank',
                                            'noopener,noreferrer'
                                        )
                                    } else {
                                        setSelectedProject(globalIndex)
                                        setCurrentImageIndex(0)
                                    }
                                }}
                            >
                                <div className='text-xl px-2 font-semibold'>
                                    <ReactMarkdown>
                                        {project.title}
                                    </ReactMarkdown>
                                </div>
                                <div className='text-muted-foreground text-sm hidden md:block'>
                                    <ReactMarkdown>
                                        {project.description}
                                    </ReactMarkdown>
                                </div>
                                <div className='text-muted-foreground lg:pl-16 text-sm hidden md:block'>
                                    {project.year}
                                </div>
                                <div className='text-muted-foreground italic text-sm'>
                                    {project.tags?.join(', ')}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

    return (
        <div className='min-h-screen w-full'>
            <MainNav />

            {/* Hero Section */}
            <section className='py-8 px-8 flex items-center justify-center min-h-[30vh]'>
                <div className='max-w-6xl mx-auto text-left animate-in'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-light leading-tight'>
                        I began my career in fast-paced startups before joining
                        Accenture, collaborating with Fjord and working on
                        projects with some of Sweden's largest clients. Later,
                        at Another Tomorrow, I took the lead on design
                        initiatives, prototyping bold ideas and driving
                        long-term transformation.
                    </h1>
                </div>
            </section>
            {/* Experience Columns */}
            <section className='py-16 px-8'>
                <div className='max-w-6xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div>
                            <h3 className='text-xl font-medium text-brand'>
                                Small-Agency Design Lead
                            </h3>
                            <p className='text-sm mb-4 text-muted-foreground'>
                                4 years at Another Tomorrow
                            </p>
                            <ul className='text-2xl space-y-2 text-black'>
                                <li>PostNord</li>
                                <li>KIA</li>
                                <li>Arla</li>
                                <li>DFDS</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-xl font-medium text-brand'>
                                Technology & Design Consultancy
                            </h3>
                            <p className='text-sm mb-4 text-muted-foreground'>
                                2 years at Accenture
                            </p>
                            <ul className='text-2xl space-y-2 text-black'>
                                <li>Atlas Copco</li>
                                <li>H&M</li>
                                <li>Electrolux</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-xl font-medium text-brand'>
                                Startup & Freelancing
                            </h3>
                            <p className='text-sm mb-4 text-muted-foreground'>
                                3 years in Sweden and Germany
                            </p>
                            <ul className='text-2xl space-y-2 text-black'>
                                <li>Airmee</li>
                                <li>Stagecast</li>
                                <li>Freelance in Germany</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects List */}
            <section className='mt-12 pt-12 bg-gradient-to-b from-white via-gray-50 to-gray-200"'>
                <div className='max-w-6xl mx-auto'>
                    <h3 className='text-s uppercase py-2 sm:px-4 font-bold'>
                        List of Work
                    </h3>

                    {renderCompanySection(
                        anotherTomorrowProjects,
                        'Another Tomorrow',
                        'At Another Tomorrow, I took the lead on design initiatives, prototyping bold ideas and driving long-term transformation. Working with innovative teams to create sustainable solutions and digital experiences that shape the future.',
                        anotherTomorrowImages
                    )}

                    {renderCompanySection(
                        accentureProjects,
                        'Accenture',
                        "Collaborating with Fjord and working on projects with some of Sweden's largest clients. Building scalable solutions and innovative digital experiences for enterprise-level challenges.",
                        accentureImages
                    )}

                    {renderCompanySection(
                        otherProjects,
                        'Other Projects',
                        'These projects showcase my versatility and ability to adapt to different challenges and industries.',
                        otherProjectImages
                    )}
                </div>
            </section>

            {selectedProject !== null && (
                <ProjectModal
                    project={projects[selectedProject]}
                    onClose={closeProject}
                />
            )}

            <Footer />
        </div>
    )
}

export default Projects
