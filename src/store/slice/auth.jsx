import { createSlice } from "@reduxjs/toolkit"
const authSlice=createSlice({
    name:"auth",
    initialState:{'is_authenticated':false},
    reducers:{
        login:(state)=>{
            state.is_authenticated=true
        },

        logout:(state)=>{
            state.is_authenticated=false
        }

        
    }
})
const authSliceReducer=authSlice.reducer
export default authSliceReducer
export const authAction=authSlice.actions