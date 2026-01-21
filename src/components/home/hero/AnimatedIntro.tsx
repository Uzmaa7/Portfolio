import Typewriter from "typewriter-effect"

export default function AnimatedIntro(){
    return(
        <div className="text-lg sm:text-2xl h-30 px-8 text-center font-medium text-gray-400">
            Hi, I&apos;m Uzma - A passionate
            <span className="font-bold text-indigo-400">
           <Typewriter options={{
                strings: [
                    "Frontend Developer",
                    "React Developer",
                    "Tech Enthusiast"
                ],
                autoStart:true,
                loop:true,
                delay:75,
                deleteSpeed:50,
                wrapperClassName:"inline-block py-6"
           }}/>
           </span>
        </div>
    )
}