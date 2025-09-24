import { Project } from '@/data/projects'
import { ArrowRight } from 'lucide-react'

type ProjectCardProps = {
    project: Project
    hovered: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
    onClick: () => void
}

const ProjectCard = ({
    project,
    hovered,
    onMouseEnter,
    onMouseLeave,
    onClick,
}: ProjectCardProps) => (
    <div
        className='group cursor-pointer'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <div
            className='relative aspect-video overflow-hidden rounded-lg glass hover-lift mb-4'
            onClick={onClick}
        >
            <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div
                className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
                    hovered ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className='bg-black/80 text-white hover:bg-white hover:text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300'>
                    View Project
                    <ArrowRight size={16} />
                </div>
            </div>
        </div>
        <div className='space-y-2'>
            <h3 className='text-sm uppercase'>Highlight</h3>
            <h2 className='text-xl font-semibold'>{project.title}</h2>
            <p className='text-muted-foreground'>{project.description}</p>
        </div>
    </div>
)

export default ProjectCard
