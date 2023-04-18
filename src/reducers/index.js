import { combineReducers } from "redux";
import categoryReducer from "./category.reducers"
import productReducer from "./product.reducer"



const rootReducer=combineReducers({
   
    category:categoryReducer,
    product:productReducer
   
})

export default rootReducer