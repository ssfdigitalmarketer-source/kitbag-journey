const CricketAcademy = () => {
    return (
        <div>
            <section className="">
                <div className="relative w-full">
                    <img
                        src="/assets/services/cricket_academy_cover.webp"
                        alt="cricket academy"
                        className="w-full block brightness-50"
                        loading="lazy"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                        <h1 className="text-yellow-400 text-4xl font-black md:text-6xl text-center leading-tight">
                            CRICKET ACADEMY
                        </h1>
                    </div>
                </div>

                <div className="py-20 space-y-8">

                    <div className="text-xs lg:text-lg font-[Poppins] px-5 lg:w-[70%] mx-auto space-y-10">
                        <p className="">We are on a mission to produce confident, skilled, and match-ready cricketers who can perform under any condition. Cricket is not just a sport for us — it's a passion, a discipline, and a way of life. We believe every player has raw potential waiting to be unlocked with the right guidance, environment, and tools. Our academy brings together world-class coaches, cutting-edge technology, and a professional training setup to give you an experience like no other. From your very first session to your biggest match day, we are with you every step of the way. Whether you dream of playing local tournaments or making it to the national stage — this is where your journey begins. Join a thriving community of cricketers who are hungry, driven, and built for success.</p>

                        <h2 className="text-2xl lg:text-3xl font-semibold text-yellow-400 text-center uppercase">What We Offer</h2>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">One-on-One Coaching</h3>
                            <ul className="space-y-2 list-disc ml-5">
                                <li>Personalized coaching designed around your strengths and improvement areas.</li>
                                <li>Customized training plans based on your skill level</li>
                                <li>Regular feedback, progress tracking & goal setting</li>
                                <li>Exclusive sessions with internationally reputed cricketers</li>
                                <li>Direct insights, tips & advanced game understanding</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Technology Through Application</h3>
                            <ul className="space-y-2 list-disc ml-5">
                                <li>Improve faster with data-backed performance insights.</li>
                                <li>HD video analysis for batting, bowling & fielding</li>
                                <li>Data-driven drills and performance tracking</li>
                                <li>Structured, smart improvement plans</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Expert Coaches</h3>
                            <ul className="space-y-2 list-disc ml-5">
                                <li>Train with experienced professionals dedicated to your growth.</li>
                                <li>Coaches with professional cricket backgrounds</li>
                                <li>Specialized training in batting, bowling, fielding, fitness & mental game</li>
                                <li>Continuous mentorship for match readiness</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Live Sessions</h3>
                            <ul className="space-y-2 list-disc ml-5">
                                <li>Train anytime, anywhere with real-time interaction.</li>
                                <li>Live one-on-one & group sessions</li>
                                <li>Weekly masterclasses on strategy & game awareness</li>
                                <li>Interactive sessions with international cricketers</li>
                                <li>Learn directly, ask questions & gain match insights</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Professional-grade Facility</h3>
                            <p>Train in a professional-grade facility designed for serious cricketers.</p>
                            <ul className="space-y-2 list-disc ml-5">
                                <li>Pro-level pitches, bowling machines, nets & high-quality equipment</li>
                                <li>Dedicated strength & conditioning zone, rest areas & player lounge</li>
                            </ul>
                        </div>


                    </div>

                </div>
            </section>
        </div>
    )
}

export default CricketAcademy;
