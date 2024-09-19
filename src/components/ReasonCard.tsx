const ReasonCard = ({reason, image}: {reason:string;image:string;}) => {
    return (
        <div className="flex justify-center gap-10 px-20 items-center md:gap-0 md:flex-col md:justify-between pb-10 w-full h-[330px] rounded-2xl bg-[#6C6C6C59]">
            <img src={image} alt="" className="md:mx-auto my-auto pt-10" />
            <div className="text-2xl text-white font-semibold text-center pt-10">{reason}</div>
        </div>
    )
}

export default ReasonCard