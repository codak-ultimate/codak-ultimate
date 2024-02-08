import { createSlice } from "@reduxjs/toolkit";


const themeSlice=createSlice({
    name:'theme',
    initialState:{
        theme:false,
    },
    reducers:{
        changeTheme:(state)=>{
            state.theme=!state.theme
        }
    }
})
export default themeSlice;
export const {changeTheme}=themeSlice.actions;