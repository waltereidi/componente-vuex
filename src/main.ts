
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
const app = createApp(App)

// Install the store instance as a plugin
app.use(store)


app.mount('#app')
store.commit('increment')
console.log(store.state.count) 