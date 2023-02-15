import {createReducer} from "@reduxjs/toolkit"




export const allUserReducer=createReducer(
{
    allUser:[],
    loading:false
},
{
  GET_ALL_USER:(state, action)=>{
    const {loading, users}=action.payload
    state.allUser.push(users)
    state.loading=loading;

  }
})