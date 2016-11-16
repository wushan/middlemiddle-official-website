<template lang="pug">
  nav#navigation
    a.sticky-brand(href="/#wrapper")
      //- img(src="images/components/sticky-brand.svg")
    ul
      li
        //- a(href="javascript:;", @click="jumpTo('home')")
        router-link(v-bind:to="{ path: '/', hash: 'home'}")
          span 首頁
          span HOME
      li
        //- a(href="javascript:;", @click="jumpTo('fun')")
        router-link(v-bind:to="{ path: '/', hash: 'fun'}")
          span 遊戲
          span FUN
      li
        //- a(href="javascript:;", @click="jumpTo('foods')")
        router-link(v-bind:to="{ path: '/', hash: 'foods'}")
          span 美食
          span FOODS
      li
        //- a(href="javascript:;", @click="jumpTo('reservation')")
        router-link(v-bind:to="{ path: '/', hash: 'reservation'}")
          span 預約規則
          span RESERVATION
      li
        //- a(href="javascript:;", @click="jumpTo('map')")
        router-link(v-bind:to="{ path: '/', hash: 'map'}")
          span 導航
          span LOCATION
      li
        router-link(to="/wall", activeClass="active")
          span 恐龍牆
          span DINOWALL
    a.js-mobile-trigger.mobile-trigger.icons-mobile-btn.sb-toggle-left(href='javascript:;')
</template>

<script>
export default {
  components: {
  },
  methods: {
    jumpTo (to) {
      // console.log(this.$route.path)
      // if (this.$route.path === '/') {
      //   jump('#' + to, {
      //     duration: 1000,
      //     offset: -72,
      //     callback: undefined,
      //     a11y: false
      //   })
      // } else {
      //   this.$router.push('/')
      // }
    }
  }
}
</script>

<style lang="scss">
//Susy + BreakPoint
@import "bower_components/susy/sass/susy";
@import "bower_components/breakpoint-sass/stylesheets/breakpoint";
//Susy Global
@import "../assets/styles/lib/susy_global";
//Vars
@import "../assets/styles/lib/var/var";
@import "../assets/styles/lib/base";
  
nav {
  text-align: center;
  @extend .clr;
  //Normal
  ul {
    font-size: 0;
    display: none;
    li {
      display: inline-block;
      vertical-align: middle;
      font-size: 1rem;
      a {
        display: block;
      }
    }
  }
  a.sticky-brand {
    float: left;
  }
  a.mobile-trigger {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    vertical-align: middle;
    @include last;
  }
  //Nav in SlideBar
  &#navigation {
    position: fixed;
    top: 0;
    width: 100%; 
    z-index: 999;
    background-color: $white;
    ul {
      @extend .clr;
    }
  }
  //Nav in SlideBar
  &.slide {
    p {
      color: $white;
      text-align: center;
      font-size: .8em;
    }
    ul {
      display: block;
      margin: 0;
      padding: 0;
      li {
        display: block;
        a {
          display: block;
          color: $white;
          padding: 1em 0;
          &:hover {
            color: $black;
          }
          span {
            display: block;
          }
        }
        &:first-child {
          a {
            background-color: #FFDF71;
          }
        }
        &:nth-child(2) {
          a {
            background-color: #B8E986;
          }
        }
        &:nth-child(3) {
          a {
            background-color: #FF6348;
          }
        }
        &:nth-child(4) {
          a {
            background-color: #4CC5FF;
          }
        }
        &:last-child {
          a {
            background-color: #50E3C2;
          }
        }
      }
    }
  }
}

//Sticky
.is-sticky {
  nav#navigation {
    box-shadow: 0 1px 3px rgba($black, .33);
  }
}
@include susy-breakpoint(768px, 12) {
  nav {
    text-align: center;
    //Normal
    ul {
      display: block;
      li {
      }
    }
    a.sticky-brand {
      display: none;
    }
    a.mobile-trigger {
      display: none;
    }
    //Nav in SlideBar
    &#navigation {
      
      ul {
        display: block;
        margin: 0;
        padding: 0;
        li {
          display: block;
          @include gallery(2 of 12 0);
          a {
            display: block;
            background-color: $smokygray;
            color: $white;
            padding: .5em 1em;
            box-sizing: border-box;
            &:active, &:hover {
              color: $black;
            }
            span {
              display: block;
            }
          }
          &:first-child {
            a {
              background-color: #FFDF71;
            }
          }
          &:nth-child(2) {
            a {
              background-color: #B8E986;
            }
          }
          &:nth-child(3) {
            a {
              background-color: #FF6348;
            }
          }
          &:nth-child(4) {
            a {
              background-color: #4CC5FF;
            }
          }
          &:nth-child(5) {
            a {
              background-color: #3563A7;
            }
          }
          &:last-child {
            a {
              background-color: #50E3C2;
            }
          }
        }
      }
    }
  }
}

</style>
