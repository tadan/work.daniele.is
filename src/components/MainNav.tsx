import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const MainNav = () => {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const links = [
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav className='bg-transparent sticky top-0 z-50'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <Link to='/' className='flex items-center'>
                        <img
                            src='/logo_transparent.svg'
                            alt="Daniele Tatasciore's Logo"
                            className='h-12 w-auto'
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex space-x-8'>
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-brand',
                                    location.pathname === link.href
                                        ? 'text-brand'
                                        : 'text-foreground'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='text-foreground hover:text-brand transition-colors'
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className='md:hidden bg-background border-t'>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    'block px-3 py-2 text-base font-medium transition-colors hover:text-brand hover:underline',
                                    location.pathname === link.href
                                        ? 'text-brand underline'
                                        : 'text-foreground'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default MainNav
