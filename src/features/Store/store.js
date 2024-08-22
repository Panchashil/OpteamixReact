import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../API/apiSlice";

const store = configureStore({
    reducer:{
        api:apiSlice
    }
})

export default store;
  