
import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import ProjectModal from '@/components/ProjectModal'
import { projects } from '@/data/projects'
import MainNav from '@/components/MainNav'
import ProjectFilter from '@/components/ProjectFilter'

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
        <div className='min-h-screen w-full pt-20'>
            <MainNav />
            <section className='relative mb-20 h-96 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-4'>Welcome to My Portfolio</h1>
                    <p className='text-gray-600'>Explore my projects and work</p>
                </div>
            </section>

            <section className='py-20 px-4'>
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
        </div>
    )
}

export default Index
