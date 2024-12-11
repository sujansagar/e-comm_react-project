// import React from 'react'

// const Success = () => {
//   return (
//     <div className='flex flex-col items-center justify-center h-screen'>
//       <h2> Ordered Successful !!! </h2>
//       <p>We will notify you when it ships...</p>
//     </div>
//   )
// }

// export default Success

// Success.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Success = () => {
//   const navigate=useNavigate()
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-green-50 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full">
//         <div className="flex flex-col items-center">
//           <svg
//             className="h-24 w-24 text-green-500"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <circle cx="12" cy="12" r="10" />
//             <line x1="12" y1="16" x2="12" y2="12" />
//             <line x1="12" y1="8" x2="12" y2="8" />
//           </svg>
//           <h2 className="text-3xl font-bold text-green-800 mt-6">Order Successful!</h2>
//           <p className="text-lg text-gray-600 mt-4">We will notify you when it ships...</p>
//         </div>
//         <button  onClick={()=>navigate("/")} className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300">
//           Go to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Success;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaShippingFast, FaHome } from 'react-icons/fa'; // Importing useful icons

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-100 to-green-300 p-6">
      <div className="bg-white shadow-2xl rounded-lg p-10 max-w-md w-full transform transition-transform duration-300 hover:scale-105">
        <div className="flex flex-col items-center">
          {/* Main Success Icon */}
          <FaCheckCircle className="h-24 w-24 text-green-500 mb-4 animate-pulse" />
          <h2 className="text-4xl font-extrabold text-green-800 mb-4">Order Successful!</h2>
          <p className="text-lg text-gray-700 mb-6 flex items-center">
            <FaShippingFast className="text-blue-500 mr-2" />
            We will notify you when it ships.
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center mt-4 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:translate-y-1 transition-all duration-300 ease-in-out"
        >
          <FaHome className="mr-2" />
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Success;


