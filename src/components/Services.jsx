const SERVICES = [
    { icon: '🩺', title: 'General Checkup', desc: 'Comprehensive health evaluations for all ages with personalized care plans.' },
    { icon: '👶', title: 'Pediatric Care', desc: 'Expert care for infants, children, and adolescents including vaccinations.' },
    { icon: '🫀', title: 'Chronic Disease', desc: 'Ongoing management of diabetes, hypertension, thyroid, and more.' },
    { icon: '🦴', title: 'Orthopedic Care', desc: 'Treatment for joint pain, back pain, sports injuries, and fractures.' },
    { icon: '🌡️', title: 'Fever & Infections', desc: 'Quick diagnosis and treatment for viral, bacterial, and seasonal illnesses.' },
    { icon: '👩', title: "Women's Health", desc: 'Specialized care including PCOS, prenatal checkups, and wellness screening.' },
    { icon: '💉', title: 'Vaccinations', desc: 'Complete immunization services for children and adults per latest guidelines.' },
    { icon: '🔬', title: 'Lab Tests', desc: 'On-site blood tests, urine analysis, and diagnostic screenings available.' },
]

export default function Services() {
    return (
        <section className="services section" id="services">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">
                    Comprehensive healthcare services tailored to your needs — from routine checkups to specialized treatments.
                </p>
                <div className="services-grid">
                    {SERVICES.map((s, i) => (
                        <div className={`card service-card animate-on-scroll stagger-${i + 1}`} key={i}>
                            <div className="service-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
