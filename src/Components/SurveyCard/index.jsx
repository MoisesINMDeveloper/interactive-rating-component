import { useContext } from 'react';
import { SurveyContext } from "./SurveyContext"
import ThanksCard from "../ThankYouCard/Index"
import IconStar from "/assets/icon-star.svg"


export default function SurveyCard() {
    const { showThanks, calification, setCalification, handleSendCalification } = useContext(SurveyContext)

    const handleClick = (value) => {
        setCalification(value);
    };

    const handleSubmit = () => {
        if (calification === null) return; // Validar si no se ha seleccionado ninguna calificación

        handleSendCalification();
    };

    return (
        <main className="bg-VeryDarkBlue  w-screen h-[100vh] grid place-content-center">

            {!showThanks ? (
                <article className="px-6 py-5 shadow-2xl bg-gradient-to-b from-[#252d37] to-[#151a20] w-[21rem] h-[22rem] rounded-2xl">
                    <div className="bg-[#2b3644] rounded-full w-10 h-10 flex items-center justify-center mb-4">
                        <img className="w-3 h-3" src={IconStar} alt="icon start" />
                    </div>
                    <div>
                        <h1 className="text-white text-2xl font-bold">How did we do?</h1>
                        <p className="text-LightGrey mt-4">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                        <ul className="flex flex-row justify-center my-4">

                            <li
                                className="z-10 bg-[#2b3644] focus:bg-[##7c8798] hover:bg-Orange  hover:cursor-pointer  rounded-full w-11 h-11 ml-0" onClick={() => handleClick(1)}
                            ><button className=" text-LightGrey focus:bg-[#7c8798] hover:text-White focus:text-White rounded-full w-full h-full text-xs flex justify-center items-center">1</button></li>
                            <li
                                className="bg-[#2b3644] hover:cursor-pointer  hover:bg-Orange focus:bg-[#7c8798]  rounded-full w-11 h-11 ml-0" onClick={() => handleClick(2)}
                            ><button className=" text-LightGrey focus:bg-[#7c8798] hover:text-White focus:text-White rounded-full w-full h-full text-xs flex justify-center items-center">2</button></li>
                            <li
                                className="bg-[#2b3644] hover:cursor-pointer  hover:bg-Orange focus:bg-[#7c8798]  rounded-full w-11 h-11 ml-0" onClick={() => handleClick(3)}
                            ><button className=" text-LightGrey focus:bg-[#7c8798] hover:text-White focus:text-White rounded-full w-full h-full text-xs flex justify-center items-center">3</button></li>
                            <li
                                className="bg-[#2b3644] hover:cursor-pointer  hover:bg-Orange focus:bg-[#7c8798]  rounded-full w-11 h-11 ml-0" onClick={() => handleClick(4)}
                            ><button className=" text-LightGrey focus:bg-[#7c8798] hover:text-White focus:text-White rounded-full w-full h-full text-xs flex justify-center items-center">4</button></li>
                            <li
                                className="bg-[#2b3644] hover:cursor-pointer  hover:bg-Orange focus:bg-[#7c8798]  rounded-full w-11 h-11 ml-0" onClick={() => handleClick(5)}
                            ><button className=" text-LightGrey focus:bg-[#7c8798] hover:text-White focus:text-White rounded-full w-full h-full text-xs flex justify-center items-center">5</button></li>
                        </ul>
                    </div>
                    <button className="bg-Orange rounded-3xl w-[19rem] h-11 hover:bg-White hover:text-Orange text-White tracking-widest p-3" onClick={handleSubmit} type="submit" ><span className=''>SUBMIT</span></button>

                </article>
            ) : (
                <>
                    {showThanks && (
                        <ThanksCard />
                    )}
                </>
            )}
        </main>
    )
}