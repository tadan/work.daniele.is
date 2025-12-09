import { Button } from '@/components/ui/button'
import { ExternalLink, Video, Link } from 'lucide-react'
import { Project } from '@/data/projects'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

type ProjectModalProps = {
    project: Project
    onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const hasImages = Boolean(project.images && project.images.length)

    return (
        <div
            className='fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50'
            onClick={onClose}
        >
            <div
                className='bg-slate-100 max-w-7xl w-full p-6 overflow-y-auto max-h-[90vh]'
                onClick={(e) => e.stopPropagation()}
            >
                {/* Mobile Layout */}
                <div className='block md:hidden'>
                    <div className='flex justify-between items-start mb-6'>
                        <div>
                            <h2 className='text-3xl font-bold mb-2'>
                                {project.title}
                            </h2>
                        </div>
                        <Button variant='outline' size='lg' onClick={onClose} aria-label='Close project details'>
                            X
                        </Button>
                    </div>
                    {/* Stacked Images */}
                    {project.images ? (
                        <div className='space-y-6 mb-6'>
                            {project.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${project.title} - Image ${
                                        index + 1
                                    }`}
                                    className='w-full rounded-lg object-cover shadow-lg'
                                />
                            ))}
                        </div>
                    ) : (
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full rounded-lg mb-6 object-cover shadow-lg'
                        />
                    )}

                    <div className='space-y-6'>
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>
                                The Challenge
                            </h3>
                            <p className='text-neutral-700'>
                                <ReactMarkdown>
                                    {project.challenge}
                                </ReactMarkdown>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>
                                The Solution
                            </h3>
                            <p className='text-neutral-700'>
                                <ReactMarkdown>
                                    {project.solution}
                                </ReactMarkdown>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>
                                My Role
                            </h3>
                            <p className='text-neutral-700'>{project.role}</p>
                        </div>

                        {/* Case Study Sections */}
                        {project.keyStudy && (
                            <>
                                {project.keyResults && (
                                    <div>
                                        <h3 className='text-xl font-semibold mb-4'>
                                            Key Results
                                        </h3>
                                        <div className='grid grid-cols-2 gap-4'>
                                            {project.keyResults.map((result, index) => (
                                                <div key={index} className='bg-white p-4 rounded-lg text-center'>
                                                    <div className='text-2xl font-bold mb-1 text-brand'>{result.value}</div>
                                                    <div className='text-sm text-neutral-600'>{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.outcomes && (
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2'>
                                            Outcomes
                                        </h3>
                                        <ul className='space-y-2'>
                                            {project.outcomes.map((outcome, index) => (
                                                <li key={index} className='text-neutral-700 flex items-start'>
                                                    <span className='mr-2'>✓</span>
                                                    <span>{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {project.team && (
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2'>
                                            The Team
                                        </h3>
                                        <ul className='space-y-1'>
                                            {project.team.map((member, index) => (
                                                <li key={index} className='text-neutral-700'>
                                                    <span className='font-semibold'>{member.role}:</span>{' '}
                                                    {member.name || `${member.count} members`}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </>
                        )}

                        {(project.videoUrl ||
                            project.link ||
                            project.moreInfo) && (
                            <div className='flex flex-wrap gap-4 pt-4'>
                                {project.videoUrl && (
                                    <Button asChild>
                                        <a
                                            href={project.videoUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Video className='mr-2 h-4 w-4' />
                                            Watch Video
                                        </a>
                                    </Button>
                                )}
                                {project.link && (
                                    <Button
                                        asChild
                                        className='bg-brand text-brand-foreground hover:bg-brand/90'
                                    >
                                        <a
                                            href={project.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <ExternalLink className='mr-2 h-4 w-4' />
                                            Visit Project
                                        </a>
                                    </Button>
                                )}
                                {project.moreInfo && (
                                    <Button
                                        asChild
                                        className='bg-brand/70 text-brand-foreground hover:bg-brand/60'
                                    >
                                        <a
                                            href={project.moreInfo}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Link className='mr-2 h-4 w-4' />
                                            Learn More
                                        </a>
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Desktop Layout - Two Columns */}
                <div className='hidden md:block'>
                    <div className='flex justify-between items-start mb-8'>
                        <div>
                            <h2 className='text-4xl font-bold mb-2'>
                                {project.title}
                            </h2>
                        </div>
                        <Button variant='ghost' size='lg' onClick={onClose} aria-label='Close project details'>
                            X
                        </Button>
                    </div>

                    <div className='grid grid-cols-2 gap-8'>
                        {/* Left Column - Text Content */}
                        <div className='space-y-12'>
                            <div>
                                <h3 className='text-2xl font-semibold mb-4'>
                                    The Challenge
                                </h3>
                                <p className='text-neutral-700 text-lg leading-relaxed'>
                                    <ReactMarkdown>
                                        {project.challenge}
                                    </ReactMarkdown>
                                </p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold mb-4'>
                                    The Solution
                                </h3>
                                <p className='text-neutral-700 text-lg leading-relaxed'>
                                    <ReactMarkdown>
                                        {project.solution}
                                    </ReactMarkdown>
                                </p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold mb-4'>
                                    My Role
                                </h3>
                                <p className='text-neutral-700 text-lg leading-relaxed'>
                                    <ReactMarkdown>
                                        {project.role}
                                    </ReactMarkdown>
                                </p>
                            </div>

                            {/* Case Study Sections - Desktop */}
                            {project.keyStudy && (
                                <>
                                    {project.keyResults && (
                                        <div>
                                            <h3 className='text-2xl font-semibold mb-4'>
                                                Key Results
                                            </h3>
                                            <div className='grid grid-cols-2 gap-4'>
                                                {project.keyResults.map((result, index) => (
                                                    <div key={index} className='bg-white p-6 rounded-lg text-center shadow-sm'>
                                                        <div className='text-3xl font-bold mb-2 text-brand'>{result.value}</div>
                                                        <div className='text-sm text-neutral-600'>{result.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {project.outcomes && (
                                        <div>
                                            <h3 className='text-2xl font-semibold mb-4'>
                                                Outcomes
                                            </h3>
                                            <ul className='space-y-3'>
                                                {project.outcomes.map((outcome, index) => (
                                                    <li key={index} className='text-neutral-700 text-lg flex items-start'>
                                                        <span className='mr-3 text-brand font-bold'>✓</span>
                                                        <span>{outcome}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {project.team && (
                                        <div>
                                            <h3 className='text-2xl font-semibold mb-4'>
                                                The Team
                                            </h3>
                                            <ul className='space-y-2'>
                                                {project.team.map((member, index) => (
                                                    <li key={index} className='text-neutral-700 text-lg'>
                                                        <span className='font-semibold'>{member.role}:</span>{' '}
                                                        {member.name || `${member.count} members`}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            )}

                            {(project.videoUrl ||
                                project.link ||
                                project.moreInfo) && (
                                <div className='flex flex-wrap gap-4 pt-4'>
                                    {project.videoUrl && (
                                        <Button asChild size='lg'>
                                            <a
                                                href={project.videoUrl}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <Video className='mr-2 h-4 w-4' />
                                                Watch Video
                                            </a>
                                        </Button>
                                    )}
                                    {project.link && (
                                        <Button
                                            asChild
                                            size='lg'
                                            className='bg-brand text-brand-foreground hover:bg-brand/90'
                                        >
                                            <a
                                                href={project.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <ExternalLink className='mr-2 h-4 w-4' />
                                                Visit Project
                                            </a>
                                        </Button>
                                    )}
                                    {project.moreInfo && (
                                        <Button
                                            asChild
                                            size='lg'
                                            className='bg-brand/70 text-brand-foreground hover:bg-brand/60'
                                        >
                                            <a
                                                href={project.moreInfo}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <Link className='mr-2 h-4 w-4' />
                                                Learn More
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Right Column - Stacked Images */}
                        <div className='space-y-6'>
                            {/* Stacked Images */}
                            {project.images ? (
                                <div className='space-y-6'>
                                    {project.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${project.title} - Image ${
                                                index + 1
                                            }`}
                                            className='w-full rounded-lg object-cover shadow-lg'
                                        />
                                    ))}
                                </div>
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full rounded-lg object-cover shadow-lg'
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
