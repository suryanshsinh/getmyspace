const Stats = () => {
    return (
        <div className="flex px-12 mx-8 py-8 bg-[#2F2F2F] text-white rounded-lg justify-between items-center gap-8 flex-col md:flex-row mb-24">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-[701px]" style={{lineHeight: 1.25}}>Smart Parking Solutions for Enhanced Operational Efficiency</div>
            <div className="flex text-center gap-10 text-md lg:text-lg font-heading">
                <div className="flex flex-col sm:flex-row md:flex-col gap-2 lg:max-w-[180px] max-w-[300px]">
                    <div className="text-5xl lg:text-7xl tracking-tight font-bold">92<span className="text-[#F8D73A]">%</span></div>
                    <div>Accurate data based on our system</div>
                </div>
                <div className="w-[2px] h-auto my-5 rounded bg-white"></div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-2 lg:max-w-[180px] max-w-[300px]">
                    <div className="text-5xl lg:text-7xl tracking-tight font-bold">10<span className="text-[#F8D73A]">+</span></div>
                    <div>Custom solutions delivered</div>
                </div>
            </div>
        </div>
    )
}

export default Stats