import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: number;
  title: string;
  price:number;
  sexo:string;
  image:string;
  description:string;
}

interface ItemsState {
  items: Item[];
}

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
      let names = state.items.map(item => item.title).join(', ');
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem,removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;