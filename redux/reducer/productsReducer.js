// import { createSlice } from '@reduxjs/toolkit'
import productData from "../../data/products.json"




const initialState = [];


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_STORE":
            return [...state, ...action.payload]
        default:
            return state
    }
}


