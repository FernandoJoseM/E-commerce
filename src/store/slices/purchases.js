import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import getConfig from '../../helpers/getConfig';
export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases:(state,action)=>action.payload
    }
})
export const getProductThunk=()=>(dispatch)=>{
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart',getConfig())
    .then(res=>dispatch(setPurchases(res.data)))
    .catch(err=>console.log(err))

}
// create
export const addProductThunk=(data)=>(dispatch)=>{
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart',data,getConfig())
    .then(()=>dispatch(getProductThunk()))
    .catch(err=>console.log(err))
}
// update
export const updateProduct=(id,newQuantity)=>(dispatch)=>{
    const body={
        quantity:newQuantity
    }
    axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`,body,getConfig())
    .then(()=>dispatch(getProductThunk()))
    .catch(err=>console.log(err))
}
// delete

export const deleteProduct=(id)=>(dispatch)=>{
    axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`,getConfig())
    .then(()=>dispatch(getProductThunk()))
    .catch(err=>console.log(err))
}
export const purchaseCarThunk=()=>(dispatch)=>{
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases',{},getConfig())
    .then(()=>dispatch(getProductThunk()))
    .catch(err=>console.log(err))
}
export const {setPurchases} = purchasesSlice.actions;

export default purchasesSlice.reducer;
