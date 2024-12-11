

// import React from 'react';
// import { IoCloseCircleSharp } from "react-icons/io5";
// import ItemCard from './ItemCard';

// const Cart = () => {
//   return (
//     <div className="fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white shadow-lg mb-3 p-5">
//       {/* Header Section */}
//       <div className="flex justify-between items-center px-5 py-4 border-b border-gray-300">
//         <span className="text-xl font-bold text-gray-800">My Orders</span>
//         <IoCloseCircleSharp className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer transition duration-300" />
//       </div>

//       <ItemCard />
//       <ItemCard />
//       <ItemCard />
 
//       {/* Content Section */}
//       <div className="absolute bottom-0">
//         <div className="mb-4">
//           <h3 className='font-semibold text-gray-800'>Items:</h3>
       
//           <h3 className='font-semibold text-gray-800'>Total Amount:</h3>
       
//         <hr className="w-[90vw] lg:w-[18vw] my-2" />

//         <button className="bg-green-500 font-bold px-3 py-2 text-white rounded-lg w-full lg:w-[18vw] mb-5 ">
//           Checkout
//         </button>
//          </div>
//       </div>
     
//     </div>
//   );
// };

// export default Cart;


import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false); // Initially set to false
  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty,item)=>totalQty + item.qty, 0)

  const navigate=useNavigate()


  return (
    <>
      {/* Cart Container */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[35vw] h-[70vh] bg-gradient-to-b from-gray-100 to-white shadow-xl rounded-lg border border-gray-300 transition-transform duration-300 ${
          activeCart ? "scale-100" : "scale-0"
        }`}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center px-6 py-4 bg-blue-500 text-white rounded-t-lg shadow">
          <span className="text-2xl font-bold">My Cart</span>
          <IoCloseCircleSharp
            onClick={() => setActiveCart(false)}
            className="text-3xl hover:text-red-600 cursor-pointer transition duration-300"
          />
        </div>

        {cartItems.length > 0 ? cartItems.map((food)=>{
          return(
            <ItemCard 
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            img={food.img}
            qty={food.qty}
            />
          )
        }) : <h2 className='text-center text-xl font-bold text-gray-800'>Your cart is empty</h2>}

       
        
       

       

        {/* Footer Section */}
        <div className="px-6 py-4 bg-gray-100 rounded-b-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Items:</h3>
            <span className="text-gray-600">{cartItems.length}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Total Amount:</h3>
            <span className="text-gray-600">
              ₹{" "}
              {cartItems.reduce((total, item) => total + item.price * item.qty, 0)}
            </span>
          </div>
          <button onClick={()=>navigate("/success")}
            className="w-full bg-purple-500 text-white font-bold py-2 rounded-lg hover:bg-purple-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Order
          </button>
        </div>
      </div>

      {/* Floating Cart Icon */}
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer hover:shadow-lg hover:scale-110 transition-transform"
      />
    </>
  );
};

export default Cart;







// import React, { useState } from 'react';
// import { IoCloseCircleSharp } from "react-icons/io5";
// import ItemCard from './ItemCard';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//   const [activeCart, setActiveCart] = useState(true);
//   const cartItems = useSelector((state) => state.cart.cart);

//   return (
//     <div
//       className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[35vw] h-[70vh] bg-gradient-to-b from-gray-100 to-white shadow-xl rounded-lg border border-gray-300 transition-transform duration-300 ${
//         activeCart ? "scale-100" : "scale-0"
//       } flex flex-col`}
//     >
//       {/* Header Section */}
//       <div className="flex justify-between items-center px-6 py-4 bg-blue-500 text-white rounded-t-lg shadow">
//         <span className="text-2xl font-bold">My Cart</span>
//         <IoCloseCircleSharp
//           onClick={() => setActiveCart(false)}
//           className="text-3xl hover:text-red-600 cursor-pointer transition duration-300"
//         />
//       </div>
//       <ItemCard />
     

//       {/* Items Section */}
//       <div className="flex-1 p-6 space-y-4 overflow-y-auto">
//         {cartItems.length > 0 ? (
//           cartItems.map((item, index) => (
//             <ItemCard key={index} {...item} />
//           ))
//         ) : (
//           <p className="text-center text-gray-500">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Footer Section */}
//       <div className="px-6 py-4 bg-gray-100 rounded-b-lg">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold text-gray-700">Items:</h3>
//           <span className="text-gray-600">{cartItems.length}</span>
//         </div>
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold text-gray-700">Total Amount:</h3>
//           <span className="text-gray-600">
//             ₹{" "}
//             {cartItems.reduce((total, item) => total + item.price * item.qty, 0)}
//           </span>
//         </div>
//         <button
//           className="w-full bg-purple-500 text-white font-bold py-2 rounded-lg hover:bg-purple-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;




