import { useEffect } from 'react'

export const useSpinningCursor = () => {
  useEffect(() => {
    let cursorElement: HTMLElement | null = null

    const createCursor = () => {
      cursorElement = document.createElement('div')
      cursorElement.className = 'fixed w-3 h-3 bg-foreground border border-background z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-spin hidden'
      cursorElement.style.borderRadius = '0'
      document.body.appendChild(cursorElement)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorElement) {
        cursorElement.style.left = `${e.clientX}px`
        cursorElement.style.top = `${e.clientY}px`
      }
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.closest('a')) {
        if (!cursorElement) createCursor()
        if (cursorElement) {
          cursorElement.classList.remove('hidden')
          document.body.style.cursor = 'none'
        }
        document.addEventListener('mousemove', handleMouseMove)
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.closest('a')) {
        if (cursorElement) {
          cursorElement.classList.add('hidden')
          document.body.style.cursor = ''
        }
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }

    // Add event listeners to all links
    const addListenersToLinks = () => {
      const links = document.querySelectorAll('a')
      links.forEach(link => {
        link.addEventListener('mouseenter', handleMouseEnter)
        link.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    // Initial setup
    addListenersToLinks()
    
    // Observer to handle dynamically added links
    const observer = new MutationObserver(() => {
      addListenersToLinks()
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      const links = document.querySelectorAll('a')
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter)
        link.removeEventListener('mouseleave', handleMouseLeave)
      })
      document.removeEventListener('mousemove', handleMouseMove)
      document.body.style.cursor = ''
      if (cursorElement) {
        document.body.removeChild(cursorElement)
      }
      observer.disconnect()
    }
  }, [])
}