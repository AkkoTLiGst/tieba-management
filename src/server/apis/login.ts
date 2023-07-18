import request from "../request.ts";

// 登陆api-获取token
export const adminLogin = (username: string, password: string) => {
    return request({
        url: '/auth/adminLogin',
        method: 'POST',
        data: {username, password}
    }).then(res => res.data);
}

// 通过token获取用户信息
export const userData = (token: string) => {
    return request({
        url: '/auth/adminProfile',
        method: 'GET',
        headers: {isToken: true}
    }).then(res => res.data);
}