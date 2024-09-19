import { useState } from 'react';
import '../assets/navbar.css'
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='fixed top-0 bg-[#11111199] backdrop-blur-2xl flex justify-between items-center lg:px-20 px-8 py-5 font-heading shadow-lg shadow-[rgba(255,255,255,0.10)] w-full z-10'>
            <Logo />
            <ul className="md:flex hidden lg:flex-2">
                <Link to="/"><li className={"text-white cursor-pointer rounded-md font-semibold px-4 py-3 transition-all " + (hovered && "text-[#888] ") + "hover:text-white"} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}><span className='flex gap-1 items-end navlink relative'>Home</span></li></Link>
                <Link to="/solutions"><li className={"text-white cursor-pointer rounded-md font-semibold px-4 py-3 transition-all " + (hovered && "text-[#888] ") + "hover:text-white"} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}><span className='flex gap-1 items-end navlink relative'>Solutions</span></li></Link>
                <Link to="/about"><li className={"text-white cursor-pointer rounded-md font-semibold px-4 py-3 transition-all " + (hovered && "text-[#888] ") + "hover:text-white"} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}><span className='flex gap-1 items-end navlink relative'>About Us</span></li></Link>
                <Link to="/contact"><li className={"text-white cursor-pointer rounded-md font-semibold px-4 py-3 transition-all " + (hovered && "text-[#888] ") + "hover:text-white"} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}><span className='flex gap-1 items-end navlink relative'>Contact Us</span></li></Link>
            </ul>
            <div className='md:flex lg:flex-1 hidden justify-end'>
            <button className='px-4 py-2 border-2 border-[#F8D73A] bg-[#F8D73A] hover:bg-transparent transition-all text-black hover:text-[#F8D73A] font-extrabold rounded'>Get demo</button>
            </div>
        </div>
    )
}

export default Navbar;
