import React from "react";
import { FaCloudSun } from "react-icons/fa";

const AirQuality = () => {
    return(
        <>
        <div className="flex text-white mt-6 items-center justify-evenly">
            <div className="flex flex-col items-center mr-4 ">
                <span className="text-2xl mt-1">
                    <FaCloudSun />
                </span>
                <div className="flex flex-col text-sm">
                    <span className="text-center font-semibold">
                        Safe
                    </span>
                    <span>
                    &#x2022;  0.00% - 0.9%
                    </span>
                    <span>
                    &#x2022;  0.9% - 11%
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center ml-4">
                <span className="text-2xl">
                    0.3%
                </span>
                <div className="flex flex-col text-sm">
                    <span className=" text-center font-semibold">
                        Dangerous
                    </span>
                    <span>
                    &#x2022;  12% - 38%
                    </span>
                    <span>
                    &#x2022;  39% - 90%
                    </span>
                </div>
            </div>

        </div>
        </>
    )
}

export default AirQuality;