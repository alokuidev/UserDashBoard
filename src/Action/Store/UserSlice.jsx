import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state, action){
            // Implement logic to add a user
        },
        removeUser(state,action){
            // Implement logic to remove a user
        },
        deleteUsers(state,action){
            // Implement logic to delete a user
        }

    }
})



export default userSlice.reducer;