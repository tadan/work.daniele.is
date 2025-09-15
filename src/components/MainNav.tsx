import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const MainNav = () => {
    const location = useLocation()

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav className='flex justify-center my-16'>
            <div className='inline-flex items-center rounded-full bg-muted p-1'>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className={cn(
                            'px-6 py-2 rounded-full text-sm font-medium transition-colors',
                            location.pathname === link.href
                                ? 'bg-background shadow'
                                : 'hover:bg-background/50'
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default MainNav
