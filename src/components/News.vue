<template lang="pug">
  #newsCard
    .restrict-l
      ul
        li(v-for="news in newsList", :key="news['.key']")
          .thumbnail
            router-link(v-bind:to="'/news/single/' + news['.key']")
              img(v-bind:src="news.thumbnail")
          .news-content
            h4.title
              router-link(v-bind:to="'/news/single/' + news['.key']") {{news.title}}
            .date(v-timetag="news.time")
            .content(v-html="news.content")
</template>

<script>
import moment from 'moment'
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
  created () {
    console.log('created')
  },
  methods: {
  },
  firebase: {
    // simple syntax, bind as an array by default
    newsList: db.ref('news').limitToLast(4)
  },
  mounted () {
    console.log('createdmm')
  },
  directives: {
    // Custom Directive
    timetag (el, timestamp) {
      if (timestamp.value) {
        el.innerText = moment(timestamp.value).format('YYYY/MM/DD') // and set to the view
      }
    }
  }
}
</script>

<style lang="scss">
//Susy + BreakPoint
@import '../../bower_components/susy/sass/susy';
@import '../../bower_components/breakpoint-sass/stylesheets/breakpoint';
@import "../assets/styles/lib/var/_var";
@import "../assets/styles/lib/base";
#newsCard {
  background-color: $white;
  min-height: 1383px;
  @include breakpoint(768px) {
    min-height: 777px;
  }
  @include breakpoint(1024px) {
    min-height: 900px;
  }
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
    margin: .5em 0 0 0;
  }
  .news-content {
    padding: 0 .5em;
  }
  .thumbnail {
    position: relative;
    overflow: hidden;
    box-shadow: 0 3px 3px rgba($black, .33);
    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 56.25%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  .title {
    a {
      color: $black;
    }
  }
  .content {
    color: $darkgray;
    font-size: 14px;
    height: 5em;
    overflow: hidden;
  }
  .date {
    color: $gray;
    font-size: 12px;
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
