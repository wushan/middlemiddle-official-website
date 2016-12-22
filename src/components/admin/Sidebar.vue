<template lang="pug">
  #sidebar
    ul
      li
        router-link(to="/admin/home", active-class="active" exact) 管理首頁
      li
        router-link(to="/admin/home/news", active-class="active" exact) 新聞

</template>

<script>
export default {
  name: 'Sidebar',
  mounted () {
  },
  updated () {
  },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../../bower_components/susy/sass/susy";
@import "../../../bower_components/breakpoint-sass/stylesheets/breakpoint";
@import "../../assets/styles/lib/var/_var";
#sidebar {
  border-right: 1px solid $lightgray;
  ul {
    display: block;
    margin: 0;
    padding: 0;
    li {
      display: block;
      list-style-type: none;
      a {
        display: block;
        padding: 0.5em 1em;
        &.active {
          background-color: $main;
          color: $white;
        }
      }
    }
  }
}
</style>
