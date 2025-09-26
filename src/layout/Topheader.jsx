import React from 'react'

const Topheader = () => {
  return (
 <div className="relative text-white text-sm py-2 overflow-hidden">
  {/* Background Layer */}
  <div className="absolute inset-0 flex">
    {/* Red Section with Diagonal Cut */}
    <div className="flex-1 relative">
 <div
  className="absolute inset-0 bg-red-600"
  style={{
    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 70px), calc(100% - 70px) 100%, 0 100%)",
  }}
></div>


    </div>
    {/* Black Section */}
    
  </div>

  {/* Content Layer */}
  <div className="max-w-7xl mx-auto px-3 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-6 relative z-10">
    {/* Left Content */}
    <div className="flex flex-col md:flex-row items-center md:space-x-6 text-center md:text-left space-y-1 md:space-y-0">
      <div className="flex items-center space-x-2">
        <span>✉</span>
        <span className="truncate">info@NORTECH.pk</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>📍</span>
        <span className="truncate">
          Ahmed Plaza, Main Alamdar Chowk Danyore Gilgit
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <span>📞</span>
        <span className="truncate">+923133879645</span>
      </div>
    </div>

    {/* Right Content (Social Icons) */}
    <div className="flex items-center space-x-3">
      <div className="w-6 h-6 bg-white rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-200 hover:scale-110 flex items-center justify-center">
        <span className="text-black text-xs font-bold">f</span>
      </div>
      <div className="w-6 h-6 bg-white rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-200 hover:scale-110 flex items-center justify-center">
        <span className="text-black text-xs font-bold">i</span>
      </div>
      <div className="w-6 h-6 bg-white rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-200 hover:scale-110 flex items-center justify-center">
        <span className="text-black text-xs font-bold">in</span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Topheader