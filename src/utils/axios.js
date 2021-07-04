import axios from 'axios'
import {ElMessageBox} from 'element-plus'
import router from '@/router'
import store from '@/store'

axios.defaults.baseURL = 'http://127.0.0.1:8080/'
axios.defaults.withCredentials = true
axios.defaults.timeout = 10000
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = store.getters.getToken || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(
    config => {
        // do something before request is sent
        return config
    }
)

axios.interceptors.response.use(
    res => {
        if (typeof res.data !== 'object') {
            ElMessageBox.alert("服务器异常，请稍后再试！")
            return Promise.reject(res)
        }

        // do something by data.code
        if (res.data.code === 416) {
            router.push({path: '/login'})
            return Promise.reject(res.data)
        }

        if (res.data.code !== 200) {
            if (res.data.message) ElMessageBox.alert(res.data.message)
            return Promise.reject(res.data)
        }

        return res.data
    }
)

export default axios