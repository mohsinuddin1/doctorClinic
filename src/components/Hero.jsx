export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <div className="hero-badge">🏥 Trusted Family Healthcare</div>
                    <h1>
                        Your Health,<br />
                        Our <span>Priority</span>
                    </h1>
                    <p className="hero-text">
                        CareFirst Medical Clinic provides compassionate, expert healthcare for your entire family.
                        Walk-in or book your appointment today — quality care is just a call away.
                    </p>
                    <div className="hero-btns">
                        <a href="#booking" className="btn btn-primary btn-lg">📅 Book Appointment</a>
                        <a href="tel:+919876543210" className="btn btn-outline btn-lg">📞 Call Now</a>
                    </div>
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="stat-num">15+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-num">10K+</div>
                            <div className="stat-label">Happy Patients</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-num">4.9★</div>
                            <div className="stat-label">Patient Rating</div>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop&crop=top"
                        alt="Doctor at CareFirst Medical Clinic"
                    />
                    <div className="hero-float-card card-1">
                        ✅ Walk-ins Welcome
                    </div>
                    <div className="hero-float-card card-2">
                        🕐 Open Mon–Sat
                    </div>
                </div>
            </div>
        </section>
    )
}
