// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {  
//       const existingItem = state.cart.find(
//         (item)=>item.id === action.payload.id
//       )
//       if(existingItem){
//         state.cart = state.cart.map((item)=>
//         item.id === action.payload.id ? {...item, qty: item.qty +1} : item
//         )
//       }else{
//         state.cart.push(action.payload)
//       }
//       state.cart.push(action.payload);
//     },
//     removeFromCart: (state, action) => {  
//       state.cart = state.cart.filter((item) => item.id !== action.payload.id);
//     },
//   },
// });

// export const { addToCart, removeFromCart } = CartSlice.actions;
// export default CartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.cart.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         // Increment the quantity of the existing item
//         state.cart = state.cart.map((item) =>
//           item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
//         );
//       } else {
//         // Add new item to the cart with a default quantity of 1
//         state.cart.push({ ...action.payload, qty: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       // Remove the item from the cart
//       state.cart = state.cart.filter((item) => item.id !== action.payload.id);
//     },
//     incrementQty:(state,action)=>{
//       state.cart = state.cart.map((item)=>{
//         item.id === action.payload.id ? {...item, qty: item.qty +1} : item
//       })
//     }
//     decrementQty:(state,action)=>{
//       state.cart = state.cart.map((item)=>{
//         item.id === action.payload.id ? {...item, qty: item.qty -1} : item
//       })
//   },
// });

// export const { addToCart, removeFromCart,incrementQty,decrementQty } = CartSlice.actions;
// export default CartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // Increment the quantity of the existing item
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Add new item to the cart with a default quantity of 1
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // Remove the item from the cart
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQty: (state, action) => {
      // Increment the quantity of the item
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      // Decrement the quantity, ensuring it does not go below 1
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;










