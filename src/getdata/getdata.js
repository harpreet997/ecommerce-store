import axios from "axios";
import { baseUrl } from "../baseurl";

export const getAllCategories = () => {
    return axios.get(`${baseUrl}/products/categories`)
}

export const getProducts = (category) => {
    return axios.get(`${baseUrl}/products/category/${category}`)
}

export const getProductsAscending = (category) => {
    return axios.get(`${baseUrl}/products/category/${category}?sort=asc`)
}

export const getProductsDescending = (category) => {
    return axios.get(`${baseUrl}/products/category/${category}?sort=desc`)
}