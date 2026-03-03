

const LegalConsultancy = () => {
    return (
        <div>
            <section className="">
                <div className="relative w-full">
                    <img
                        src="/assets/services/legal_consultancy_cover.webp"
                        alt="legal consultancy"
                        className="w-full block"
                        loading="lazy"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                        <h1 className="text-yellow-400 text-4xl font-black md:text-6xl text-center leading-tight">
                            LEGAL CONSULTANCY
                        </h1>
                    </div>
                </div>
                {/* <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769065678/client-was-listening-to-a-lawyer-advising-on-an-em-2026-01-07-01-02-00-utc_1_xoz2iw.jpg" alt="social media and pr" className="w-full" /> */}
                <div className="py-20 space-y-8">
                    {/* <h1 className="text-4xl text-yellow-500 text-center">LEGAL CONSULTANCY</h1> */}
                    <div className="text-xs lg:text-lg  px-5 lg:w-[70%] mx-auto space-y-10">
                        <p className="">Protection, fairness and compliance — the pillars of a secure athletic career.</p>
                        <p className="">Our specialized sports legal experts provide complete assistance in:</p>
                        {/* <h2 className="text-3xl font-oswald text-yellow-500 text-center">WHAT WE MANAGE</h2> */}
                        <ul className="space-y-2 list-disc">
                            <li>Contract drafting, negotiations & reviews.</li>
                            <li>Financial governance & earnings protection.</li>
                            <li>Sponsorship and endorsement audits</li>
                            <li>Media rights & licensing guidance</li>
                            <li>Dispute resolution & legal representation.</li>
                            <li>We ensure all agreements honor the athlete’s rights, image, and future value.</li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default LegalConsultancy;
