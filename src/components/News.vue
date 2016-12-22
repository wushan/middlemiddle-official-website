<template lang="pug">
  #news
    .restrict-l
      ul
        li(v-for="news in newsList")
          .thumbnail
            img(v-bind:src="news.thumbnail")
          h4.title {{news.title}}
          .content {{news.content}}
</template>

<script>
import firebase from 'firebase'
var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCP0tdpg-QON43J_b_2cVgzGDZI_n9EBPE',
  authDomain: 'my-dino-f5e4a.firebaseapp.com',
  databaseURL: 'https://my-dino-f5e4a.firebaseio.com',
  storageBucket: 'my-dino-f5e4a.appspot.com',
  messagingSenderId: '96281735753'
})
var db = firebaseApp.database()
export default {
  name: 'News',
  // props:
  methods: {
  },
  firebase: {
    // simple syntax, bind as an array by default
    newsList: db.ref('news').limitToLast(4)
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  //Susy + BreakPoint
  @import '../../bower_components/susy/sass/susy';
  @import '../../bower_components/breakpoint-sass/stylesheets/breakpoint';
  @import "../assets/styles/lib/var/_var";
  @import "../assets/styles/lib/base";
  #news {
    background-color: $white;
    ul {
      display: block;
      padding: 1em;
      -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
              flex-wrap: wrap;
      li {
        display: block;
        flex: initial;
        box-sizing: border-box;
        padding: 0 .5em;
        margin-bottom: 2em;
        border-bottom: 1px solid $lightgray;
      }
    }
    h4 {
      margin: .5em 0;
    }
    .title {
      padding: .5em 1em;
    }
    .content {
      display: none;
      color: $darkgray;
    }
    @include breakpoint(768px) {
      ul {
        display: flex;
        -webkit-align-content: center;
                align-content: center;
        -webkit-justify-content: center;
                justify-content: center;
        li {
          flex: initial;
          width: 45%;
          border-bottom: 0;
        }
      }
    }
    @include breakpoint(1280px) {
      ul {
        li {
          flex: 1;
          width: auto;
        }
      }
    }
  }
</style>
