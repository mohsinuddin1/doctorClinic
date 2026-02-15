import { useState } from 'react'

const FAQ_DATA = [
    {
        q: 'Do you accept walk-in patients?',
        a: 'Yes! We welcome walk-in patients during clinic hours (Mon–Sat, 9AM–8PM). However, booking an appointment in advance ensures shorter wait times.',
    },
    {
        q: 'How do I book an appointment?',
        a: 'You can book directly through our website by selecting your preferred date and time, then confirming via WhatsApp. You can also call us at +91 98765 43210.',
    },
    {
        q: 'Do you accept health insurance?',
        a: 'Yes, we accept most major health insurance providers. Please bring your insurance card during your visit. Contact us for specific insurance queries.',
    },
    {
        q: 'What should I bring for my first visit?',
        a: 'Please bring your ID, insurance card (if applicable), a list of current medications, any previous medical records or lab reports, and a note of your symptoms.',
    },
    {
        q: 'Is parking available at the clinic?',
        a: 'Yes, we have free parking available right in front of the clinic. There is also street parking available on both sides of the road.',
    },
    {
        q: 'What are the consultation fees?',
        a: 'Our consultation fees are affordable and transparent. General consultation starts at ₹300. Fees vary based on the type of visit. Contact us for specific pricing.',
    },
    {
        q: 'Do you provide phone consultations?',
        a: 'Yes! Dr. Mitchell offers phone consultations for follow-ups, medication queries, and non-emergency concerns. Call during clinic hours or book a phone slot.',
    },
    {
        q: 'Is the clinic child-friendly?',
        a: 'Absolutely! We have a comfortable waiting area with a small play zone for children. Dr. Mitchell has extensive experience in pediatric care.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => {
        setOpenIndex(prev => prev === i ? null : i)
    }

    return (
        <section className="faq section" id="faq">
            <div className="container">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="section-subtitle">
                    Have questions? We've got answers. Find everything you need to know before your visit.
                </p>
                <div className="faq-list">
                    {FAQ_DATA.map((item, i) => (
                        <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
                            <button className="faq-question" onClick={() => toggle(i)}>
                                <span>{item.q}</span>
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
