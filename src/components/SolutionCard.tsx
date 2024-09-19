const SolutionCard = ({title, description, image, rtl}: {title: string; description: string; image: string; rtl: boolean;}) => {
    return (
        <div className={"flex flex-row gap-10 items-center justify-between py-20 md:px-10 " + (rtl && "flex-row-reverse")}>
            <div className="flex-[5]">
                <div className="font-bold text-white text-5xl">{title}</div>
                <div className="text-[#8B8B8B] text-lg pt-4">{description}</div>
                <button className='px-4 py-2 mt-4 border-2 max-w-28 border-[#F8D73A] bg-[#F8D73A] hover:bg-transparent font-heading transition-all text-black hover:text-[#F8D73A] font-extrabold rounded'>Get demo</button>
            </div>
            <div className="flex-[5] flex">
                <img className="object-contain" src={image} alt="" />
            </div>
        </div>
    )
}

export default SolutionCard