import { useState, useEffect } from 'react'
import ProjectCard from '@/components/ProjectCard'
import ProjectModal from '@/components/ProjectModal'
import { projects } from '@/data/projects'
import MainNav from '@/components/MainNav'
import Footer from '@/components/Footer'
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
        ].includes(project.title)
    )

    const accentureProjects = projects.filter((project) =>
        [
            'Atlas Copco Smart Portal',
            'Electrolux Scorecard',
            'Rogue Bees – Accenture Song',
        ].includes(project.title)
    )

    // Get all images from projects in a company
    const getCompanyImages = (projectList: typeof projects) => {
        const images: string[] = []
        projectList.forEach(project => {
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

    const renderCompanySection = (
        projectList: typeof projects, 
        title: string, 
        description: string,
        images: string[]
    ) => (
        <div className='mb-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                <div>
                    <h2 className='text-4xl font-semibold mb-4'>{title}</h2>
                    <p className='text-muted-foreground text-lg mb-8 leading-relaxed'>{description}</p>
                    
                    <div className='space-y-0'>
                        {projectList.map((project, index) => {
                            const globalIndex = projects.findIndex(
                                (p) => p.title === project.title
                            )
                            return (
                                <div
                                    key={project.title}
                                    className='grid grid-cols-1 md:grid-cols-4 gap-2 py-6 border-b border-border hover:bg-muted/30 cursor-pointer transition-colors -mx-8 px-8 h-24'
                                    onClick={() => {
                                        setSelectedProject(globalIndex)
                                        setCurrentImageIndex(0)
                                    }}
                                >
                                    <div className='font-medium'>{project.title}</div>
                                    <div className='text-muted-foreground text-sm'>
                                        {project.description}
                                    </div>
                                    <div className='text-muted-foreground text-sm'>
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
                
                <div className='lg:sticky lg:top-8'>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 3000,
                                stopOnInteraction: false,
                            }),
                        ]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="aspect-video">
                                        <img
                                            src={image}
                                            alt={`${title} project ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    )

    return (
        <div className='min-h-screen w-full pt-5'>
            <MainNav />

            {/* Hero Section */}
            <section className='relative mb-20 flex items-center justify-center min-h-[30vh] px-4'>
                <div className='max-w-4xl mx-auto text-left animate-in'>
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

            {/* Projects List */}
            <section className='py-16 bg-gray-100'>
                <div className='max-w-7xl mx-auto px-8'>
                    <h1 className='text-s uppercase mb-16'>List of Work</h1>

                    {renderCompanySection(
                        anotherTomorrowProjects,
                        'Another Tomorrow',
                        'At Another Tomorrow, I took the lead on design initiatives, prototyping bold ideas and driving long-term transformation. Working with innovative teams to create sustainable solutions and digital experiences that shape the future.',
                        anotherTomorrowImages
                    )}
                    
                    {renderCompanySection(
                        accentureProjects,
                        'Accenture',
                        'Collaborating with Fjord and working on projects with some of Sweden\'s largest clients. Building scalable solutions and innovative digital experiences for enterprise-level challenges.',
                        accentureImages
                    )}

                    <div className='mb-16'>
                        <h2 className='text-2xl font-semibold mb-8'>
                            Other Projects
                        </h2>
                        <div className='text-muted-foreground italic'>
                            Coming soon...
                        </div>
                    </div>
                </div>
            </section>

            {selectedProject !== null && (
                <ProjectModal
                    project={projects[selectedProject]}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                    onClose={closeProject}
                />
            )}

            <Footer />
        </div>
    )
}

export default Projects
