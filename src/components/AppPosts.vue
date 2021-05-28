

<template>
  <div>

    <div v-for="post in posts" :key="post.id">
      <h2>{{post.title}}</h2>
      <h3>{{post.text}}</h3>
    </div>
      


  </div>
</template>

<script>

import Posts from '../services/PostsService'

export default {
    data(){
        
    },

    created() {
        this.posts = Posts.getAll();
    }

}
</script>

<style>

</style>