export default function AboutDoctor() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-inner">
                    <div className="about-image-wrap">
                        <img
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=top"
                            alt="Dr. Sarah Mitchell"
                        />
                        <div className="about-exp-badge">15+ Years Experience</div>
                    </div>

                    <div className="about-content">
                        <h2>Dr. Sarah Mitchell</h2>
                        <div className="about-specialty">MBBS, MD — Family Medicine & General Practice</div>
                        <p className="about-text">
                            Dr. Sarah Mitchell is a compassionate and experienced family physician dedicated
                            to providing comprehensive healthcare for patients of all ages. With over 15 years
                            of practice, she specializes in preventive care, chronic disease management, and
                            personalized treatment plans that prioritize your well-being.
                        </p>
                        <p className="about-text">
                            Her approach combines modern medical practices with genuine patient care — ensuring
                            every visit feels comfortable and every concern is addressed thoroughly.
                        </p>
                        <div className="about-quals">
                            <span className="qual-tag">MBBS</span>
                            <span className="qual-tag">MD – Family Medicine</span>
                            <span className="qual-tag">Certified Diabetologist</span>
                            <span className="qual-tag">Preventive Health</span>
                            <span className="qual-tag">Pediatric Care</span>
                        </div>
                        <a href="#booking" className="btn btn-primary">Book Consultation</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
