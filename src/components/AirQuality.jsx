import React from "react";

const AirQuality = () => {
    return(
        <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between ">
                <div className="relative top-1">
                    <span className="absolute left-0 rounded-[100%] h-[20px] w-[20px] shadow-colored bg-[rgb(235,67,70)]"></span>
                    <span className="absolute left-3 rounded-[100%] h-[20px] w-[20px] shadow-colored bg-[rgb(220,136,45)]"></span>
                    <span className="absolute left-6 rounded-[100%] h-[20px] w-[20px] shadow-colored bg-[rgb(217,186,56)]"></span>
                    <span className="absolute left-9 rounded-[100%] h-[20px] w-[20px] shadow-colored bg-[rgb(232,204,86)]"></span>
                    <span className="absolute left-12 rounded-[100%] h-[20px] w-[20px] shadow-colored bg-[rgb(250,226,114)]"></span>
                </div>
                <div className="flex items-baseline gap-2 justify-end w-[50%]">
                    <span className="rounded-[100%] h-[5px] w-[5px] shadow-colored bg-[rgb(250,226,114)]"></span>
                    <span className="text-white text-xl font-extralight tracking-widest">0.8%</span>
                </div>
            </div>
            <div className="flex flex-row text-[12px] text-white justify-between">
                <div className="flex flex-col">
                    <span className="mb-2">Safe</span>
                    <div className="flex flex-row items-center gap-1">
                        <span className="rounded-[100%] h-[5px] w-[5px] shadow-colored bg-[rgb(250,226,114)]"></span>
                        <span>0.00% - 0.9%</span>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <span className="rounded-[100%] h-[5px] w-[5px] shadow-colored bg-[rgb(217,186,56)]"></span>
                        <span>0.9% - 11%</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="mb-2">Dangerous</span>
                    <div className="flex flex-row items-center gap-1">
                        <span className="rounded-[100%] h-[5px] w-[5px] shadow-colored bg-[rgb(220,136,45)]"></span>
                        <span>12% - 38%</span>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <span className="rounded-[100%] h-[5px] w-[5px] shadow-colored bg-[rgb(235,67,70)]"></span>
                        <span>39% - 90%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirQuality;