// import Vue from '../node_modules/vue/dist/vue'
import Vue from 'vue'
import app from '../App.vue'
// import './css/index.less'
var vm = new Vue({
    el:'#app',
    render:c =>c(app),
})

