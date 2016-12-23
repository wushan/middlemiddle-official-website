<template lang="pug">
  #login
    .restrict-l
      h1 Admin Panel
      transition(name="fade", mode="out-in")
        router-view(v-bind:validuser="validuser")
</template>

<script>
import firebase from 'firebase'
// var db = firebase.database()
export default {
  name: 'Admin',
  methods: {
    signout () {
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log('signed out')
      }, function (error) {
        // An error happened.
        console.log(error)
      })
    },
    redirect () {
      this.$router.replace('/admin/login')
    }
  },
  created () {
    this.$on('signout', () => {
      this.validuser = false
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.validuser = true
        this.user = user
      } else {
        this.validuser = false
        this.redirect()
      }
    })
  },
  watch: {
    'validuser': 'redirect'
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
</style>
