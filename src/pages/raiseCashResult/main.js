import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        navigationBarTitleText: '提现',
        enablePullDownRefresh: true,
        onReachBottomDistance: 50
    }
}
