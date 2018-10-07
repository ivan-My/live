import axios from 'axios';
import { Toast } from "antd-mobile";

const successCode = 0;
const instance = axios.create({
    baseURL: '/Live',
    // headers: {"Cookie": 'sessionId=hamhnv21uo0kovesubtpc5ay'},
    // crossDomain:true,
    withCredentials: true, // 跨域类型时是否在请求中协带cookie
});

instance.interceptors.request.use(function(config) {
    Toast.loading("加载中", 0);
    return config;
});
instance.interceptors.response.use(function(config) {
    Toast.hide();
    return config
});

export default class Https {
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                params
            }).then(({ data }) => {
                if (data.Code === successCode) {
                    //  const result = data;
                    // resolve({data: data})
                    resolve(data)
                } else if (data.Code === -102) {
                    console.log(data)
                    const result = data.Message || data;
                    resolve({ data: result })
                } else {
                    reject({ err: data.Message, name: data.name || '' })
                }
            }).catch((err) => {
                reject({ err: JSON.stringify(err) })
            })
        })
    }

    static post(url, params = {}) {
        return new Promise((resolve, reject) => {
            const data = params !== null ? params : null;
            instance.post(url, data).then(({ data }) => {
                if (data.status === successCode || data.status === undefined) {
                    const result = data.data || data;
                    resolve({ data: result })
                } else if (data.status === -2) {
                    const result = data.data || data;
                    resolve({ data: result })
                } else {
                    reject({ err: data.errmsg, name: data.name || '' })
                }
            }).catch((err) => {
                reject({ err: JSON.stringify(err) })
            })
        })
    }
}