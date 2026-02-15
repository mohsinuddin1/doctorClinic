export default function ConsultationOptions() {
    return (
        <section className="consultation section" id="consultation">
            <div className="container">
                <h2 className="section-title">How Would You Like to Consult?</h2>
                <p className="section-subtitle">
                    Choose the consultation mode that works best for you — we're here either way.
                </p>
                <div className="consultation-grid">
                    {/* Phone Consultation */}
                    <div className="card consult-card phone">
                        <div className="consult-icon">📞</div>
                        <h3>Call Consultation</h3>
                        <p>
                            Speak directly with Dr. Mitchell over the phone for quick medical advice,
                            follow-up questions, prescription renewals, or non-emergency concerns.
                            Available during clinic hours.
                        </p>
                        <a href="tel:+919876543210" className="btn btn-primary">
                            📞 Call Now
                        </a>
                    </div>

                    {/* In-Clinic Visit */}
                    <div className="card consult-card clinic">
                        <div className="consult-icon">🏥</div>
                        <h3>In-Clinic Visit</h3>
                        <p>
                            Visit us for a thorough physical examination, diagnostic tests, procedures,
                            or any health concern that needs in-person attention. Walk-ins welcome or
                            book your preferred slot.
                        </p>
                        <a href="#booking" className="btn btn-accent">
                            📅 Book Your Slot
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
