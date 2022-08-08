import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/productsReducer'


export default configureStore({
    reducer: {
        products: counterReducer,
    },
})