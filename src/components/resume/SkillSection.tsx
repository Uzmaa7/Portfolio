import { DiJavascript, DiReact,DiHtml5, DiCss3, DiJava, DiGit, DiGithubBadge } from "react-icons/di"
import Header from "../general/Header"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiAnalogue, SiCplusplus, SiHuggingface, SiLangchain, SiTypescript } from "react-icons/si"

const skills = [
    {
    name: "HTML5",
    icon: <DiHtml5/>,
    skillshortform: "HTML"
},
{
    name: "CSS3",
    icon: <DiCss3/>,
    skillshortform: "CSS"
},
    {
        name: "JavaScript",
        icon: <DiJavascript/>,
        skillshortform : "JS"
    },
    {
        name: "React Js",
        icon: <DiReact/>,
        skillshortform :"React"
    },
    {
        name: "Next JS",
        icon: <RiNextjsFill/>,
        skillshortform : "Next"
    },
    {
        name: "TypeScript",
        icon: <SiTypescript/>,
        skillshortform : "TS"
    },
    {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill/>,
        skillshortform : "TCSS"
    },
{
    name: "C++",
    icon: <SiCplusplus/>,
    skillshortform: "CPP"
},
{
    name: "Java",
    icon: <DiJava/>,
    skillshortform: "Java"
},
       {
    name: "Git",
    icon: <DiGit/>,
    skillshortform: "Git"
},


{
    name: "Hugging Face",
    icon: <SiHuggingface/>,
    skillshortform: "HF"
},
{
    name: "LangChain",
    icon: <SiLangchain/>,
    skillshortform: "LC"
},
{
    name: "GitHub",
    icon: <DiGithubBadge/>,
    skillshortform: "GitH"
},
{
    name: "RAG",
    icon: <SiAnalogue/>, // Ya aap koi dusra relevant AI icon use kar sakte hain
    skillshortform: "RAG"
}


]
export default function SkillSection(){
    return(
        <section id="skills" className="py-16">

            <Header title="My Skills"/>

            <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, index) => {
                    return(
                        <div key={index} className="bg-slate-900 text-center w-30
                        h-40 rounded-3xl flex flex-col items-center justify-center shadow-lg
                        transition:hover:scale-110">

                            <div className="text-5xl text-gray-300  my-4">
                                {skill.icon}
                            </div>

                            {/* <p className="text-2xl font-semibold my-4 text-gray-200">
                                {skill.skillshortform}
                            </p> */}

                            <p className="text-indigo-500 font-semibold">
                                {skill.name}
                            </p>

                        </div>
                    )
                })}
            </div>

        </section>
    )
}