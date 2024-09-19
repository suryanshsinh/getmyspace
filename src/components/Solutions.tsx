import Solution from "/solution.png"

import SolutionCard from "./SolutionCard"

const solutions:{title: string; description: string; image: string}[] = [
    {
        title: "Smart QR Based Solution",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repudiandae ad sapiente rerum laborum exercitationem ipsa, est incidunt consequatur, veritatis voluptatibus officia expedita odit quidem facilis harum aut molestiae accusamus?",
        image: Solution,
    },
    {
        title: "Smart QR Based Solution",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repudiandae ad sapiente rerum laborum exercitationem ipsa, est incidunt consequatur, veritatis voluptatibus officia expedita odit quidem facilis harum aut molestiae accusamus?",
        image: Solution,
    },
    {
        title: "Smart QR Based Solution",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repudiandae ad sapiente rerum laborum exercitationem ipsa, est incidunt consequatur, veritatis voluptatibus officia expedita odit quidem facilis harum aut molestiae accusamus?",
        image: Solution,
    },
]

const Solutions = () => {
    return (
        <div className="w-full bg-[#2F2F2F]">
            <div className="flex flex-col bg-[#2F2F2F] py-20 px-20 gap-2 font-body max-w-[1200px] mx-auto" id="solutions">
                <div className="text-3xl text-white">Our Solutions</div>
                <div className="h-1 w-16 bg-[#F8D73A] rounded-full"></div>
                <div className="text-4xl text-white font-semibold pt-6">Efficient, secure, and tailored parking solutions.</div>
                {solutions.map((solution, index) => <SolutionCard key={index} title={solution.title} description={solution.description} image={solution.image} rtl={index % 2 === 0} />)}
            </div>
        </div>
    )
}

export default Solutions