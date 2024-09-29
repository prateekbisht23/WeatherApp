import React from "react";
import { BsPlusSlashMinus } from "react-icons/bs";
import { MdPercent } from "react-icons/md";

const WeatherStats = () => {
    return(
        <>
        <div>
        <div className="text-white font-sans  text-6xl flex justify-evenly mt-6 items-center">
            <div className="flex flex-col items-center mr-2">
            <span className="mb-2  ">25°</span>
            <div className="flex items-center text-2xl font-light mr-2">
                <span>9.8</span>
                <span><MdPercent /></span>
            </div>
            </div>
            <div className="items-center flex flex-col ml-2">
            <div className="flex items-center mb-2 pb-2">
                <span className="text-2xl mr-3"><BsPlusSlashMinus />     </span>
                <span className="">3</span>
            </div>
            <span className="text-xs">Wind:WSW6mph</span>
            </div>
        </div>
        </div>
        </>
    )
}

export default WeatherStats;