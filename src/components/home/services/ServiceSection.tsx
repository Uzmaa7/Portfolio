
import Header from "@/components/general/Header"
import ServiceCard from "./ServiceCard"

export default function ServiceSection() {
    return (
        <section id="services">
            {/* header */}
            <Header title="What I Offer" />

            <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2
            xl:grid-cols-4 gap-20">

                <div data-aos="fade-right">
                    <ServiceCard
                        name="UI and UX"
                        icon="/images/s1.png"
                        description="Designing intuitive interfaces and seamless user experience" />
                </div>

                <div data-aos="fade-right" data-aos-delay="100">
                    <ServiceCard
                        name="Development"
                        icon="/images/s2.png"
                        description="Frontend development with modern frameworks and best practices" />
                </div>

                <div data-aos="fade-right" data-aos-delay="200">
                    <ServiceCard
                        name="Problem Solving"
                        icon="/images/s3.png"
                        description="Strong foundation in data structures and algorithms." />
                </div>

                <div data-aos="fade-right" data-aos-delay="300">
                    <ServiceCard
                        name="Learning & Adaptability"
                        icon="/images/s4.png"
                        description="Quick learner who adapts to new technologies and continuously improves through practice and projects." />
                </div>
            </div>

        </section>
    )
}