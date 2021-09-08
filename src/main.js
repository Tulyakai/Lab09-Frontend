import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GStore from './store'
import 'nprogress/nprogress.css'
import upperFirst from 'lodash/upperFirst'
import CamelCase from 'lodash/camelCase'

// Create a reactive object

const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)

const app = createApp(App)
requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
        CamelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
    )
    app.component(componentName, componentConfig.default || componentConfig)
})

app.use(router).provide('GStore', GStore).mount('#app')