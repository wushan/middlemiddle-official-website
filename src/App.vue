<template lang="pug">
  #wrapper
    navigation
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
import Navigation from './components/Navigation'

export default {
  components: {
    Navigation
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
  height: 80vh;
  position: relative;
  .bx-wrapper {
    height: 100%;
  }
  .bx-viewport {
    height: 100%;
  }
  .intro-slider {
    height: 100%;
    .slick-list, .slick-track {
      height: 100%;
    }
    .item {
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      font-size: 0;
      position: relative;
      text-align: center;
      &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        height: 100%;
        width: 0;
      }
    }
    .caption {
      // display: none;
      font-family: $brandon;
      // position: absolute;
      // top: 0;
      // bottom: 0;
      // margin: auto;
      display: inline-block;
      vertical-align: middle;
      // width: 100%;
      color: $white;
      text-align: center;
      font-size: 1.6rem;
      line-height: 1.3;
      h1 {
        font-weight: 100;
        font-style: italic;
        span {
          font-weight: 600;
        }
      }
      p {
        font-size: .7em;
      }
    }
  }
  //overlay
  .overlay-layer {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    #brand {
      position: absolute;
      left: 0;
      padding: 1em;
      img {
        width: 100%;
      }
      a {
        display: block;
      }
      .caption {
        border-top: 1px solid $white;
        padding-top: .5em;
        margin-top: 1em;
        font-size: .8em;
        font-weight: 100;
        color: $white;
        p {
          margin: 0;
          // word-break: break-word;
        }
      }
    }
    .sharebar {
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: 4em;
      left: 1em;
      z-index: 9999;
      li {
        display: inline-block;
        vertical-align: middle;
        a {
          display: block;
        }
      }
    }
  }
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
      height: 400px;
      // @include span(6 of 12 0);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      font-size: 0;
      position: relative;
      p {
        display: none;
      }
      &:last-child {
        box-sizing: border-box;
        padding: 1em;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        text-align: center;
        color: $white;
        // background-color: rgba($black, .7);
      }
      &:after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 100%;
      }
      .block-inner {;
        font-size: 1rem;
        display: inline-block;
        vertical-align: middle;
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
#foods {
  background-image: url('assets/images/components/food-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  // height: 80vh;
  box-sizing: border-box;
  padding: 4em 0;
  img {
    margin-bottom: -9em;
  }
  header {
    color: $white;
    h1 {
      text-align: center;
      font-weight: 500;
      small {
        font-size: .7em;
        display: block;
        font-weight: 100;
        span {
          font-weight: 600;
        }
      }
    }
  }
  .main {
    text-align: center;
    color: $white;
  }
}

#reservation {
  padding: 4em 0;
  span {
    font-weight: 600;
  }
  header {
    text-align: center;
    .phone-number {
      font-size: 3em;
      font-weight: 100;
      line-height: 1;
    }
  }
  .main {
    text-align: center;
    ol {
      padding: 0;
      // list-style-position: inside;
      margin-left: 1em;
    }
    .open-hour {
      font-size: 110%;
    }
    .row {
      margin-top: 2em;
      padding-top: 2em;
      border-top: 1px solid $lightgray;
      text-align: left;
      .block {
        // @include gallery(4 of 12 1);
      }
    }
  }
}
#doc {
  background-color: $black;
  position: relative;
  header {
    h1 {
      color: $white;
      text-align: center;
      font-style: italic;
      font-size: 3em;
      font-weight: 100;
      word-break: break-word;
      small {
        display: block;
        font-size: .4em;
        font-style: normal;
      }
    }
  }
}
#instagram {
  position: relative;
  .block {
    @include gallery(2 of 10 0);
    img {
      width: 100%;
      @extend .transition;
      filter: sepia(.5) grayscale(.7) brightness(.2);
      // filter: brightness(50%);
    }
    &:hover {
      img {
        filter: sepia(0) grayscale(0) brightness(1);
      }
    }
  }
  .overlay {
    // background-color: rgba($black, .7);
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    font-size: 0;
    text-align: center;
    &:before {
      content: '';
      width: 0;
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .inner {
      font-size: 1rem;
      display: inline-block;
      vertical-align: middle;
      
    }
    h1 {
      // font-size: 4em;
      font-weight: 100;
      font-style: italic;
      text-align: center;
      a {
        color: $white;
      }
    }
    span {
      display: block;
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
  #introslider {
    .overlay-layer {
      #brand {
        a {
          display: block;
        }
        .caption {
          border-top: 1px solid $white;
          padding-top: .5em;
          margin-top: 1em;
          font-size: .8em;
          font-weight: 100;
          color: $white;
          // word-break: break-word;
          width: 174px;
          p {
            margin: 0;
            // word-break: break-word;
          }
        }
      }
      .sharebar {
        left: 0;
        right: 0;
        text-align: right;
        padding: 0 2em;
        // margin: 0;
        // padding: 0;
        // position: absolute;
        // top: 4em;
        // right: .7em;
        // z-index: 9999;
        // li {
        //  display: block;
        // }
      }
    }
  }
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
  #introslider {
    .overlay-layer {
      #brand {
        img {
          width: auto;
          height: 100%;
        }
        a {
          height: 100%;
        }
      }
    }
  }
}

@include susy-breakpoint(1440px, 12) {
  #introslider {
    .overlay-layer {
      #brand {
        img {}
      }
    }
  }
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
