import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const product = state.items.find(item => item.id === action.payload.id)

      if (!product) {
        state.items.push(action.payload);
        console.log(state.items)
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    increment: (state, action) => {
      const { id } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1 && state.items[index]) {
        state.items[index].quantity += 1;
        state.items[index].total = state.items[index].price * state.items[index].quantity;
      }
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1 && state.items[index]) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        }
      }
    },
  },
});

export const { add, open, close, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
