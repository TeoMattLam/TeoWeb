import './styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Impostor from './components/project_pages/Impostor.vue'
import TrackTab from './components/project_pages/TrackTab.vue'
import RandoClasser from './components/project_pages/RandoClasser.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Home", component: Home},
        { path: "/projects/impostor", name: "Impostor", component: Impostor},
        { path: "/projects/tracktab", name: "TrackTab", component: TrackTab},
        { path: "/projects/randoclasser", name: "RandoClasser", component: RandoClasser}
    ]
})

router.beforeEach((to, from, next) => {
  document.title = "TeoMatt - " + to.name;
  next();
});


createApp(App).use(router).mount('#app')
