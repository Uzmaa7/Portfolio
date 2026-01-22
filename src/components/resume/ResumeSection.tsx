import { LuAward, LuBookOpen, LuGraduationCap } from "react-icons/lu"
import Header from "../general/Header"
import ResumeCard from "./ResumeCard"


export default function ResumeSection(){
    return(
        <section id="resume" className="my-12">

            <div className="w-[90%] sm:w-[70%] mx-auto gap-10">

                {/* education Section */}
                <div>
                    <Header title="My Education" as="h2"/>
                    <div className="space-y-6">
                        <ResumeCard icon= {LuGraduationCap} role="Computer Science Degree"
                        description="Bachelor of Technology in Computer Science and Engineering |
                        Bennett University | Focused on algorithms, data structures,
                        software engineering principles, and web technologies." date="sep 2022 - May 2026"
                        />

                         <ResumeCard icon= {LuBookOpen} role="Relevant Coursework"
                        description="Data Structures & Algorithms, Object-Oriented Programming, 
                        Database Management Systems, Operating Systems, Computer Networks, 
                        Web Development, Generative AI." 
                        />


                        <ResumeCard icon= {LuAward} role="Achievements"
                        description="Solved 900+ DSA problems across platforms like LeetCode, Codeforces, and GeeksforGeeks |
                        Qualified Flipkart Grid 6.0 (2024) coding round.."
                        />
                    </div>
                </div>

            </div>

        </section>
    )
}