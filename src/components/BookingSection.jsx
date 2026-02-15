import { useState, useMemo } from 'react'

const PHONE = '+919876543210'

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

const MORNING_SLOTS = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM']
const AFTERNOON_SLOTS = ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM']
const EVENING_SLOTS = ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM']

// Format YYYY-MM-DD for input min/max
function toISODate(d) {
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${y}-${m}-${day}`
}

export default function BookingSection() {
    const [name, setName] = useState('')
    const [dateValue, setDateValue] = useState('') // YYYY-MM-DD string
    const [selectedTime, setSelectedTime] = useState('')
    const [consultType, setConsultType] = useState('clinic')
    const [dateError, setDateError] = useState('')

    const today = useMemo(() => new Date(), [])
    const minDate = toISODate(today)
    const maxDate = useMemo(() => {
        const d = new Date(today)
        d.setDate(d.getDate() + 90)
        return toISODate(d)
    }, [today])

    const handleDateChange = (e) => {
        const val = e.target.value
        setDateValue(val)
        setDateError('')

        if (val) {
            const [y, m, d] = val.split('-').map(Number)
            const picked = new Date(y, m - 1, d)
            if (picked.getDay() === 0) {
                setDateError('Sorry, the clinic is closed on Sundays. Please pick another day.')
            }
        }
    }

    const selectedDate = useMemo(() => {
        if (!dateValue) return null
        const [y, m, d] = dateValue.split('-').map(Number)
        return new Date(y, m - 1, d)
    }, [dateValue])

    const formatDate = (d) => {
        return `${WEEKDAYS[d.getDay()]}, ${d.getDate()} ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`
    }

    const handleBook = () => {
        if (!name || !selectedDate || !selectedTime) {
            alert('Please fill in your name, select a date and time slot.')
            return
        }
        if (selectedDate.getDay() === 0) {
            alert('The clinic is closed on Sundays. Please pick another day.')
            return
        }

        const dateStr = formatDate(selectedDate)
        const typeLabel = consultType === 'clinic' ? 'In-Clinic Visit' : 'Phone Consultation'
        const msg = `Hi, I'd like to book an appointment.\n\n👤 Name: ${name}\n📅 Date: ${dateStr}\n🕐 Time: ${selectedTime}\n🏥 Type: ${typeLabel}\n\nPlease confirm my booking. Thank you!`

        window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
    }

    return (
        <section className="booking section" id="booking">
            <div className="container">
                <h2 className="section-title">Book Your Appointment</h2>
                <p className="section-subtitle">
                    Pick your preferred date and time — we'll confirm your slot via WhatsApp.
                </p>

                <div className="booking-container">
                    <div className="booking-card">
                        {/* Name */}
                        <div className="booking-field">
                            <label htmlFor="patient-name">👤 Your Name</label>
                            <input
                                id="patient-name"
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        {/* Date Picker */}
                        <div className="booking-field">
                            <label htmlFor="booking-date">📅 Select Date</label>
                            <input
                                id="booking-date"
                                type="date"
                                value={dateValue}
                                onChange={handleDateChange}
                                min={minDate}
                                max={maxDate}
                            />
                            {selectedDate && !dateError && (
                                <p style={{ marginTop: 10, fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>
                                    ✓ {formatDate(selectedDate)}
                                </p>
                            )}
                            {dateError && (
                                <p style={{ marginTop: 10, fontSize: '0.85rem', color: 'var(--red)', fontWeight: 600 }}>
                                    ⚠ {dateError}
                                </p>
                            )}
                        </div>

                        {/* Time Slots */}
                        <div className="booking-field">
                            <label>🕐 Select Time Slot</label>

                            <div className="time-label">☀️ Morning</div>
                            <div className="time-slots">
                                {MORNING_SLOTS.map(t => (
                                    <button
                                        key={t}
                                        className={`time-slot ${selectedTime === t ? 'selected' : ''}`}
                                        onClick={() => setSelectedTime(t)}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>

                            <div className="time-label">🌤️ Afternoon</div>
                            <div className="time-slots">
                                {AFTERNOON_SLOTS.map(t => (
                                    <button
                                        key={t}
                                        className={`time-slot ${selectedTime === t ? 'selected' : ''}`}
                                        onClick={() => setSelectedTime(t)}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>

                            <div className="time-label">🌙 Evening</div>
                            <div className="time-slots">
                                {EVENING_SLOTS.map(t => (
                                    <button
                                        key={t}
                                        className={`time-slot ${selectedTime === t ? 'selected' : ''}`}
                                        onClick={() => setSelectedTime(t)}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Consultation Type */}
                        <div className="booking-field">
                            <label>🩺 Consultation Type</label>
                            <div className="consult-type-btns">
                                <button
                                    className={`consult-type-btn ${consultType === 'clinic' ? 'selected' : ''}`}
                                    onClick={() => setConsultType('clinic')}
                                >
                                    🏥 In-Clinic Visit
                                </button>
                                <button
                                    className={`consult-type-btn ${consultType === 'call' ? 'selected' : ''}`}
                                    onClick={() => setConsultType('call')}
                                >
                                    📞 Phone Consultation
                                </button>
                            </div>
                        </div>

                        {/* Book Button */}
                        <button className="btn btn-whatsapp btn-lg" onClick={handleBook} style={{ width: '100%', justifyContent: 'center' }}>
                            💬 Book via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
