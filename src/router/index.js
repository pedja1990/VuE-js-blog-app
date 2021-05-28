import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import AppPosts from '../components/AppPosts.vue'
import SinglePost from '../components/SinglePost.vue'
import AddPost from '../components/AddPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect : '/posts'
  },
  {
    path: '/post',
    name: 'Posts',
    component: AppPosts
    
  },
  {
    path: '/post/:id',
    name: 'SinglePost',
    component: SinglePost
    
  },
  {
    path: '/add',
    name: 'AddPost',
    component: AddPost
    
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
