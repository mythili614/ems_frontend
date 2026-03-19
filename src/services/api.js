import axios from "axios";

const API = axios.create({
 //baseURL: "http://127.0.0.1:8000/api/"//
 baseURL: "https://mythili123.pythonanywhere.com/api/",

 

});

export default API;