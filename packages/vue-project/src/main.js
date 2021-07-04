import { createApp } from 'vue'
import App from './App.vue'
const { util } = require('util-package')
const { component } = require('component-package')

util()
component()
createApp(App).mount('#app')
