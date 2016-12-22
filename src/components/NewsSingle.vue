<template lang="pug">
  #singleNews
    article
      .cover(v-bind:style="'background-image:url(' + article.thumbnail + ');'")
        .title
          h1 {{article.title}}
      .meta
        .restrict(v-timetag="article.time")
      .content.restrict(v-html="article.content")
</template>

<script>
import moment from 'moment'
import firebase from 'firebase'
var db = firebase.database()
export default {
  name: 'News',
  // props:
  methods: {
  },
  created () {
    this.loading = true
    this.$bindAsObject('article', db.ref('news').child(this.$route.params.id))
  },
  mounted () {
  },
  updated () {
    console.log('exed')
    if (this.article) {
      this.loading = false
    }
  },
  data () {
    return {
      loading: false
    }
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
#singleNews {
  .cover {
    position: relative;
    height: 40vh;
    background-position: center top;
    background-size: cover;
    background-color: $main;
    display: flex;
    -webkit-align-content: center;
            align-content: center;
    -webkit-justify-content: center;
            justify-content: center;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba($black, .6);
    }
    .title {
      align-self: center;
      position: relative;
      z-index: 1;
      h1 {
        color: $white;
      }
    }
  }
  .meta {
    text-align: right;
    background-color: $main;
    color: $white;
  }
  .content {
    color: $darkestgray;
    font-size: 1.1em;
  }
}
</style>
