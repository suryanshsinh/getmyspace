import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-black text-white p-10">
            <div className="max-w-7xl px-10 mx-auto flex items-center justify-center">
                <div className="flex-1">
                    <div className="flex flex-col gap-2 max-w-96 text-center">
                        <Logo />
                        <p className="text-md text-[#999]">Digitalize your parking system now.</p>
                    </div>
                </div>
                <div className="flex justify-between flex-1">
                    <div className="flex flex-col gap-1">
                        <span className="font-semibold mb-1 text-xl">Links</span>
                        <a href="#" className="text-[#999] hover:text-white">
                            Solutions
                        </a>
                        <a href="#" className="text-[#999] hover:text-white">
                            About Us
                        </a>
                        <a href="#" className="text-[#999] hover:text-white">
                            3d demo
                        </a>
                        <a href="#" className="text-[#999] hover:text-white">
                            Contact Us
                        </a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-semibold mb-1 text-xl">Legal</span>
                        <a href="#" className="text-[#999] hover:text-white">
                            Terms of services
                        </a>
                        <a href="#" className="text-[#999] hover:text-white">
                            Privacy policy
                        </a>
                        <a href="#" className="text-[#999] hover:text-white">
                            Licenses
                        </a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-semibold mb-1 text-xl">More</span>
                        <a href="#" className="text-[#999] hover:text-white">
                            Newsletter
                        </a>
                        <a href="#" className="text-[#999] hover:text-white">
                            LinkedIn
                        </a>
                        <a href="#" className="text-[#999] hover:text-white">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
