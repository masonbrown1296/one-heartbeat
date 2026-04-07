import { useEffect, useRef } from 'react'

export function useScrollAnimation(threshold = 0.12) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const elements = section.querySelectorAll('.fade-up, .fade-in')
    if (elements.length === 0) {
      // Animate the section itself if no children
      section.classList.contains('fade-up') || section.classList.contains('fade-in')
        ? observe(section)
        : null
      return
    }

    elements.forEach(el => observe(el, threshold))

    function observe(el, t = threshold) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        },
        { threshold: t }
      )
      observer.observe(el)
    }

    return () => {}
  }, [threshold])

  return sectionRef
}

export function useElementAnimation(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
