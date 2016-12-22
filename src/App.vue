<template lang="pug">
  #wrapper
    transition(name="fade", mode="out-in")
      router-view
</template>

<script>
export default {
  components: {
  },
  mounted () {
  },
  data () {
    return {
      isActive: false,
      subscription: false,
      login: false,
      inquiryLength: 0,
      isAuth: false
    }
  }
}
</script>

<style lang="scss">
// Transitions
.fade-enter-active, .fade-leave-active {
  transition: .3s all ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
@import "src/assets/styles/main.scss";
#introslider {
  position: relative;
}

#intro {
  .intro-inner {
    background-color: $smokygray;
    .header {
      padding: 6em 0;
      background-image: url('assets/images/components/rainbowflag.svg');
      background-repeat: no-repeat;
      background-size: initial;
      img {
        display: none;
        width: 100%;
      }
    }
    .content {
      position: relative;
      z-index: 2;
      .title {
        text-align: center;
        h1 {
          font-weight: 300;
        }
      }
      
    }
    .footer {
      background-color: $lightgray;
        margin-top: -12em;
        width: 100%;
      padding: 6em 0;
      position: relative;
      background-image: url('assets/images/components/rainbowflag-shadow.svg');
      background-repeat: no-repeat;
      background-size: initial;
      img {
        display: none;
        width: 100%;
      }
    }
  }
}

#footer {
  background-color: $smokygray;
  .additional {
    background-color: $black;
    text-align: center;
    color: $white;
    padding: .3em 0;
    ul {
      font-size: .8em;
      margin: 0;
      padding: .1em 0;
    }
    li {
      display: inline-block;
      vertical-align: middle;
      padding: 0 1em;
    }
    a {
      color: $yellow;
    }
  }
  ul {
    margin: 0;
    padding: .5em 0;
    list-style-type: none;
    text-align: center;
    li {
      display: inline-block;
      vertical-align: middle;
      border-right: 1px solid $gray;
      a {
        color: $darkgray;
        padding: 0 1em;
        
      }
      &:last-child {
        border: 0;
      }
    }
  }
}

#about {
  background-color: rgba(#171212,.8);
  color: $white;
  padding: 4em 0;
  img {
    margin: 0 auto 4em auto;
  }
  h1 {
    text-align: center;
    font-weight: 300;
  }
}

#map {
  height: 60vh;
}

///Image Grid
#list {
  font-size: .8em;
  padding: 2em 1%;
  @extend .clr;
  .grid-sizer {
    width: 100%;
  }
  .gutter-sizer {
    width: 0%;
  }

  .block {
    width: 100%;
    margin-bottom: 1%;
    position: relative;
    background-color: white;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    // padding: 0 1em;
    // box-sizing: border-box;
    &:hover {
      background-color: #f7f7f7;
    }
    a {
      display: block;
    }
    img {
      filter:grayscale(50%);
      width: 100%;
    }
    &.wide {
      width: 100%;
    }
    .header {
      padding: .5em;
      text-align: left;
      .name {
        color: #125688;
        .avatar {
          margin-right: .8em;
          width: 50px;
          height: 50px;
          display: inline-block;
          vertical-align: middle;
          border-radius: 50%;
          background-position: center center;
          background-size: cover;
        }
      }
    }
    .instainfos {
      text-align: right;
      padding: 0 1em;
    }
    .likes {
      color: #F93771;
      margin-left: .5em;
      i {
        margin: 0 .3em;
      }
    }
  }
}
@include susy-breakpoint(768px, 12) {
  #reservation {
    .main {
      .block {
        @include gallery(4 of 12 1);
      }
    }
  }
  #list {
      .grid-sizer {
        width: 18.8%;
      }
      .gutter-sizer {
        width: 1%;
      }

      .block {
        width: 18.8%;
        a {
          display: block;
        }
        img {
          filter: grayscale(50%);
          width: 100%;
        }
        &.wide {
          width: 49.5%;
        }
        .header {
          padding: .5em;
          text-align: left;
        }
      }
  }
  #about {
    // .block {
    //  @include span(6 of 12);
    //  &:last-child {
    //    @include last;
    //  }
    // }
  }
}
@include susy-breakpoint(1024px, 12) {
  
  #intro {
    .intro-inner {
      .block {
        @include span(6 of 12);
        &:last-child {
          @include last;
        }
      }
    }
  }
}
@include susy-breakpoint(1366px, 12) {
}

@include susy-breakpoint(1440px, 12) {
  #intro {
    .intro-inner {
      .header, .footer {
        padding: 6em 0 2em 0;
        background-image: inherit;
        img {
          display: block;
        }
      }
      .footer {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}

</style>
