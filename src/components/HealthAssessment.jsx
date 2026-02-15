import { useState } from 'react'

const STEPS = [
    {
        title: 'Basic Information',
        subtitle: 'Step 1 of 4 — Tell us about yourself',
        options: [
            { id: 'age-child', label: '👶 Child (0–12)' },
            { id: 'age-teen', label: '🧒 Teen (13–17)' },
            { id: 'age-adult', label: '🧑 Adult (18–45)' },
            { id: 'age-mid', label: '👨 Middle Age (46–60)' },
            { id: 'age-senior', label: '👴 Senior (60+)' },
            { id: 'gender-male', label: '♂️ Male' },
            { id: 'gender-female', label: '♀️ Female' },
            { id: 'gender-other', label: '⚧ Other' },
        ],
        multi: true,
    },
    {
        title: 'What symptoms are you experiencing?',
        subtitle: 'Step 2 of 4 — Select all that apply',
        options: [
            { id: 'fever', label: '🌡️ Fever / Chills', severity: 2 },
            { id: 'cough', label: '😷 Persistent Cough', severity: 2 },
            { id: 'headache', label: '🤕 Headache / Migraine', severity: 1 },
            { id: 'body-pain', label: '💪 Body / Joint Pain', severity: 1 },
            { id: 'fatigue', label: '😴 Fatigue / Weakness', severity: 1 },
            { id: 'breathing', label: '😮‍💨 Difficulty Breathing', severity: 3 },
            { id: 'chest-pain', label: '💔 Chest Pain', severity: 3 },
            { id: 'stomach', label: '🤢 Nausea / Stomach Pain', severity: 2 },
            { id: 'skin', label: '🔴 Skin Rash / Irritation', severity: 1 },
            { id: 'dizziness', label: '😵 Dizziness / Fainting', severity: 2 },
        ],
        multi: true,
    },
    {
        title: 'Lifestyle & Medical History',
        subtitle: 'Step 3 of 4 — Help us understand your background',
        options: [
            { id: 'diabetes', label: '💉 Diabetes', severity: 2 },
            { id: 'hypertension', label: '🫀 High Blood Pressure', severity: 2 },
            { id: 'heart', label: '❤️ Heart Condition', severity: 3 },
            { id: 'asthma', label: '🌬️ Asthma / Respiratory', severity: 2 },
            { id: 'smoking', label: '🚬 Smoking', severity: 1 },
            { id: 'sedentary', label: '🪑 Sedentary Lifestyle', severity: 1 },
            { id: 'medication', label: '💊 Currently on Medication', severity: 1 },
            { id: 'none', label: '✅ No Known Conditions', severity: 0 },
        ],
        multi: true,
    },
]

function getResult(selected) {
    let score = 0
    const conditions = []

    STEPS.forEach(step => {
        step.options.forEach(opt => {
            if (selected.has(opt.id) && opt.severity) {
                score += opt.severity
                if (opt.severity >= 2) {
                    conditions.push(opt.label.replace(/^[^\s]+ /, ''))
                }
            }
        })
    })

    if (score >= 8) {
        return {
            level: 'urgent',
            label: '🔴 Urgent — See a Doctor Soon',
            text: 'Based on your symptoms and medical history, we recommend booking an appointment as soon as possible. Some of your symptoms may require immediate medical attention.',
            conditions: conditions.length > 0 ? conditions : ['Multiple concerning symptoms detected'],
        }
    } else if (score >= 4) {
        return {
            level: 'moderate',
            label: '🟡 Moderate — Consultation Recommended',
            text: 'Your symptoms suggest you should consult with a doctor within the next few days. Early intervention can prevent complications and ensure proper treatment.',
            conditions: conditions.length > 0 ? conditions : ['General health concerns'],
        }
    } else {
        return {
            level: 'low',
            label: '🟢 Low — Routine Checkup Advised',
            text: 'Your symptoms appear mild. A routine checkup is recommended to stay on top of your health. Preventive care is always a good idea!',
            conditions: conditions.length > 0 ? conditions : ['Routine wellness check'],
        }
    }
}

const PHONE = '+919876543210'

export default function HealthAssessment() {
    const [step, setStep] = useState(0)
    const [selected, setSelected] = useState(new Set())

    const toggleOption = (id) => {
        setSelected(prev => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    const result = step === 3 ? getResult(selected) : null

    const restart = () => {
        setStep(0)
        setSelected(new Set())
    }

    const bookWhatsApp = () => {
        const msg = `Hi, I just completed the health assessment on your website. Result: ${result.label}. Conditions to discuss: ${result.conditions.join(', ')}. I'd like to book an appointment.`
        window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
    }

    return (
        <section className="health-assessment section" id="health-assessment">
            <div className="container">
                <h2 className="section-title">Quick Health Assessment</h2>
                <p className="section-subtitle">
                    Answer a few questions to understand your health needs and get personalized recommendations.
                </p>

                <div className="assessment-container">
                    <div className="assessment-card">
                        {/* Progress bar */}
                        <div className="assessment-progress">
                            {[0, 1, 2, 3].map(i => (
                                <div
                                    key={i}
                                    className={`progress-step ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`}
                                />
                            ))}
                        </div>

                        {step < 3 ? (
                            <>
                                <div className="assessment-step-label">{STEPS[step].subtitle}</div>
                                <h3>{STEPS[step].title}</h3>
                                <div className="assessment-options">
                                    {STEPS[step].options.map(opt => (
                                        <button
                                            key={opt.id}
                                            className={`assessment-option ${selected.has(opt.id) ? 'selected' : ''}`}
                                            onClick={() => toggleOption(opt.id)}
                                        >
                                            <span className="option-check">{selected.has(opt.id) ? '✓' : ''}</span>
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="assessment-nav">
                                    <button
                                        className="btn btn-outline btn-sm"
                                        onClick={() => setStep(s => s - 1)}
                                        disabled={step === 0}
                                        style={{ opacity: step === 0 ? 0.4 : 1 }}
                                    >
                                        ← Back
                                    </button>
                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => setStep(s => s + 1)}
                                    >
                                        {step === 2 ? 'See Results →' : 'Next →'}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="result-card">
                                <div className="assessment-step-label">Step 4 of 4 — Your Results</div>
                                <h3>Your Health Assessment</h3>
                                <div className={`urgency-badge ${result.level}`}>
                                    {result.label}
                                </div>
                                <div className="result-conditions">
                                    {result.conditions.map((c, i) => (
                                        <span className="condition-tag" key={i}>{c}</span>
                                    ))}
                                </div>
                                <p className="result-text">{result.text}</p>
                                <div className="result-actions">
                                    {result.level === 'urgent' ? (
                                        <>
                                            <button className="btn btn-whatsapp" onClick={bookWhatsApp}>💬 Book via WhatsApp</button>
                                            <a href="tel:+919876543210" className="btn btn-danger">📞 Call Now</a>
                                        </>
                                    ) : (
                                        <>
                                            <a href="#booking" className="btn btn-primary">📅 Book Appointment</a>
                                            <button className="btn btn-whatsapp" onClick={bookWhatsApp}>💬 WhatsApp</button>
                                        </>
                                    )}
                                    <button className="btn btn-outline btn-sm" onClick={restart}>↺ Retake</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
