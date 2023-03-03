import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
// 封装的axios
class HYRequest {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout,
        })

        // 拦截器获取返回数据的data
        this.instance.interceptors.response.use((res) => {
            return res.data
        }, err => {
            return err;
        })

    }
    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({ ...config, method: "get" })
    }

    post(config) {
        return this.request({ ...config, method: "post" })
    }
}

export default new HYRequest(BASE_URL, TIMEOUT)