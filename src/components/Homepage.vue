<template>
  <div>
    <h1>Hello from Homepage</h1>
    <div>{{obj}}</div>
  </div>
</template>

<script>
import firebase from '../firebaseConfig'

export default {
  name: 'Homepage',
  data(){
    return {
      obj: null
    }
  },
  methods:{
    async addBlog(){
      console.log('triggering')
      const doc = await firebase.firestore().collection('Blog').add({
        title: 'blog 1',
        time_created: (new Date()).getTime(),
        content: 'Today, I went to the kitchen. This is the content for blog one.'
      })
      console.log('done', doc)
    }


  },
  

}
</script>