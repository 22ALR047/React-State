import React, { useState } from 'react'

const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-80">
        <h2 className="text-xl font-bold text-center mb-6">Show/Hide Text</h2>
        
        <div className="text-center mb-6">
          <button 
            onClick={toggleVisibility}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium transition duration-200"
          >
            {isVisible ? 'Hide Text' : 'Show Text'}
          </button>
        </div>

        {isVisible && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-gray-700 text-lg">
              Hello All! I am madhumitha
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShowHideText
