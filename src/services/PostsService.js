import axios from 'axios';

 class Posts{

    constructor(){
        const instance = axios.create({
            baseURL:"http://localhost:3000"

        });

        this.client = instance;
    }

    async getAll(){

        const {data} = await this.client.get('posts');
        return data;

    }

    async getSinglePost (id) {
        const singlePost = await this.client.get(`posts/${id}`)
        return singlePost;
      }

      async addPost (post) {
        const newPost = await this.client.post(post)
        
        return newPost;
      }

}

export const posts =  new Posts();