import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Location = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <div className="absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
              <path d="M12 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search city..."
            className="w-full pl-12 pr-12 py-3 bg-white/10 backdrop-blur-md rounded-xl 
                     text-white placeholder-white/60 outline-none focus:ring-2 
                     focus:ring-white/20 transition-all"
          />
          <div className="absolute right-4">
            <MagnifyingGlassIcon className="h-5 w-5 text-white/60" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Location;