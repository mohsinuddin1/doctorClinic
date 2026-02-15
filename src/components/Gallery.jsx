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
    return (
        <section className="gallery section" id="gallery">
            <div className="container">
                <h2 className="section-title">Our Clinic</h2>
                <p className="section-subtitle">
                    Take a look inside our clean, modern, and welcoming healthcare facility.
                </p>
                <div className="gallery-grid">
                    {GALLERY_IMAGES.map((img, i) => (
                        <div className="gallery-item" key={i}>
                            <img src={img.src} alt={img.alt} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
