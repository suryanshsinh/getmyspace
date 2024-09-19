import { useState } from "react";

// Questions for parking lot booking web app
const questions:{question: string; answer: string;}[] = [
    {
        question: "How do I book a parking lot?",
        answer: "To book a parking lot, you need to sign up for an account. Once you have an account, you can search for parking lots and book them."
    },
    {
        question: "How do I cancel a booking?",
        answer: "To cancel a booking, go to your account and click on the booking you want to cancel. You will see an option to cancel the booking."
    },
    {
        question: "How do I change my booking?",
        answer: "To change a booking, go to your account and click on the booking you want to change. You will see an option to change the booking."
    },
    {
        question: "How do I pay for a booking?",
        answer: "You can pay for a booking using a credit card or debit card. We accept all major credit cards and debit cards."
    },
    {
        question: "How do I get a refund?",
        answer: "To get a refund, go to your account and click on the booking you want a refund for. You will see an option to request a refund."
    },
    {
        question: "How do I contact customer service?",
        answer: "You can contact customer service by emailing us at support@example.com"
    },
]

const FAQs = () => {
    const [selected, setSelected] = useState<number | null>(null);

    function select(i: number) {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    }
    
    return (
        <div className="flex flex-col py-20 px-20 gap-2 font-body">
            <div className="text-3xl text-white">FAQs</div>
            <div className="h-1 w-16 bg-[#F8D73A] rounded-full"></div>
            <div className="text-4xl text-white font-semibold pt-6">Frequently Asked Questions</div>
            <div className="flex flex-wrap mt-10 gap-3 w-full max-w-8xl mx-4 self-center select-none">
                <div className="flex flex-col min-w-[400px] flex-1 gap-3">
                    {questions.map((question, i) => {
                        if (i < questions.length / 2) return (
                        <div key={i} className="self-start cursor-pointer py-6 px-8 text-xl bg-[#1b1b1d] flex flex-col rounded-lg w-full" onClick={() => {select(i)}}>
                            <div className="flex font-semibold text-white">{question.question}</div>
                            <div className={"text-[#878792] opacity-0 h-auto max-h-0 overflow-hidden " + (selected === i && "opacity-100 mt-3 max-h-48")} style={{transition: "all 0.3s ease-in-out"}}>{question.answer}</div>
                        </div>
                    )})}
                </div>
                <div className="flex flex-col min-w-[400px] flex-1 gap-3">
                    {questions.map((question, i) => {
                        if (i >= questions.length / 2) return (
                        <div key={i} className="self-start cursor-pointer py-6 px-8 text-xl bg-[#1b1b1d] flex flex-col rounded-lg w-full" onClick={() => {select(i)}}>
                            <div className="flex font-semibold text-white">{question.question}</div>
                            <div className={"text-[#878792] opacity-0 h-auto max-h-0 overflow-hidden " + (selected === i && "opacity-100 mt-3 max-h-48")} style={{transition: "all 0.3s ease-in-out"}}>{question.answer}</div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default FAQs