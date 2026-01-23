"use client"


import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


export default function ScrollToTop() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const toggleV = () => {
            if (window.scrollY > 300) {
                setShowTop(true);
            }
            else {
                setShowTop(false);
            }
        }

        window.addEventListener("scroll", toggleV);

        return () => window.removeEventListener("scroll", toggleV);
    }, [])

    const scrollUP = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return (
        <>
            {showTop && (<button onClick={scrollUP} className="fixed bottom-4 right-4 w-12 h-12 rounded-full text-white bg-slate-800 cursor-pointer grid  place-items-center ">
                <FaArrowUp />
            </button>)}
        </>

    )
}