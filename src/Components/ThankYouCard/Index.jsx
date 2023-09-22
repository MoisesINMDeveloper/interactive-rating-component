import { useContext } from 'react';
import { SurveyContext } from "../SurveyCard/SurveyContext"
import PhoneImg from "/assets/illustration-thank-you.svg"
export default function ThanksCard() {
    const { calification } = useContext(SurveyContext)
    return (
        <main className="bg-VeryDarkBlue  w-screen h-[100vh] grid place-content-center">
            <article className=" flex flex-col justify-center items-center px-6 py-5 shadow-2xl bg-gradient-to-b from-[#252d37] to-[#151a20] w-[21rem] h-[22rem] rounded-2xl">
                <img className="w-[9rem] h-[7rem] mb-4" src={PhoneImg} alt="icon start" />
                <div className="flex flex-col items-center">
                    <span className="text-center h-[2rem] w-[12rem] my-4 py-1.5 rounded-2xl bg-[#2b3644] text-Orange">You selected {calification} out of 5</span>
                    <h1 className="text-White text-2xl font-bold">Thank You!</h1>
                    <p className="text-LightGrey mt-4 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
                </div>

            </article>
        </main >
    )
}