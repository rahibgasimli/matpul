import axios from "axios"

const productsUrl = "https://67389b704eb22e24fca86ea3.mockapi.io/api/v1/products"
export const productApi = {
    getAllProducts:function(){
        axios.get(productsUrl)
            .then(res => console.log(res.data))
    },
    addProduct:function (param){
        axios.post(productsUrl,param)
    }
}