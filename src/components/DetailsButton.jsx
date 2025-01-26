import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const DetailsButton = ({ city }) => {
  const handleClick = () => {
    // Open Google Weather in a new tab
    window.open(`https://www.google.com/search?q=${encodeURIComponent(city + ' weather')}`, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl 
                text-white text-[1.3vh] hover:bg-white/20 transition-all duration-300"
    >
      <span>MORE DETAILS</span>
      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );
};

export default DetailsButton;