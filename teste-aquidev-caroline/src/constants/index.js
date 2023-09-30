import axios from "axios";

export const BASE_URL = 'https://api.punkapi.com/v2/';

export const login = async () =>{
const { data } = await axios.post(`${BASE_URL}/user/login`)
return data;
}

export const Signup = async () =>{
const { data } = await axios.post(`${BASE_URL}/user/signup`)
return data;
    }

export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);
export const validatePassword = password => /.{6,}/.test(password); 
export const validateName = name => /.{2,}/.test(name);