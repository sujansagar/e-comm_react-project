

// import React from 'react';
// import FoodCard from './FoodCard';
// import FoodData from '../data/FoodData.js';

// const FoodItem = () => {
//   return (
//     <div className="flex flex-wrap gap-8 justify-center my-10 max-w-[1200px] mx-auto">
//       {FoodData.map((food) => (
//         <FoodCard 
//           key={food.id} 
//           id={food.id} 
//           name={food.name} 
//           price={food.price} 
//           desc={food.desc} 
//           rating={food.rating} 
//           img={food.img} 
//         />
//       ))}
//     </div>
//   );
// };

// export default FoodItem;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import FoodCard from './FoodCard';

// const FoodItem = () => {
//   // Get filtered data from the Redux store
//   const filteredData = useSelector((state) => state.category.filteredData);
//   const search = useSelector((state)=>state.search.search)


//   return (
//     <div className="flex flex-wrap gap-8 justify-center my-10 max-w-[1200px] mx-auto">
//       {/* Display the filtered data */}
//       {filteredData.map((food) => (
//         <FoodCard 
//           key={food.id} 
//           id={food.id} 
//           name={food.name} 
//           price={food.price} 
//           desc={food.desc} 
//           rating={food.rating} 
//           img={food.img} 
//         />
//       ))}
//     </div>
//   );
// };

// export default FoodItem;

import React from 'react';
import { useSelector } from 'react-redux';
import FoodCard from './FoodCard';
import FoodData from '../data/FoodData';

const FoodItem = () => {
  // Get filtered data and search query from the Redux store
  const filteredData = useSelector((state) => state.category.filteredData);
  const search = useSelector((state) => state.search.search);

  // Filter data based on the search query if it exists
  const displayedData = search
    ? filteredData.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()))
    : filteredData;

  return (
    <div className="flex flex-wrap gap-8 justify-center my-10 max-w-[1200px] mx-auto">
      {/* Display the filtered or searched data */}
      {displayedData.map((food) => (
        <FoodCard 
          key={food.id} 
          id={food.id} 
          name={food.name} 
          price={food.price} 
          desc={food.desc} 
          rating={food.rating} 
          img={food.img} 
        />
      ))}
    </div>
  );
};

export default FoodItem;





