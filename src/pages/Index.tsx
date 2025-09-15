import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '@/components/ProjectCard'
import ProjectModal from '@/components/ProjectModal'
import { projects } from '@/data/projects'
import MainNav from '@/components/MainNav'
import ProjectFilter from '@/components/ProjectFilter'
import LogoCarousel from '@/components/LogoCarousel'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

const Index = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [selectedFilter, setSelectedFilter] = useState('all')

    const closeProject = () => {
        setSelectedProject(null)
        setCurrentImageIndex(0)
    }

    const filteredProjects = projects.filter((project) => {
        if (selectedFilter === 'all') return true
        if (!project.tags) return false
        return project.tags.some((tag) =>
            tag.toLowerCase().includes(selectedFilter.toLowerCase())
        )
    })

    return (
        <div className='min-h-screen w-full pt-5'>
            <MainNav />
            
            {/* Hero Section */}
            <section className='relative mb-20 flex items-center justify-center min-h-[50vh] px-4'>
                <div className='max-w-4xl mx-auto text-center animate-in'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8'>
                        I am <Link to="/about" className='text-brand hover:underline transition-colors'>designer and technologist</Link> based in Malmö, Sweden. I help companies <Link to="/projects" className='text-brand hover:underline transition-colors'>accelerate innovation</Link> through prototyping. My experience ranges from small studios to large consultancies, collaborating with some of Sweden's biggest clients. <a href="mailto:work@daniele.is" className='text-brand hover:underline transition-colors'>Let's bring your idea to life</a> together.
                    </h1>
                </div>
            </section>

            {/* Skills Section */}
            <section className='py-20 px-4'>
                <div className='max-w-6xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                        <div className='space-y-4'>
                            <h3 className='text-xl font-semibold mb-6'>Design & Research</h3>
                            <ul className='space-y-2 text-muted-foreground'>
                                <li>Product Design & Delivery</li>
                                <li>User Research</li>
                                <li>Human–Computer Interaction</li>
                                <li>Facilitation & Education</li>
                            </ul>
                        </div>
                        
                        <div className='space-y-4'>
                            <h3 className='text-xl font-semibold mb-6'>Prototyping & Technology</h3>
                            <ul className='space-y-2 text-muted-foreground'>
                                <li>Rapid Prototyping</li>
                                <li>Physical Prototyping</li>
                                <li>Design Systems</li>
                                <li>Front-End Development</li>
                            </ul>
                        </div>
                        
                        <div className='space-y-4'>
                            <h3 className='text-xl font-semibold mb-6'>Brand & Communication</h3>
                            <ul className='space-y-2 text-muted-foreground'>
                                <li>Brand & Communication Strategy</li>
                                <li>Social Media Management</li>
                                <li>Email Marketing</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className='flex justify-center mt-16'>
                        <Button asChild size="lg">
                            <Link to="/projects">See all my projects</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <LogoCarousel />

            <section className='py-0 px-4'>
                <ProjectFilter
                    selected={selectedFilter}
                    onSelect={setSelectedFilter}
                />
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                hovered={hoveredIndex === index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => {
                                    setSelectedProject(index)
                                    setCurrentImageIndex(0)
                                }}
                            />
                        ))}
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

export default Index
