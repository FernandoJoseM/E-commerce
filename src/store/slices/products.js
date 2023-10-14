import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
export const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts:(state,action)=>action.payload
    }
})

export const getProductsThunk=()=>(dispatch)=>{
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
    .then(res=>{
        dispatch(setProducts(res.data))
    })
    .catch(err=>console.log(err))

}
export const filterByCategory=(id)=>(dispatch)=>{
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
    .then(res=>{
        dispatch(setProducts(res.data))
    })
    .catch(err=>console.log(err))
}
export const filterByName=(name)=>(dispatch)=>{
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${name}`)
    .then(res=>{
        dispatch(setProducts(res.data))
    })
    .catch(err=>console.log(err))
}
export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
