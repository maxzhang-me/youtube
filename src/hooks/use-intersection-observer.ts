import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsIntersecting(entry.isIntersecting)
      })
    }, options)

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => observer.disconnect()
  }, [options])

  return {
    targetRef,
    isIntersecting,
  }
}
