import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Store/UserSlice";

const store = configureStore({
    reducer:{
        users:userSlice
    }
});

export default store;