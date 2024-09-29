import React from "react";

const WeatherStats = () => {
    return(
        <>
        <div className="text-white font-sans font-thin text-[25px]">
            <div className="flex flex-row justify-evenly items-center w-full">
                <span className="text-5xl font-extralight">20&deg; </span>
                <span><sup>+</sup>/<sub>-</sub></span>
                <span className="text-5xl font-extralight">3</span>
            </div>
            <div className="flex flex-row justify-between items-baseline w-full px-3 py-1">
                <div className="tracking-wider text-[23px]">
                    <span>9.8%</span>
                </div>
                <div className="text-[10px] tracking-tighter">
                    <span>Wind: WSW 6 mph</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default WeatherStats;