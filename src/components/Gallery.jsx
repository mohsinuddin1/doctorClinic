import { useEffect, useRef, useState } from 'react'

const GALLERY_IMAGES = [
    {
        src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=450&fit=crop',
        alt: 'Modern clinic reception area',
    },
    {
        src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=450&fit=crop',
        alt: 'Clean consultation room',
    },
    {
        src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=450&fit=crop',
        alt: 'Medical equipment and diagnostics',
    },
    {
        src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=450&fit=crop',
        alt: 'Comfortable patient waiting area',
    },
    {
        src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop',
        alt: 'Clinic hallway and facilities',
    },
    {
        src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=450&fit=crop',
        alt: 'Laboratory and testing area',
    },
]

export default function Gallery() {
    const scrollRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    // Detect mobile
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    // Auto-slide on mobile
    useEffect(() => {
        if (!isMobile || !scrollRef.current) return

        const interval = setInterval(() => {
            setActiveIndex(prev => {
                const next = (prev + 1) % GALLERY_IMAGES.length
                const container = scrollRef.current
                if (container) {
                    const child = container.children[next]
                    if (child) {
                        container.scrollTo({
                            left: child.offsetLeft - container.offsetLeft,
                            behavior: 'smooth',
                        })
                    }
                }
                return next
            })
        }, 3000)

        return () => clearInterval(interval)
    }, [isMobile])

    // Track active slide on manual scroll
    useEffect(() => {
        if (!isMobile || !scrollRef.current) return
        const container = scrollRef.current

        const onScroll = () => {
            const children = [...container.children]
            const center = container.scrollLeft + container.offsetWidth / 2
            let closest = 0
            let minDist = Infinity
            children.forEach((child, i) => {
                const childCenter = child.offsetLeft + child.offsetWidth / 2
                const dist = Math.abs(center - childCenter)
                if (dist < minDist) {
                    minDist = dist
                    closest = i
                }
            })
            setActiveIndex(closest)
        }

        container.addEventListener('scroll', onScroll, { passive: true })
        return () => container.removeEventListener('scroll', onScroll)
    }, [isMobile])

    return (
        <section className="gallery section" id="gallery">
            <div className="container">
                <h2 className="section-title">Our Clinic</h2>
                <p className="section-subtitle">
                    Take a look inside our clean, modern, and welcoming healthcare facility.
                </p>
                <div className="gallery-grid" ref={scrollRef}>
                    {GALLERY_IMAGES.map((img, i) => (
                        <div className="gallery-item" key={i}>
                            <img src={img.src} alt={img.alt} loading="lazy" />
                        </div>
                    ))}
                </div>

                {/* Dot indicators — mobile only */}
                {isMobile && (
                    <div className="gallery-dots">
                        {GALLERY_IMAGES.map((_, i) => (
                            <button
                                key={i}
                                className={`gallery-dot ${i === activeIndex ? 'active' : ''}`}
                                onClick={() => {
                                    const container = scrollRef.current
                                    if (container) {
                                        const child = container.children[i]
                                        if (child) {
                                            container.scrollTo({
                                                left: child.offsetLeft - container.offsetLeft,
                                                behavior: 'smooth',
                                            })
                                        }
                                    }
                                    setActiveIndex(i)
                                }}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
