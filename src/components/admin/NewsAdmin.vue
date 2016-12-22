<template lang="pug">
#newsAdmin
  .button-group
    router-link.btn.basic(to="/admin/home/news/add") 新增新聞
  transition(name="fade", mode="out-in")
    router-view
</template>
<script>
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
    width: 120px;
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
