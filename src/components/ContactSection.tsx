import { MapPin, Phone, Mail } from "lucide-react"

const ContactSection = () => {
    return (
        <div className="flex justify-center gap-4 flex-wrap px-8 mb-44 font-body">
            <div className="flex-1 flex flex-col gap-6 max-w-[500px] min-w-96 h-96">
                <div className="text-4xl font-semibold text-white">Let's talk</div>
                <div className="text-xl text-white">Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.</div>
                <div className="flex text-xl items-center text-white gap-6"><MapPin size={48} color="#F8D73A" /> 1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.</div>
                <div className="flex text-xl items-center text-white gap-6"><Phone size={36} color="#F8D73A" /> +91 92652 70094</div>
                <div className="flex text-xl items-center text-white gap-6"><Mail size={36} color="#F8D73A" /> queries@getmyspace.io</div>
            </div>
        </div>
    )
}

export default ContactSection