<template>
  <div >
    <form @submit.prevent="onSubmit">
      <div >
        <label ></label>
        <div >
          <input id="title" name="title" placeholder="Title" type="text"  required="required"  minlength="2" v-model="newPost.title">
        </div>
      </div>
      <div >
        <label ></label>
        <div >
          <input id="text" name="text" placeholder="Please write contnet here" type="text" maxlength="300" required="required"  v-model="newPost.text">
        </div>
      </div>
      <div >
        <div >
          <button name="submit" type="submit">Submit</button>
          <button name="reset" type="reset" >Reset</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>


import Posts from '../services/PostsService'
export default {

      data () {
    return {
      newPost: {
        title: '',
        text: '',
      },
     isEditing: false
    }
  },

    created(){
        this.posts = Posts.add(this.newPost)
    },

    methods:{
      
      async onSubmit () {
        try {
            await Posts.add(this.newPost)
            this.$router.push('/posts')
        } catch(error){
            alert('Greska! Niste dobro uneli neophonde podatke');
        }
    },

          reset(){

            this.post.title = '';
            this.post.title = '';

      }
  


       
    }

    

   


   

}
</script>

<style>

</style>