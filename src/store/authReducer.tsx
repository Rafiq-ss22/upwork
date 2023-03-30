import { createSlice } from "@reduxjs/toolkit";

type Slice={
    auth:Boolean,
    token:string,
}

const authSlice = createSlice({
    name: 'auth',
    initialState:{auth: false,token: null},
    reducers: {
        login(state:any,action){
            state=action.payload
            return state
        },
        logout(state:any){
            state.auth=false
            state.token=null
            return  state
        }

    },
})

export const authAction = authSlice.actions

export default authSlice.reducer