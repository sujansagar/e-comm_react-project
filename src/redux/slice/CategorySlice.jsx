// import { createSlice } from "@reduxjs/toolkit";

// const CategorySlice = createSlice({
//     name:"category",
//     initialState:{
//         category:All
//     },
//     reducers:{
//         setCategory:(state,action)=>{
//             state.category = action.payload
//         }
//     }
// })
// export const {setCategory} = CategorySlice.actions
// export default CategorySlice.reducer

// categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: null,
  filteredData: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setFilteredData(state, action) {
      state.filteredData = action.payload;
    },
  },
});

export const { setCategory, setFilteredData } = categorySlice.actions;
export default categorySlice.reducer;
