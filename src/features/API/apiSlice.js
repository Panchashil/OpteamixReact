import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8888/products";

//  get request 
export const fetchData = createAsyncThunk("api/fetchData", async ()=>{
    const response =  await axios.get(API_URL);
    return response.data;
});
// delete request 
export const deleteData = createAsyncThunk("api/deleteData", async (id)=>{
    if(window.confirm(`Are you sure to delete product with id ${id}`)){
        await axios.delete(`${API_URL}/${id}`);
        return id;
    }  
});
// post request 
export const createData = createAsyncThunk("api/createData", async (newData)=>{
    const response =  await axios.post(API_URL,newData);
    return response.data;
});

const apiSlice = createSlice({
    name:"api",
    initialState:{
        data:[],
        status:"ideal",  // ideal | loading | succeeded | failed
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.
        addCase(fetchData.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.data = action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(deleteData.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(deleteData.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.data = state.data.filter((item)=>item.id !== action.payload);
        })
        .addCase(deleteData.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(createData.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(createData.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.data.push(action.payload);
        })
        .addCase(createData.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }

})

export default apiSlice.reducer;
