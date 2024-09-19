const AboutHero = () => {
    return (
        <div className="aboutHero flex flex-col justify-center items-center gap-1 font-body text-center pt-12 pb-32 bg-transparent px-8">
            <div className="text-7xl text-white font-extrabold pt-6 max-w-[700px] leading-tight aboutHeroText ">
                A Parking Solution Built for Success
            </div>
            <div className="mt-4 text-2xl text-white max-w-[600px]">Innovative tools to streamline your parking operations and scale with your business.</div>
            <div className="flex gap-6 tracking-normal font-heading py-12">
                <button className='px-4 py-2 border-2 border-[#F8D73A] bg-[#F8D73A] hover:bg-transparent transition-all text-black hover:text-[#F8D73A] font-extrabold rounded'>Get demo</button>
                <button className='px-4 py-2 border-2 border-[#F8D73A] bg-transparent hover:bg-[#F8D73A] transition-all text-[#F8D73A] hover:text-black font-extrabold rounded'>Contact us</button>
            </div>
        </div>
    )
}

export default AboutHero