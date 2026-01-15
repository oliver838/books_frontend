import axios from "axios";
import { Categories } from "./components/Categories";
const baseUrl = "http://localhost:8000/books/"
export const getCategories = async ()=>{
    const resp = await axios.get(baseUrl+"categories")
    return resp
}

export const getBooksByCateg = async ({queryKey})=>{

    const response = await axios.get(baseUrl + "categ/"+queryKey[1])
    return response
}

export const getBooksBySearch = async({queryKey})=>{
    const response = await axios.get(baseUrl + "title/"+queryKey[1])
    return response
}

export const getAllBooks = async()=>{
    const response = await axios.get(baseUrl)
    return response
}