import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import ProjectModal from '@/components/ProjectModal'
import { projects } from '@/data/projects'
import MainNav from '@/components/MainNav'
import Footer from '@/components/Footer'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const closeProject = () => {
        setSelectedProject(null)
        setCurrentImageIndex(0)
    }

    // Organize projects by company
    const anotherTomorrowProjects = projects.filter(project => 
        ['The Future of Breakfast with Arla', 'Prototyping Sustainable Logistics with DFDS', 
         'PostNord Last Mile Dashboard', 'PostNord SWAN Dashboard', 'Utopia Lab', 
         'KIA Inspiration Lab', 'The Curious Question Cards', 'TransitionView'].includes(project.title)
    )

    const accentureProjects = projects.filter(project => 
        ['Atlas Copco Smart Portal', 'Electrolux Scorecard', 'Rogue Bees – Accenture Song'].includes(project.title)
    )

    const renderProjectList = (projectList: typeof projects, title: string) => (
        <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">{title}</h2>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medium text-muted-foreground border-b pb-2 mb-4">
                    <div>Project Name</div>
                    <div>Description</div>
                    <div>Year</div>
                </div>
                {projectList.map((project, index) => {
                    const globalIndex = projects.findIndex(p => p.title === project.title)
                    return (
                        <div 
                            key={project.title} 
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-muted hover:bg-muted/30 cursor-pointer transition-colors"
                            onClick={() => {
                                setSelectedProject(globalIndex)
                                setCurrentImageIndex(0)
                            }}
                        >
                            <div className="font-medium">{project.title}</div>
                            <div className="text-muted-foreground">{project.description}</div>
                            <div className="text-muted-foreground">{project.year}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

    return (
        <div className='min-h-screen w-full pt-5'>
            <MainNav />
            
            {/* Hero Section */}
            <section className='relative mb-20 flex items-center justify-center px-4'>
                <div className='max-w-4xl mx-auto text-center animate-in'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-light leading-tight'>
                        I began my career in fast-paced startups before joining Accenture, where I grew as a designer at Fjord, working on innovative projects with some of Sweden's largest clients. Later, at Another Tomorrow, I took the lead on design initiatives, prototyping bold ideas and driving long-term transformation.
                    </h1>
                </div>
            </section>

            {/* Projects List */}
            <section className='py-0 px-4'>
                <div className='max-w-7xl mx-auto'>
                    <h1 className="text-3xl font-bold mb-12">List of Work</h1>
                    
                    {renderProjectList(anotherTomorrowProjects, "Another Tomorrow")}
                    {renderProjectList(accentureProjects, "Accenture")}
                    
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-8">Other Projects</h2>
                        <div className="text-muted-foreground italic">Coming soon...</div>
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