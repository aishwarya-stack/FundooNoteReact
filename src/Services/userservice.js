import axios from 'axios'

export const login=(obj)=>
{
    let response=axios.post("http://localhost:3000/login",obj)
    return response;
}