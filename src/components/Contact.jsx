export default function Contact() {
    const today = new Date().getDay() // 0=Sun, 1=Mon, ...

    const HOURS = [
        { day: 'Monday', time: '9:00 AM – 8:00 PM', dayNum: 1 },
        { day: 'Tuesday', time: '9:00 AM – 8:00 PM', dayNum: 2 },
        { day: 'Wednesday', time: '9:00 AM – 8:00 PM', dayNum: 3 },
        { day: 'Thursday', time: '9:00 AM – 8:00 PM', dayNum: 4 },
        { day: 'Friday', time: '9:00 AM – 8:00 PM', dayNum: 5 },
        { day: 'Saturday', time: '9:00 AM – 5:00 PM', dayNum: 6 },
        { day: 'Sunday', time: 'Closed', dayNum: 0 },
    ]

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title">Visit Us</h2>
                <p className="section-subtitle">
                    We're conveniently located and easy to reach. Come visit us or get in touch!
                </p>
                <div className="contact-inner">
                    <div>
                        <div className="contact-info-list">
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Address</h4>
                                    <p>123 Health Street, Main Road<br />Your City, State 400001</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">💬</div>
                                <div>
                                    <h4>WhatsApp</h4>
                                    <p><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">✉️</div>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:hello@carefirstclinic.com">hello@carefirstclinic.com</a></p>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <table className="hours-table">
                            <tbody>
                                {HOURS.map(h => (
                                    <tr key={h.day} className={h.dayNum === today ? 'today' : ''}>
                                        <td>{h.day} {h.dayNum === today ? '(Today)' : ''}</td>
                                        <td>{h.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Map */}
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.123456789!2d72.877!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzcuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Clinic Location"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
