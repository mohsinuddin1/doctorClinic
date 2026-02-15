const DISEASES = [
    'Diabetes Management', 'Hypertension', 'Asthma & Allergies', 'Thyroid Disorders',
    'Skin Conditions', 'Joint & Back Pain', 'Fever & Infections', 'Digestive Issues',
    'Migraine & Headaches', 'Respiratory Infections', 'Urinary Tract Infections',
    'Ear, Nose & Throat', 'Pediatric Care', 'Women\'s Health', 'Chronic Disease Care',
    'Wound Care', 'Nutritional Guidance', 'Vaccinations',
]

export default function DiseaseTicker() {
    // Duplicate the list for seamless infinite scroll
    const items = [...DISEASES, ...DISEASES]

    return (
        <div className="disease-ticker">
            <div className="ticker-track">
                {items.map((disease, i) => (
                    <span className="ticker-item" key={i}>
                        <span className="ticker-dot" />
                        {disease}
                    </span>
                ))}
            </div>
        </div>
    )
}
