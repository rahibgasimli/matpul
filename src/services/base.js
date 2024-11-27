import axios from "axios"

const productsUrl = "https://67389b704eb22e24fca86ea3.mockapi.io/api/v1/products"
export const productApi = {
    getAllProducts: async function(){
        return (await axios.get(productsUrl)).data
            
    },
    addProduct:function (param){
        axios.post(productsUrl,param)
    }
}