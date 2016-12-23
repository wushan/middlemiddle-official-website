<template lang="pug">
  section#fun
    .fun-features
      .fun-feature
        .thumbnail
          img(src='../assets/images/components/fun-block-1.png')
          .overlay
        .description
          .description-inner
            h2(itemprop="name").
              溜滑梯<span>Super Slide</span>
            p(itemprop="description").
              「中中親子樂園」引進義大利進口筒狀螺旋溜滑梯，3.5 公尺超高設計，溜下時能體驗宛如自由落體般的速度快感，讓孩子們對於他們最愛的溜滑梯有全新感受。
        
      .fun-feature
        .thumbnail
          img(src='../assets/images/components/fun-block-2.png')
          .overlay
        .description
          .description-inner
            h2(itemprop="name").
              木製玩具<span>Mentari Plaza</span>
            p(itemprop="description").
              中中親子樂園採用在木頭玩具領域耕耘超過 20 年，產品符合 SGS 國際認證的玩具品牌 Mentari ，木質玩具豐富的觸感與益智功能，讓您的小朋友能夠安安心心的玩玩具！*本店提供 Mentari 木製玩具代購，若在店內看到喜歡的木頭玩具也可以詢問店員！
      .fun-feature
        .thumbnail
          img(src='../assets/images/components/fun-block-3.png')
          .overlay
        .description
          .description-inner
            h2(itemprop="name").
              寶寶專屬<span>Baby fun</span>
            p(itemprop="description").
              「中中親子樂園」特別為小小寶貝開闢專屬的遊戲專區，藉由特別訂製的軟墊與圍欄，不只讓寶寶玩得開心，爸爸媽媽也不用再擔心小寶貝撞來撞去發生危險！

      .fun-feature
        .thumbnail
          img(src='../assets/images/components/fun-block-4.png')
          .overlay
        .description
          .description-inner
            h2(itemprop="name").
              超大空間<span>Playground</span>
            p(itemprop="description").
              「中中親子樂園」，盡可能地壓縮用餐空間，為小朋友提供大量的遊戲場所，不定期更新各類玩具、童書，讓小朋友快樂吃，開心玩，不再吵著要回家！
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../bower_components/susy/sass/susy";
@import "../../bower_components/breakpoint-sass/stylesheets/breakpoint";
@import "../assets/styles/lib/var/_var";
@import "../assets/styles/lib/base";
#fun {
  .fun-features {
    .fun-feature {
      .thumbnail {
        position: relative;
        padding-top: 100%;
        img {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
        }
      }
      .description {
        .description-inner {
          padding: 1em 2em;
          h2 {
            margin: 0;
            text-align: center;
            span {
              display: block;
              font-size: .5em;
            }
          }
          p {
            color: $darkgray;
          }
        }
      }
    }
    @include breakpoint(768px) {
      .fun-feature {
        display: flex;
        -webkit-align-content: center;
                align-content: center;
        -webkit-justify-content: center;
                justify-content: center;
        .thumbnail, .description {
          flex: 1;
          align-self: center;
        }
        .thumbnail {
          padding: 0;
          img {
            position: static;
          }
        }
        &:nth-child(even) {
          -webkit-flex-direction: row-reverse;
              -ms-flex-direction: row-reverse;
                  flex-direction: row-reverse;
          .thumbnail {
            
          }
          .description {

          }
        }
      }
    }
    @include breakpoint(1024px) {
      display: flex;
      .fun-feature {
        display: block;
        flex: 1;
        .thumbnail {
          padding-top: 100%;
          overflow: hidden;
          &:hover, &:active {
            img {
              transform: scale(1.2);
              filter: grayscale(0);
            }
          }
          img {
            transition: .6s all ease-out;
            position: absolute;
            transform: scale(1.05);
            filter: grayscale(100%);
          }
        }
      }
    }
  }
}
</style>
