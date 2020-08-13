import Vue from 'vue'
import App from './app.vue'

new Vue(
    {
        render:(h)=>h(App)

    }
).$mount(root)


const root = document.createElement('div')
document.body.appendChild(root)