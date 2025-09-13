import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import ProjectModal from '@/components/ProjectModal'
import { projects } from '@/data/projects'
import MainNav from '@/components/MainNav'
import ProjectFilter from '@/components/ProjectFilter'
import LogoCarousel from '@/components/LogoCarousel'
import Footer from '@/components/Footer'
import Spline from '@splinetool/react-spline'

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
            <section className='relative mb-10 flex items-center justify-center h-[70vh] md:h-[80vh]'>
                <Spline
                    scene='https://prod.spline.design/VY7pZbeyTg0fys0t/scene.splinecode'
                    className='w-full h-full'
                />
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
