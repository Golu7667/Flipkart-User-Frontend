import axiosIntance from "../helpers/axios"
import { productConstants } from "./constants";

export const getProductsBySLug=(slug)=>{
    return async dispatch=>{
        const res=await axiosIntance.get(`/products/${slug}`)
        console.log(res+'llll');
        if(res.status===200){
            dispatch({
                type:productConstants.GET_PRODUCTS_BY_SLUG,
                payload:res.data
            })
        }
    }
}