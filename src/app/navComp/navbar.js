import Link from "next/link";
import style from "../style";


const Navbar = () => {
    return ( 
        <nav className="pt-12 w-full pb-[100px] flex justify-between">
            <div className={`${style.whiteColor} text-2xl`}>Ardit.</div>
            <ul className="flex">
                <li className={`${style.whiteColor} ${style.NavbarCompsMargin} ${style.HoverTextGreen}`}>
                    <Link href="/">Home</Link>
                </li>
                <li className={`${style.whiteColor} ${style.NavbarCompsMargin} ${style.HoverTextGreen}`}>
                    <Link href="/resume">Resume</Link>
                </li>
                {/* <li className={`${style.whiteColor} ${style.NavbarCompsMargin} ${style.HoverTextGreen}`}>
                    <Link href="">Work</Link>
                </li> */}
                <li className={`${style.whiteColor} ${style.NavbarCompsMargin} ${style.HoverTextGreen}`}>
                    <Link href="/contact">Contact</Link>
                </li>

            </ul>
        </nav>
     );
}
 
export default Navbar;