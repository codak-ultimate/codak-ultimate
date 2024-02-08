
import {configureStore}from '@reduxjs/toolkit'
import themeSlice from '../features/them/themeSlice'
export const store=configureStore({
    reducer:{
     theme:themeSlice.reducer
    }
})