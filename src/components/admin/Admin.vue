<template lang="pug">
  #login
    .restrict-l
      h1 Admin Panel
      router-view(v-bind:validuser="validuser")
        p X
</template>

<script>
import firebase from 'firebase'
// var db = firebase.database()
export default {
  name: 'Admin',
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.validuser = true
        this.user = user
      } else {
        this.validuser = false
      }
    })
  },
  mounted () {
  },
  data () {
    return {
      validuser: false,
      user: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1 {
  color: #42b983;
}
</style>
