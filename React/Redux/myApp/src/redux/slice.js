import {createSlice} from '@reduxjs/toolkit'


const intialsState={count:0}


const counterSlice=createSlice({
    name:'Counter',
    initialState:intialsState,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        }

    }
})

export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer