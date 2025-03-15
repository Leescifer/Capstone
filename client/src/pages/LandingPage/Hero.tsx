import React from 'react'
import LeftImage from '../../Image/left.jpg'
import RightImage from '../../Image/right.jpg'

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-blue-50 p-4">
    <div className="flex-1 flex justify-center">
        <div className="rounded-3xl overflow-hidden shadow-lg max-w-xs">
            <img src={LeftImage} alt="Group Photo" className="w-full h-auto" />
        </div>
    </div>
    
    <div className="flex-1 text-center my-6 md:my-0">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
            Empowered <span className="text-blue-500">Youth</span>,<br />
            Empowered <span className="text-blue-500">Democracy</span>.
        </h1>
        <p className="mt-4 text-2xl text-gray-600">
            "Know your rights, demand transparent leadership."
        </p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 cursor-pointer">
            Get Started
        </button>
    </div>

    <div className="flex-1 flex justify-center">
        <div className="rounded-3xl overflow-hidden shadow-lg max-w-xs">
            <img src={RightImage} alt="Student Writing" className="w-full h-auto" />
        </div>
    </div>
</div>
  )
}

export default HeroSection