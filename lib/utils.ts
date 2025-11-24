import clsx, { ClassValue } from 'clsx'

/**
 * Utility function to merge class names
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/**
 * Smooth scroll to element by ID
 */
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    const offset = 80 // Navbar height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

