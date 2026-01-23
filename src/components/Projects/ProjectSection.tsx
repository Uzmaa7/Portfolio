import Header from "../general/Header"
import ProjectCard from "./ProjectCard"


export default function ProjectSection() {
    return (
        <section id="projects">
            <Header title="Recent Projects" />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10
            overflow-hidden">
                <div data-aos="fade-right">
                    <ProjectCard
                        title="Cynthia Ugwu"
                        mediaPath="/videos/video1.mp4" // make sure this is in public/videos
                        description="A visually interactive, smooth-scrolling portfolio website showcasing the work of Cynthia Ugwu. This project features modern web animations using GSAP, smooth scrolling 
                    with Locomotive Scroll, and interactive mouse-following effects for enhanced user experience.."
                        isVideo={true} // autoplay video
                    />
                </div>

                <div data-aos="fade-left">
                    <ProjectCard
                        title="RxAI"
                        mediaPath="/videos/video2.mp4" // make sure this is in public/videos
                        description="RxAI is an intelligent medical question-answering system powered by Retrieval-Augmented Generation (RAG)"
                        isVideo={true} // autoplay video
                    />
                </div>

                <div data-aos="fade-right">
                    <ProjectCard
                        title="K72"
                        mediaPath="/videos/video3.mp4" // make sure this is in public/videos
                        description="A visually interactive, smooth-scrolling portfolio website showcasing the work of Cynthia Ugwu, 
                    a product and motion designer."
                        isVideo={true} // autoplay video
                    />
                </div>

                <div data-aos="fade-left" >
                    <ProjectCard
                        title="Image Editor"
                        mediaPath="/images/image2.png" // make sure this is in public/videos
                        description="A web-based image editor that allows users to apply multiple real-time filters to images, reset and 
                    download the edited image. Built with HTML, CSS, and Vanilla JavaScript"
                    // autoplay video
                    />
                </div>
            </div>


        </section>
    )
}