import Logo from "./Logo"

const AboutHero = () => {
    return (
        <div className="aboutHero flex flex-col justify-center items-center mt-[90px] gap-1 font-body text-center pt-36 pb-56 bg-transparent px-8">
            <div className="text-xl text-white">About us</div>
            <div className="h-1 w-20 bg-[#F8D73A] rounded-full"></div>
            <div className="text-4xl text-white font-semibold pt-6 max-w-[700px] leading-tight aboutHeroText">
                At <Logo />, We Empower Businesses with Smarter, Scalable Parking Solutions
            </div>
            <div className="mt-4 text-md text-[#aaa] max-w-[500px]">We provide advanced parking solutions that boost efficiency, cut costs, and enhance customer experience. Our systems scale with your business, delivering reliable results every time.</div>
        </div>
    )
}

export default AboutHero