<template lang="pug">
  #singleNews
    article
      .cover(v-bind:style="'background-image:url(' + article.thumbnail + ');'", v-bind:class="{video:article.videourl}")
        .video-wrapper.restrict(v-if="article.videourl")
            iframe(width="1280", height="720", v-bind:src="'https://www.youtube.com/embed/' + article.videourl" frameborder="0", allowfullscreen)
        .title.restrict(v-else)
          h1 {{article.title}}
      .meta
        .restrict
          .back
            router-link(to="/") 返回
          .author(itemprop="author") 中中親子樂園
          time(v-timetag="article.time")
      .content.restrict
        .title.restrict(v-if="article.videourl")
          h1 {{article.title}}
        .context(v-html="article.content")
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
    &.video {
      height: auto;
      background-color: $darkestgray;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba($black, .6);
      pointer-events: none;
    }
    .title {
      align-self: center;
      position: relative;
      text-align: center;
      z-index: 1;
      h1 {
        color: $white;
      }
    }
  }
  .video-wrapper {
    position: relative;
    flex: 1;
    z-index: 1;
    overflow: hidden;
    padding: 0;
    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-bottom: 56.25%;
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .meta {
    background-color: $main;
    color: $white;
    font-size: 12px;
    .restrict {
      display: flex;
    }
    .back {
      flex: initial;
      width: 50px;
      a {
        color: $white;
        text-decoration: underline;
      }
    }
    .author, time {
      flex: 1;
      opacity: .5;
    }
    time {
      text-align: right;
    }
  }
  .content {
    color: $darkestgray;
    font-size: 1.1em;
  }
}
</style>
