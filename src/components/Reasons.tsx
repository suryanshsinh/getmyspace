import ReasonCard from "./ReasonCard"
import Why1 from '/why1.png'
import Why2 from '/why2.png'
import Why3 from '/why3.png'

const reasons:{reason:string; image:string;}[] = [
    {
        reason: "Real-time availability",
        image: Why1
    },
    {
        reason: "Automated ticketing",
        image: Why2
    },
    {
        reason: "Digital payments",
        image: Why3
    }
]

const ReasonCards = () => {
    return (
        <div className="flex flex-col py-20 px-20 gap-2 font-body">
            <div className="text-3xl text-white">Why choose our solutions?</div>
            <div className="h-1 w-16 bg-[#F8D73A] rounded-full"></div>
            <div className="text-4xl text-white font-semibold pt-6">Real-time availability, automated ticketing, and digital payments.</div>
            <div className="flex flex-col md:block md:columns-3 mt-16 gap-10">
                {reasons.map((reason, index) => (
                    <ReasonCard key={index} reason={reason.reason} image={reason.image} />
                ))}
            </div>
        </div>
    )
}

export default ReasonCards