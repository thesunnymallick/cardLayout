import {configureStore} from "@reduxjs/toolkit"
import { allUserReducer } from "./reducer";



const store= configureStore({
    reducer:{
     userReducer:allUserReducer
    }
})

export default store;