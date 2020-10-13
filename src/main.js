import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

Array.prototype.random = function() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    return this[getRandomInt(this.length)];
}

createApp(App).use(router).mount('#app')