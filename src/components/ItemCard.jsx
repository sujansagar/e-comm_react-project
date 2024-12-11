// import React from 'react'
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// const ItemCard = () => {
//   return (
//     <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
//         <MdDelete className='absolute right-7 text-gray-600 cursor-pointer'/>
//         <img className='w-[50px] h-[50px]' src='https://i.pinimg.com/736x/e0/87/8c/e0878c665888cda496229334ee9eb692.jpg' />

//         <div className='leading-5'>
//             <h2 className='font-bold text-gray-800'>Nike jordons</h2>
//             <div className='flex justify-between '>
//                 <span  className='text-green-500 font-bold'> ₹ 120</span>

//             <div className='flex justify-center items-center gap-2 absolute right-7'>
//             <FaPlus className='border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
//             <span>1</span>
//             <FaMinus className='border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/> 
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ItemCard



import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../redux/slice/CartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id, img, name, price, qty }));
    toast.error(`${name} has been removed from the cart!`, {
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
    <div className="relative flex items-center gap-4 shadow-md rounded-lg p-4 mb-4">
      {/* Delete Icon */}
      <MdDelete
        onClick={handleRemove}
        className="absolute top-2 right-2 text-gray-600 text-xl cursor-pointer hover:text-red-500 transition duration-300"
      />

      {/* Image */}
      <img
        className="w-[60px] h-[60px] object-cover rounded-md"
        src={img}
        alt={name}
      />

      {/* Item Details */}
      <div className="flex-1">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-500 font-bold">₹ {price}</span>

          {/* Quantity Control */}
          <div className="flex items-center gap-2">
            <FaMinus
              onClick={() => dispatch(decrementQty({ id }))}
              className="text-gray-600 hover:text-white hover:bg-red-500 rounded-full p-1 text-lg cursor-pointer transition duration-300"
            />
            <span className="font-semibold text-gray-800">{qty}</span>
            <FaPlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="text-gray-600 hover:text-white hover:bg-green-500 rounded-full p-1 text-lg cursor-pointer transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;


