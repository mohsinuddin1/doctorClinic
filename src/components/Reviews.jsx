const REVIEWS = [
    {
        name: 'Priya K.',
        initials: 'PK',
        stars: 5,
        text: 'Dr. Mitchell is incredibly thorough and caring. She took the time to explain everything about my treatment plan. The clinic is clean and the staff is very welcoming.',
        date: '2 weeks ago',
    },
    {
        name: 'Rahul S.',
        initials: 'RS',
        stars: 5,
        text: 'Best clinic in the area! The booking via WhatsApp is so convenient. Got my appointment confirmed within minutes. Highly recommend for families.',
        date: '1 month ago',
    },
    {
        name: 'Ananya M.',
        initials: 'AM',
        stars: 5,
        text: 'Brought my kids for their vaccinations. The doctor was extremely gentle and made my children feel comfortable. Very professional and modern facility.',
        date: '1 month ago',
    },
    {
        name: 'Vikram R.',
        initials: 'VR',
        stars: 4,
        text: 'Great experience with my diabetes management. Dr. Mitchell provides clear guidance and follows up on progress regularly. Truly a doctor who cares.',
        date: '2 months ago',
    },
    {
        name: 'Sunita D.',
        initials: 'SD',
        stars: 5,
        text: 'The phone consultation was very helpful when I couldn\'t visit in person. Quick response and prescribed medications that worked perfectly.',
        date: '2 months ago',
    },
    {
        name: 'Arjun P.',
        initials: 'AP',
        stars: 5,
        text: 'Clean clinic, amazing staff, and very affordable. The health assessment tool on the website helped me understand my concerns before visiting.',
        date: '3 months ago',
    },
]

export default function Reviews() {
    return (
        <section className="reviews section" id="reviews">
            <div className="container">
                <h2 className="section-title">What Our Patients Say</h2>
                <p className="section-subtitle">
                    Real experiences from real patients — hear why families trust CareFirst for their healthcare needs.
                </p>
                <div className="reviews-grid">
                    {REVIEWS.map((r, i) => (
                        <div className={`card review-card animate-on-scroll stagger-${i + 1} ${i === 0 ? 'featured' : ''}`} key={i}>
                            <div className="review-stars">
                                {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                            </div>
                            <p className="review-text">"{r.text}"</p>
                            <div className="review-author">
                                <div className="review-avatar">{r.initials}</div>
                                <div className="review-author-info">
                                    <div className="author-name">{r.name}</div>
                                    <div className="author-date">{r.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
