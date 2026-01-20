import Link from "next/link";
import { LuCodeXml } from "react-icons/lu";

function Logo(){
    return(
        <Link  className="flex space-x-2 items-center" href="/">
            <div className="w-10 h-10 bg-gray-200 rounded-full grid
            place-items-center">
               <LuCodeXml/>
            </div>

            <p className="text-gray-200 font-bold md:text-2xl hidden sm:block">Webdev</p>
        </Link>
    )
}
export default Logo;