import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config:{
        navigationBarTitleText: "货源大厅",
        enablePullDownRefresh: true,
        onReachBottomDistance: 50
    }
}