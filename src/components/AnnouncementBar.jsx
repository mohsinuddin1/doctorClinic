import { useState } from 'react'

export default function AnnouncementBar() {
    const [visible, setVisible] = useState(true)

    if (!visible) return null

    return (
        <div className="announcement-bar">
            <span>✨ Now Accepting Walk-ins! • Open Mon–Sat 9:00 AM – 8:00 PM • Call +91 98765 43210</span>
            <button className="close-btn" onClick={() => setVisible(false)} aria-label="Close">✕</button>
        </div>
    )
}
