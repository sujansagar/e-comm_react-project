// import { createSlice } from "@reduxjs/toolkit";

// const SearchSlice = createSlice({
//     name:"search",
//     initialState:{
//         search: "",
//     },
//     reducers:{
//         setSearch:(state,actions)=>{
//             state.search = actions.payload
//         }
//     }
// })
// export const {setSearch} = SearchSlice.actions
// export default SearchSlice.reducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
