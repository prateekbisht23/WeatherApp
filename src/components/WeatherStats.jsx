import React from "react";

const WeatherStats = () => {
    return(
        <>
        <div className="text-white font-sans font-extralight text-2xl">
            <div className="flex flex-row justify-evenly items-center w-full">
                <span className="text-6xl">20&deg; </span>
                <span><sup>+</sup>/<sub>-</sub></span>
                <span className="text-6xl">3</span>
            </div>
            <div className="flex flex-row justify-between items-baseline w-full px-3 py-1">
                <div className="tracking-wider">
                    <span>9.8%</span>
                </div>
                <div className="text-[11.5px] tracking-tighter">
                    <span>Wind: WSW 6 mph</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default WeatherStats;