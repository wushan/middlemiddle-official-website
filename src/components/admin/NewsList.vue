<template lang="pug">
#newsList
  ul
    li(v-for="article in news")
      .thumbnail
        img(:src="article.thumbnail")
      .title
        router-link(:to="'/admin/home/news/modify/' + article['.key']") {{article.title}}
      .date(v-timetag="article.time") {{news.time}}
</template>
<script>
import moment from 'moment'
import firebase from 'firebase'
var db = firebase.database()
export default {
  name: 'newsList',
  props: ['validuser'],
  components: {
  },
  mounted () {
  },
  data () {
    return {
      content: null,
      editorOption: {
       // something config
      }
    }
  },
  methods: {
  },
  firebase: {
    news: db.ref('news')
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../../bower_components/susy/sass/susy";
@import "../../../bower_components/breakpoint-sass/stylesheets/breakpoint";
@import "../../assets/styles/lib/var/_var";
#newsList {
  ul {
    li {
      display: flex;
      -webkit-align-items: center;
              align-items: center;
      padding: .5em 0;
      border-bottom: 1px solid $lightgray;
    }
  }
  .thumbnail {
    position: relative;
    overflow: hidden;
    flex: initial;
    width: 60px;
    background-color: $lightgray;
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
    padding: 0 1em;
    flex: 1;
  }
}
</style>
