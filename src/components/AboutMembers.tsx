import Member1 from '/member.png'

const AboutMembers = () => {
    const members:{name:string, role:string, image:string}[] = [
        {name: 'Utsav Malaviya', role: 'CEO', image: Member1},
        {name: 'Suryanshsinh Sisodiya', role: 'Web Developer', image: Member1},
        {name: 'Aryan Khanwani', role: 'UI/UX Designer', image: Member1},
        {name: 'Amit Dinnimani', role: 'Makreting Officer', image: Member1},
    ]

    return (
        <div className="flex flex-col py-20 px-20 gap-2 font-body mx-auto max-w-[1200px]">
            <div className="text-3xl text-white">Core Team</div>
            <div className="h-1 w-16 bg-[#F8D73A] rounded-full"></div>
            <div className="text-4xl text-white font-semibold pt-6">Efficient, secure, and tailored parking solutions.</div>
            <div className="gap-6 columns-1 sm:columns-2 md:columns-4 mt-8">
                {
                    members.map((member, index) => (
                        <div key={index} className="flex flex-col justify-end h-72 rounded-xl mb-6 relative p-4" style={{backgroundImage: `url(${member.image})`, backgroundSize: 'cover', backgroundPosition: '45% 50%'}}>
                            <div className="absolute inset-0 top-[60%] rounded-b-xl bg-gradient-to-b from-transparent to-[#000000BB]"></div>
                            <div className='text-white text-lg z-[1] font-semibold drop-shadow'>{member.name}</div>
                            <div className='text-white text-md z-[1]'>{member.role}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutMembers