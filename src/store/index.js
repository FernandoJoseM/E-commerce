import {configureStore}from '@reduxjs/toolkit'
import products from './slices/products'
import credentials from './slices/credentials'
import purchases from './slices/purchases'
const store=configureStore ({
    reducer:{
        products,
        credentials,
        purchases
    }
})
export default store