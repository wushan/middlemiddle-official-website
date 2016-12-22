<template lang="pug">
  #wrapper
    transition(name="fade", mode="out-in")
      router-view
    footer
      #footer
        ul
          li
            a(href="javascript:;") Term of Use
          li
            a(href="/privacy-policy.html") Privacy Policy
          li
            a(href="javascript:;") Media Pack
        .additional
          ul
            li.title 「中中親子樂園」
            li.address 台中市北屯區松竹五路 172 號
            li.tel (04)2437-1266
            li.mail.
              連絡信箱 <a href="mailto:service@middlemiddle.com">service@middlemiddle.com</a>
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

#fun {
  text-align: center;
  h2 {
    font-weight: 100;
    margin: 0;
    span {
      color: $gray;
      display: block;
      font-size: .5em;
      font-style: italic;
      font-weight: 600;
    }
  }
  img {
    width: 100%;
  }
  .col {
    position: relative;
    @extend .clr;
    .block {
      @extend .transition;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      font-size: 0;
      position: relative;
      overflow: hidden;
      p {
        display: none;
      }
      &:last-child {
        box-sizing: border-box;
        padding: 1em;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        color: $white;
        display: flex;
        -webkit-align-content: center;
        align-content: center;
        -webkit-justify-content: center;
        justify-content: center;
        // background-color: rgba($black, .7);
      }
      // &:after {
      //   content: '';
      //   display: inline-block;
      //   vertical-align: middle;
      //   width: 0;
      //   height: 100%;
      // }
      .block-inner {
        font-size: 1rem;
        display: inline-block;
        vertical-align: middle;
        -webkit-align-self: center;
        align-self: center;
      }
      .overlay {
        @extend .transition;
        background-color: rgba($black, .7);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
    &:hover {
      .block {
        // background-color: $smokygray;
        &:last-child {
          // background-color: $smokygray;
        }
        .overlay {
          background-color: transparent;
        }
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
  #fun {
    .col {
      &:nth-child(2n) {
        .block {
          &:first-child {
            @include last;
          }
        }
      }
      .block {
        @include span(6 of 12 0);
        box-sizing: border-box;
        padding: 1em 2em;
        p {
          display: block;
        }
        &:last-child {
          position: static;
          background-color: $white;
          color: $black;
          box-sizing: border-box;
          padding: 30px;
        }
      }
    }
  }
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
  #fun {
    .col {
      @include gallery(3 of 12 0);
      &:nth-child(2n) {
        .block {
          &:first-child {
            float: none;
          }
        }
      }
      .block {
        @include full;
        .block-inner {
          display: block;
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
