// import React, { useEffect, useState } from 'react';
// import { FaTshirt, FaWatchmanMonitoring, FaShoePrints, FaShoppingBag, FaThLarge } from 'react-icons/fa';
// import FoodData from '../data/FoodData';

// const CategoryMenu = () => {
//   const [category, setCategory] = useState([]);

//   const listUniqueCategories = () => {
//     const uniqueCategories = [
//       ...new Set(FoodData.map((food) => food.category)),
//     ];
//     setCategory(uniqueCategories);
//     console.log(uniqueCategories); // Logs unique categories to the console
//   };

//   useEffect(() => {
//     listUniqueCategories();
//   }, []);


//   return (
//     <div className="w-full py-8 bg-gray-50 rounded-lg shadow-md">
//       <h3 className="text-center text-4xl font-bold text-gray-800 mb-6">
//         Discover What You Love!
       
//       </h3>
//       <div className="flex justify-center gap-6 flex-wrap">
//       <button className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition-all duration-300 ease-in-out">
//           <FaThLarge size={20} /> All
//         </button>
//         <button className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm bg-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500 hover:text-white transition-all duration-300 ease-in-out">
//           <FaTshirt size={20} /> Lunch
//         </button>
//         <button className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm bg-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500 hover:text-white transition-all duration-300 ease-in-out">
//           <FaWatchmanMonitoring size={20} /> BreakFast
//         </button>
//         <button className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm bg-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500 hover:text-white transition-all duration-300 ease-in-out">
//           <FaShoePrints size={20} /> Dinner
//         </button>
//         <button className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm bg-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500 hover:text-white transition-all duration-300 ease-in-out">
//           <FaShoppingBag size={20} /> Snacks
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CategoryMenu;

// import React, { useEffect, useState } from 'react';
// import { FaTshirt, FaWatchmanMonitoring, FaShoePrints, FaShoppingBag, FaThLarge } from 'react-icons/fa';
// import FoodData from '../data/FoodData';
// import { useDispatch } from 'react-redux';
// import { setCategory, setFilteredData } from '../redux/slice/categorySlice';

// const CategoryMenu = () => {
//   const [categories, setCategories] = useState([]);
//   const dispatch = useDispatch();

//   const listUniqueCategories = () => {
//     // Extract unique categories from FoodData
//     const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
//     setCategories(uniqueCategories);
//     console.log(uniqueCategories); // Logs the unique categories
//   };

//   useEffect(() => {
//     listUniqueCategories();
//   }, []);

//   const handleCategoryClick = (category) => {
//     // Dispatch the selected category to the Redux store
//     dispatch(setCategory(category));

//     // Filter the FoodData based on the selected category and dispatch it to the store
//     const filteredData = FoodData.filter((food) => food.category === category);
//     dispatch(setFilteredData(filteredData));

//     console.log('Filtered Data:', filteredData); // Logs the filtered data for verification
//   };

//   return (
//     <div className="w-full py-8 bg-gray-50 rounded-lg shadow-md">
//       <h3 className="text-center text-4xl font-bold text-gray-800 mb-6">
//         Discover What You Love!
//       </h3>
//       <div className="flex justify-center gap-6 flex-wrap">
//         {/* "All" Button */}
//         <button
//           className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition-all duration-300 ease-in-out"
//           onClick={() => {
//             dispatch(setCategory(null));
//             dispatch(setFilteredData(FoodData));
//           }}
//         >
//           <FaThLarge size={20} /> All
//         </button>

//         {/* Dynamically Render Category Buttons */}
//         {categories.map((category, index) => {
//           // Only render if the category has an associated icon
//           const getCategoryIcon = () => {
//             if (category === 'Lunch') return <FaTshirt size={20} />;
//             if (category === 'Breakfast') return <FaWatchmanMonitoring size={20} />;
//             if (category === 'Dinner') return <FaShoePrints size={20} />;
//             if (category === 'Snacks') return <FaShoppingBag size={20} />;
//             return null;
//           };

//           const icon = getCategoryIcon();
//           if (!icon) return null; // Skip rendering if no icon is found

//           return (
//             <button
//               key={index}
//               onClick={() => handleCategoryClick(category)}
//               className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm bg-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500 hover:text-white transition-all duration-300 ease-in-out"
//             >
//               {icon}
//               {category}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CategoryMenu;



import React, { useEffect, useState } from 'react';
import { FaTshirt, FaWatchmanMonitoring, FaShoePrints, FaShoppingBag, FaThLarge } from 'react-icons/fa';
import FoodData from '../data/FoodData';
import { useDispatch } from 'react-redux';
import { setCategory, setFilteredData } from '../redux/slice/categorySlice';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const categoryMapping = {
    Lunch: 'Clothes',
    Breakfast: 'Watches',
    Dinner: 'Shoes',
    Snacks: 'Bags',
  };

  const listUniqueCategories = () => {
    // Extract unique categories from FoodData
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
    console.log(uniqueCategories); // Logs the unique categories
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const handleCategoryClick = (category) => {
    // Dispatch the selected category to the Redux store
    dispatch(setCategory(categoryMapping[category] || category));

    // Filter the FoodData based on the selected category and dispatch it to the store
    const filteredData = FoodData.filter((food) => food.category === category);
    dispatch(setFilteredData(filteredData));

    console.log('Filtered Data:', filteredData); // Logs the filtered data for verification
  };

  return (
    <div className="w-full py-8 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-center text-4xl font-bold text-gray-800 mb-6">
        Discover What You Love!
      </h3>
      <div className="flex justify-center gap-6 flex-wrap">
        {/* "All" Button */}
        <button
          className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition-all duration-300 ease-in-out"
          onClick={() => {
            dispatch(setCategory(null));
            dispatch(setFilteredData(FoodData));
          }}
        >
          <FaThLarge size={20} /> All
        </button>

        {/* Dynamically Render Category Buttons */}
        {categories.map((category, index) => {
          const getCategoryIcon = () => {
            if (category === 'Lunch') return <FaTshirt size={20} />;
            if (category === 'Breakfast') return <FaWatchmanMonitoring size={20} />;
            if (category === 'Dinner') return <FaShoePrints size={20} />;
            if (category === 'Snacks') return <FaShoppingBag size={20} />;
            return null;
          };

          const icon = getCategoryIcon();
          if (!icon) return null; // Skip rendering if no icon is found

          return (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm bg-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500 hover:text-white transition-all duration-300 ease-in-out"
            >
              {icon}
              {categoryMapping[category] || category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;










