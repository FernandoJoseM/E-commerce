import { createSlice } from '@reduxjs/toolkit';

export const credentialsSlice = createSlice({
    name: 'credentials',
    initialState: null,
    reducers: {
        setCredentials:(state,action)=>action.payload
    }
})

export const {setCredentials } = credentialsSlice.actions;

export default credentialsSlice.reducer;
