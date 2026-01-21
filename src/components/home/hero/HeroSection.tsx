"use client"
import Image from "next/image"

import AnimatedIntro from "./AnimatedIntro"


export default function HeroSection(){
    return(
        <section id="home" className="h-screen relative flex justify-center items-center
        overflow-hidden flex-col ">
            <div className="absolute z-10 flex flex-col items-center">
                {/* glowing img */}
                <div className="w-37.5 h-37.5 relative">

                    <div className="absolute inset-0 rounded-full bg-linear-to-r
                    from-blue-500 to-purple-600 blur-lg animate-pulse
                    opacity-50"></div>

                    <Image src="/images/image1.png" alt="image" className="object-cover object-top rounded-full" fill/>
                    
                </div>

                {/* Text */}
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-6
                tracking-wide text-transparent bg-clip-text bg-linear-to-r
                from-indigo-500 to-gray-300">Hi, I&apos;m a Web Developer</h1>

                {/* Animated Intro */}
                <AnimatedIntro/>
            </div>

        </section>
    )
}