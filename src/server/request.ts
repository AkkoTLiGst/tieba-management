import axios from "axios";

// 封装axios

const request = axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 5000
});

// 请求拦截器
request.interceptors.request.use((config) => {
    const isToken = (config.headers || {}).isToken === false;
    if(!isToken){
        const token = localStorage.getItem('adminToken');
        if(token){
            config.headers['Authorization'] = 'Bearer ' + token;
        }
    }
    return config;
}, error => {
    console.log(error)
});

// 响应拦截器
request.interceptors.response.use((res) => {
    return res;
},
error => {
    console.log(error)
})

export default request;