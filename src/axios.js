import axios from 'axios'

axios.defaults.baseURL = 'https://fakestoreapi.com/products';

axios.defaults.headers = 'Bearer' + localStorage.getItem('token');


// const axiosApi = require('axios');

// const api = axios.create({
// 	baseURL: "https://fakestoreapi.com/products"
// });

// console.log(api.defaults.baseURL)