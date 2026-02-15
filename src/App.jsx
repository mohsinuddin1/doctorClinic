import { useEffect } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DiseaseTicker from './components/DiseaseTicker'
import AboutDoctor from './components/AboutDoctor'
import Services from './components/Services'
import ConsultationOptions from './components/ConsultationOptions'
import HealthAssessment from './components/HealthAssessment'
import BookingSection from './components/BookingSection'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

/* SVG wave used as divider between sections */
function WaveDivider({ fill = '#fff', flip = false }) {
    return (
        <div className={`wave-divider ${flip ? 'wave-divider-top' : ''}`}>
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0,20 C360,55 720,0 1080,35 C1260,50 1380,20 1440,25 L1440,60 L0,60 Z"
                    fill={fill}
                />
            </svg>
        </div>
    )
}

export default function App() {
    /* Intersection Observer for scroll animations */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        )

        // Observe all animate-on-scroll elements
        const els = document.querySelectorAll('.animate-on-scroll')
        els.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <AnnouncementBar />
            <Navbar />
            <Hero />
            <DiseaseTicker />

            {/* About — white bg, wave into alt section */}
            <div style={{ position: 'relative' }}>
                <AboutDoctor />
                <WaveDivider fill="#F0F7F4" />
            </div>

            {/* Services — alt bg */}
            <div style={{ position: 'relative' }}>
                <Services />
                <WaveDivider fill="#fff" />
            </div>

            <ConsultationOptions />

            {/* Health Assessment — gradient bg, wave into white */}
            <div style={{ position: 'relative' }}>
                <HealthAssessment />
                <WaveDivider fill="#fff" />
            </div>

            <BookingSection />

            {/* Gallery — alt bg */}
            <div style={{ position: 'relative' }}>
                <Gallery />
                <WaveDivider fill="#fff" />
            </div>

            <Reviews />

            {/* FAQ — alt bg */}
            <div style={{ position: 'relative' }}>
                <FAQ />
                <WaveDivider fill="#fff" />
            </div>

            <Contact />
            <Footer />
            <WhatsAppFloat />
        </>
    )
}
