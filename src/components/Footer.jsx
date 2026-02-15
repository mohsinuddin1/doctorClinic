export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <h4 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            🩺 CareFirst
                        </h4>
                        <p>
                            Trusted family healthcare for over 15 years. We provide compassionate,
                            expert medical care for patients of all ages. Your health is our priority.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="https://wa.me/919876543210" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">💬</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <a href="#about">About Doctor</a>
                        <a href="#services">Services</a>
                        <a href="#health-assessment">Health Check</a>
                        <a href="#booking">Book Appointment</a>
                        <a href="#reviews">Reviews</a>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <a href="#services">General Checkup</a>
                        <a href="#services">Pediatric Care</a>
                        <a href="#services">Chronic Disease</a>
                        <a href="#services">Vaccinations</a>
                        <a href="#services">Lab Tests</a>
                    </div>

                    <div className="footer-links">
                        <h4>Contact</h4>
                        <a href="tel:+919876543210">📞 +91 98765 43210</a>
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
                        <a href="mailto:hello@carefirstclinic.com">✉️ Email Us</a>
                        <a href="#contact">📍 Get Directions</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {year} CareFirst Medical Clinic. All rights reserved. | Made with ❤️ for better health.</p>
                </div>
            </div>
        </footer>
    )
}
