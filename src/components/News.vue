<template lang="pug">
  #news
    ul
      li(v-for="news in newsList")
        h2.title {{news.title}}
        .content {{news.content}}
</template>

<script>
import firebase from 'firebase'
var firebaseApp = firebase.initializeApp({
  databaseURL: 'https://my-dino-f5e4a.firebaseio.com', // Realtime Database
  storageBucket: 'gs://my-dino-f5e4a.appspot.com'          // Storage
})
var db = firebaseApp.database()
export default {
  name: 'News',
  // props:
  methods: {
  },
  firebase: {
    // simple syntax, bind as an array by default
    newsList: db.ref('news').limitToLast(5)
  },
  mounted () {
  }
}
</script>

<style lang='scss'>
  //Susy + BreakPoint
  @import '../../bower_components/susy/sass/susy';
  @import '../../bower_components/breakpoint-sass/stylesheets/breakpoint';
  @import "../assets/styles/lib/var/_var";
  @import "../assets/styles/lib/base";
  #news {

  }
</style>
