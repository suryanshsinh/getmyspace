import HeroImage from '/hero.png';

const Hero = () => {
    return (
        <div className="flex justify-evenly items-center gap-10 py-10 mt-[90px]">
            <div className="flex max-w-lg gap-5 flex-col text-white tracking-normal font-body">
                <div className="text-5xl font-semibold leading-tight">The solution to your <br/> <span className="font-extrabold text-[#F8D73A]">PARKING PROBLEMS.</span></div>
                <div className='text-lg leading-normal'>Find secure, convenient parking anytime, anywhere.<br/>Whether it's for your home, office, or public space, we've got you covered with smart, reliable solutions.</div>
                <div></div>
                <div className="flex gap-6 tracking-normal font-heading">
                    <button className='px-4 py-2 border-2 border-[#F8D73A] bg-[#F8D73A] hover:bg-transparent transition-all text-black hover:text-[#F8D73A] font-extrabold rounded'>Get demo</button>
                    <button className='px-4 py-2 border-2 border-[#F8D73A] bg-transparent hover:bg-[#F8D73A] transition-all text-[#F8D73A] hover:text-black font-extrabold rounded'>Contact us</button>
                </div>
            </div>
            <img src={HeroImage} className='hidden md:block rounded-lg object-cover w-[400px] shadow-md shadow-[#222]' />
        </div>
    )
}

export default Hero