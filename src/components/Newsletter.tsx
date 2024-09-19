import { useState } from 'react'
import '../assets/newsletter.css'

const Newsletter = () => {
    const [connectHover, setConnectHover] = useState(false)

    return (
        <div className="flex flex-col mt-20 mb-40 mx-auto py-14 font-body justify-center gap-8 items-center text-white rounded-3xl text-center max-w-[900px] bg-[#2C2C2C]">
            <div>
                <div className="font-semibold text-4xl relative font-heading heading inline">Subscribe to Newsletter</div>
            </div>
            <div className="text-lg max-w-[650px]">Lorem ipsum dolor sit amet consectetur. Libero consequat odio vel hac enim enim tortor. Eget turpis purus odio morbi dolor consequat. Cras ultrices.</div>
            <div className='flex border-2 border-[#797979] rounded-full p-[1px] w-full max-w-[500px]'>
                <input className='flex-1 bg-transparent py-2 px-5 outline-none' type="text" placeholder='Enter your email address'/>
                <button className={'rounded-full py-2 px-5 text-black bg-[#F8D73A] h-full font-heading font-bold ' + (connectHover && 'animate-bg')} onMouseEnter={() => {setConnectHover(true)}} onMouseLeave={() => {setConnectHover(false)}}>Connect now</button>
            </div>
        </div>
    )
}

export default Newsletter