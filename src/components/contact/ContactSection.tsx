import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa"
import Link from "next/link";

const contactInfo = [
    {
        icon:<FaEnvelope className="w-6 h-6"/>,
        title: "Email",
        value: "uz9971khan@gmail.com",
        link: "uz9971khan@gmail.com"
    },
    {
        icon:<FaPhone className="w-6 h-6"/>,
        title: "Phone",
        value: "+91 832 584 987",
        link: "tel:+1234567890"
    },
    {
        icon:<FaMapMarkedAlt className="w-6 h-6"/>,
        title: "Location",
        value: "Remote . Global",
        link: "#"
    }
];

export default function ContactSection() {
    return (

        <section id="contact" className="py-16 lg:py-30">
            <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1
            lg:grid-cols-2 gap-6 lg:gap-12">

                <div>
                    <h2 className="py-3 text-3xl md:text-4xl  font-bold tracking-wide text-transparent 
                    bg-clip-text bg-linear-to-r from-indigo-500  to-gray-300 ">Ready to Collaborate</h2>

                    <p className="text-gray-400 mb:10 text-base lg:text-lg leading-relaxed">
                        I&apos;m currently available for internship, full-time oppportunities
                        or freelance work. Whether you have a project in mind or just 
                        want to connect, feel free to reach out.
                    </p>

                    <div className="space-y-5 mb:12">
                        {contactInfo.map((item, index) => {
                            return(
                                <Link href={item.link} key={index}
                                className="group flex items-center gap-4 px-2 py-3
                                transition-colors hover:bg-white/5 rounded-lg"
                                >

                                    <div className="h-15 w-15 rounded-full bg-white/5
                                    text-white grid place-items-center transition-transform group-hover:scale-105">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h4 className="text-md font-medium text-white">{item.title}</h4>
                                        <p className="text-md text-gray-400">{item.value}</p>
                                    </div>
                                
                                </Link>

                            )
                        })}

                    </div>

                </div>

            </div>
        </section>
    )
}