import axios from "axios";
import { baseUrl } from "../baseurl";

export const getAllCategories = () => {
    return axios.get(`${baseUrl}/products/categories`)
}

export const getProducts = (category) => {
    return axios.get(`${baseUrl}/products/category/${category}`)
}