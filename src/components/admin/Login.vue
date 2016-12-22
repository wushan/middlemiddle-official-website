<template lang="pug">
  #login
    h4 Login
    form(@submit.prevent.stop="signin")
      .controlgroup
        label Account
        .controls
          input(type="text", name="account")
      .controlgroup
        label Password
        .controls
          input(type="password", name="password")
      button.btn.basic.full(type="submit") Login
</template>

<script>
import firebase from 'firebase'
// var firebaseApp = firebase.initializeApp({
//   databaseURL: 'https://my-dino-f5e4a.firebaseio.com', // Realtime Database
//   storageBucket: 'gs://my-dino-f5e4a.appspot.com'          // Storage
// })
export default {
  name: 'login',
  props: ['validuser'],
  mounted () {
    console.log(this.validuser)
  },
  watch: {
    'validuser': 'redirect'
  },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
    redirect () {
      console.log(this.validuser)
      if (this.validuser) {
        this.$router.push('/admin/home')
      }
    },
    signin (e) {
      var account = e.target.elements.account.value
      console.log(account)
      var password = e.target.elements.password.value
      // console.log(e.target.elements.account)
      firebase.auth().signInWithEmailAndPassword(account, password).catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        console.log(error)
        // ...
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
