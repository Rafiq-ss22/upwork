import { createSlice } from "@reduxjs/toolkit";


const menuSlice= createSlice({
    name: 'menu',
    initialState:{"Find Talent":false,"Find Work":false,"Why Upwork":false},
    reducers: {
        toggle(state:any,action){
            switch (action.payload) {
                case "Find Talent":
                    return {"Find Talent":true,"Find Work":false,"Why Upwork":false}
                    break;
                case "Find Work":
                    return {"Find Talent":false,"Find Work":true,"Why Upwork":false}
                    break;
                case "Why Upwork":
                    return {"Find Talent":false,"Find Work":false,"Why Upwork":true}
                    break;
            
                default:
                    return {"Find Talent":false,"Find Work":false,"Why Upwork":false}
                    break;
            }
          
        },
       

    },
})

export const menuAction = menuSlice.actions

export default menuSlice.reducer