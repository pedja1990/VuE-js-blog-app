<template>
    <div >
        <div v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <div>{{ post.text.substr(0, 20) }}...</div>
        <div>
             <span >Posted at {{ post.createdAt }}</span>
        </div>
        <div>
        <router-link :to="{ name: 'view', params: { id: post.id } }">View Post</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from '../services/PostsService'
export default {

    
    data(){
        
    },

    created() {
        this.posts = Posts.getSinglePost();
    }



}
</script>

<style>

</style>