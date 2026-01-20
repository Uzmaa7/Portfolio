import Logo from "./Logo";
import Link from "next/link";
import LinkButton from "../LinkButton";
import { LuDownload } from "react-icons/lu";

const navLinks = [
    {url: "#home", label:"Home"},
    {url: "#services", label:"Services"},
    {url: "#resume", label:"Resume"},
    {url: "#projects", label:"Projects"},
    {url: "#skills", label:"Skills"},
    {url: "#testimonials", label:"Testimonials"},
    {url: "#contact", label:"Contact"},
]
function Navbar(){
    return(
        <nav className="h-18 ">
            <div className="h-full w-[90%] flex items-center justify-between mx-auto">
            {/* logo */}
                <Logo/>

            {/* nav-links */}
                <ul className="hidden lg:flex space-x-10">
                    {navLinks.map((link) => {
                        return(
                            <li key={link.url}>
                                <Link className="text-gray-200 hover:text-cyan-300
                                font-medium transition-colors duration-300" href={link.url}>{link.label}</Link>
                            </li>
                        )
                    })}
                </ul>

            {/* button */}
                <LinkButton href="/documents/cv.pdf" text="Download CV" download 
                    icon={LuDownload} iconPosition="left" 
                />
            </div>
        </nav>
    )
}

export default Navbar;