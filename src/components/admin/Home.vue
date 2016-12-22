<template lang="pug">
  #adminHome
    h4 adminHome
    p let's put some new record here
    .contorlgroup
      label 文章標題
      .controls
        input(type="text", name="title")
    .contorlgroup
      label 文章
      .controls
        textarea(name="content")
    .call-action
      button.btn.basic.full(type="submit") Submit
</template>

<script>
// import firebase from 'firebase'
// var firebaseApp = firebase.initializeApp({
//   databaseURL: 'https://my-dino-f5e4a.firebaseio.com', // Realtime Database
//   storageBucket: 'gs://my-dino-f5e4a.appspot.com'          // Storage
// })
export default {
  props: ['validuser'],
  mounted () {
    // if (this.validuser) {
    //   this.$nextTick(() => {
    //     this.$router.push('/admin')
    //   })
    // }
  },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1 {
  color: #42b983;
}
</style>
