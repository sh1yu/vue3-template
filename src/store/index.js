import {createStore} from 'vuex'
import {setToken, getToken, removeToken} from "@/utils/cookie"

export default createStore({
    state: {
        token: '',
        username: ''
    },
    mutations: {
        // 存储token
        setToken(state, token) {
            state.token = token
            setToken(token)
        },
        // 清除token
        delToken(state) {
            state.token = ''
            removeToken()
        },
        // 存储username
        setUsername(state, username) {
            state.username = username
        }
    },
    getters: {
        // 获取token方法
        getToken(state) {
            if (!state.token) {
                state.token = getToken()
            }
            return state.token
        },
        getUsername(state) {
            return state.username
        }
    },
    actions: {},
    modules: {}
})
