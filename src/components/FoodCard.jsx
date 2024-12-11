

// import React from 'react';
// import { FaStar } from "react-icons/fa";

// const FoodCard = ({id,name,price,desc,img,rating}) => {
//   return (
//     <div className="font-semibold w-[280px] bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between mt-3">
     
//       <div className="relative overflow-hidden rounded-lg">
//         <img 
//           src="https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png" 
//           alt="Food" 
//           className="w-full h-[160px] object-cover hover:scale-110 transition-transform duration-500"
//         />
//       </div>
   
//       <div className="mt-4">
//         <h2 className="text-lg text-gray-800">Sagar</h2>
//       </div>
//       {/* Description */}
//       <p className="text-sm text-gray-600 mt-2">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, incidunt!
//       </p>
    
//       <div className="flex justify-between items-center mt-4">
//         <span className="text-blue-600 text-lg font-bold">₹ 180</span>
//       </div>
//       <div className="mt-auto flex justify-between items-center">
//         <span className="flex items-center text-yellow-500 text-sm">
//           <FaStar className="mr-1" /> 4.5
//         </span>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;

// import React from 'react';
// import { FaStar } from "react-icons/fa";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/slice/CartSlice';

// const FoodCard = ({ id, name, price, desc, img, rating }) => {
//   const dispatch = useDispatch();

//   return (
//     <div className="font-semibold w-[280px] bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between mt-3">
//       {/* Image Section */}
//       <div className="relative overflow-hidden rounded-lg">
//         <img 
//           src={img} 
//           alt={name} 
//           className="w-full h-[160px] object-cover hover:scale-110 transition-transform duration-500"
//         />
//       </div>

//       {/* Title Section */}
//       <div className="mt-4">
//         <h2 className="text-lg text-gray-800">{name}</h2>
//       </div>

//       {/* Description Section */}
//       <p className="text-sm text-gray-600 mt-2">{desc.slice(0, 100)}...</p>

//       {/* Price and Rating Section */}
//       <div className="flex justify-between items-center mt-4">
//         <span className="text-blue-600 text-lg font-bold">₹ {price}</span>
//       </div>
//       <div className="mt-auto flex justify-between items-center">
//         <span className="flex items-center text-yellow-500 text-sm">
//           <FaStar className="mr-1" /> {rating}
//         </span>
//         <button 
//           onClick={() => {
//             dispatch(addToCart({ id, name, price, rating,img, qty: 1 })); // Fixed dispatch and qty key
//           }} 
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;


import React from 'react';
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/CartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodCard = ({ id, name, price, desc, img, rating }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
    toast.success(`${name} has been added to the cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="font-semibold w-[280px] bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between mt-3">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-[160px] object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Title Section */}
      <div className="mt-4">
        <h2 className="text-lg text-gray-800">{name}</h2>
      </div>

      {/* Description Section */}
      <p className="text-sm text-gray-600 mt-2">{desc.slice(0, 100)}...</p>

      {/* Price and Rating Section */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-blue-600 text-lg font-bold">₹ {price}</span>
      </div>
      <div className="mt-auto flex justify-between items-center">
        <span className="flex items-center text-yellow-500 text-sm">
          <FaStar className="mr-1" /> {rating}
        </span>
        <button 
          onClick={handleAddToCart} 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;





