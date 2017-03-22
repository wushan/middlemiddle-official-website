<template lang="pug">
  main
    #home
      //- section#introslider
      //-   .slider.js_slider
      //-     .frame.js_frame
      //-       ul.slides.js_slides
      //-         li.js_slide
      //-           img(src="../assets/images/slider/main-slide-1.jpg")
      //-         li.js_slide
      //-           img(src="../assets/images/slider/main-slide-2.jpg")
      //-         li.js_slide
      //-           img(src="../assets/images/slider/main-slide-3.jpg")
      //-         li.js_slide
      //-           img(src="../assets/images/slider/main-slide-4.jpg")
      //-     span.js_prev.prev
      //-       svg(xmlns="http://www.w3.org/2000/svg", width="50", height="50", viewBox="0 0 501.5 501.5")
      //-         g
      //-           path(fill="#2E435A", d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z")

      //-     span.js_next.next
      //-       svg(xmlns="http://www.w3.org/2000/svg", width="50", height="50", viewBox="0 0 501.5 501.5")
      //-         g
      //-           path(fill="#2E435A", d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z")
      //-     //- prev(slot="actions")
      //-     //- next(slot="actions")
      section#intro
        .intro-inner
          .header
            img(src='../assets/images/components/rainbowflag.svg')
          .content
            .row.restrict
              .block
                .title
                  h1
                    | 中中親子樂園
                    span 孩子們的快樂天堂
                p.
                  一個安全、舒適，能讓孩子與家長們真正放鬆的地方，一起動腦玩拼圖、疊積木，開心地推著嘎嘎作響的滑步車，讓每位來到這裡的朋友，見到孩子與自己發自內心的笑容，是我們時時提醒自己的初衷。
              .block
                img(src='../assets/images/components/dino.svg')
          .footer
            img(src='../assets/images/components/rainbowflag-shadow.svg')
      news
      fun
      section#about
        .row.restrict
          .block
            img(src='../assets/images/components/avatar.png')
            //- h1 從頭開始
          .block
            .paragraph
              p.
                我們是一對新手爸媽，對於育兒，我們一點兒經驗也沒有。

              p.
                我們不知道這個月孩子的身高體重發展是否正常，我們不知道孩子哭的意是什麼，我們不知道如何幫孩子洗澡，也不懂發燒到幾度才需要看醫生。我們都想對自己的孩子好，但卻不知道「好」的定義是什麼？買昂貴的玩具？動輒十數萬元的語言教材？你選百歲派還是親密派？你選的，到底對嗎？

              p.
                我們真的不知道，但是我們確信，每做一件事，都是孩子與我們的第一次。而每一刻都值得紀念。

              p.
                與孩子珍貴的相處時光非常短暫，一秒鐘也不該浪費，從成為父母開始，每到難得的週末假日，都思考著要帶孩子去哪裡，才能讓孩子擁有愉快的情緒，同時也不致破壞父母難得的好心情？「這裡人多不要去；那裡沒冷氣；這裡有蚊子；那裡食物不好吃」，走過十數家親子餐廳，總是覺得沒有一個地方屬於我們。

              p.
                於是我們開始構思 「middlemiddle 中中親子樂園」，一個安全、舒適，能讓孩子與家長們真正放鬆的地方，一起動腦玩拼圖、疊積木，開心地推著嘎嘎作響的滑步車，讓每位來到這裡的朋友，見到孩子與自己發自內心的笑容，是我們時時提醒自己的初衷。

              p.
                我們相信，快樂的情緒絕對是一種病，而且絕對會快速傳染、蔓延。帶著您的孩子來到這裡，一起接受我們的快樂傳染吧！

      section#foods
        header
          h1 我們自己吃的食材，與您分享<small>We provide only <span>foods</span> we eat to you.</small>
        .main
          .restrict
            p.
              「中中親子樂園」只提供您最天然的食材，用最簡單的烹煮方法，讓您享用食材最原始的滋味。<br>在這裡，您只吃得到我們自己以及給孩子吃的食物，相信我們，一定比您更重視「食」的安全。
          img(src='../assets/images/components/dish.png')
      section#dish
        header
          h1 菜單 Dishes
        .main
          .restrict-l
            h3
              | 墨西哥餅
              span Quesadilla
            ul.dishes
              li
                .name
                  | 厚切烤肉墨西哥餅
                  span Chinese BBQ(Pork) Quesadilla
                .price 180
              li
                .name
                  | 煙燻雞肉墨西哥餅
                  span Chinese BBQ(Pork) Quesadilla
                .price 180
              li
                .name
                  | 蔬果墨西哥餅
                  span Vegetable and Fruits Quesadilla
                .price 180
              li
                .name
                  | 義式煙薰德腸墨西哥餅
                  span Würstchen Quesadilla
                .price 180
              li
                .name
                  | 鮪魚起士墨西哥餅
                  span Tuna Quesadilla
                .price 180
            h3
              | 主餐
              span Main Dish
            ul.dishes
              li
                .name
                  | 清燉香菇雞湯麵
                  span Chicken soup with noodles
                .price 160
              li
                .name
                  | 日式咖哩起士豬排飯
                  span Japanese style curry rice with deep fried pork chop
                .price 180
              li
                .name
                  | 南洋青醬奶油燻雞燉飯
                  span Pesto Risotto with smoked chicken
                .price 180
              li
                .name
                  | 佛羅倫斯青醬義大利麵
                  span Spaghetti with mushroom and Pesto
                .price 180
              li
                .name
                  | 鄉村奶油野菇燉飯
                  span Cream Risotto with mushroom
                .price 180
              li
                .name
                  | 奶油起士燻雞義大利麵
                  span Spaghetti with smoked chicken and cream sauce
                .price 180
              li
                .name
                  | 義式番茄德腸義大利麵
                  span Spaghetti with Würstchen and tomato sauce
                .price 180
              li
                .name
                  | 傳統義大利肉醬麵
                  span Spaghetti Bolognese
                .price 180
              li
                .name
                  | 中中阿嬤私房菜
                  span Grandma's Special Dish
                .price 時價
            .annoucements.centered
              p 中中阿嬤私房菜僅在週末或連續假期供應，並且經常性的更新菜色，供應數量有限，售完為止！
              p 如果您有吃到阿嬤的味道，歡迎跟我們分享！
            h3
              | 厚片
              span Thick cut Toast
            ul.dishes
              li
                .name
                  | 一粒粒花生厚片
                  span Thick cut toast with peanut butter 
                .price 70
              li
                .name
                  | Nutella 巧克力厚片
                  span Thick cut toast with Nutella
                .price 70
              li
                .name
                  | 中中新鮮大蒜厚片
                  span Thick cut toast with homemade garlic spread
                .price 80
              li
                .name
                  | 魚兒魚兒游啊游
                  span Thick cut toast with tuna and cheese
                .price 100
              li
                .name
                  | 起士玉米厚片
                  span Thick cut toast with corn and cheese
                .price 100
            h3
              | 點心
              span Snacks
            ul.dishes
              li
                .name
                  | 脆皮薯條
                  span French Fries
                .price 80
              li
                .name
                  | 酥炸洋蔥圈
                  span Onion Rings
                .price 100
              li
                .name
                  | 牽絲起士條
                  span Mozzarella Sticks
                .price 120
              li
                .name
                  | 好好吃雞塊
                  span Chicken Nuggets
                .price 100
              li
                .name
                  | 四種好滿足
                  span I want them all
                .price 250
            h3
              | 鬆餅
              span Waffles
            ul.dishes
              li
                .name
                  | 香蕉巧克力鬆餅
                  span Banana Chocolate Waffle
                .price 170
              li
                .name
                  | QQ 麻糬鬆餅
                  span Mochi Waffle
                .price 170
              li
                .name
                  | 莓果鬆餅
                  span Berries Waffle
                .price 180
              li
                .name
                  | 蜜香鬆餅
                  span Honey Waffle
                .price 170
            h3
              | 咖啡
              span Coffee
            ul.dishes
              li
                .name
                  | 美式咖啡
                  span Americano
                .price 80
              li
                .name
                  | 曼特寧咖啡
                  span Medellin Coffee
                .price 120
              li
                .name
                  | 巴西咖啡
                  span Brazilian Coffee
                .price 100
              li
                .name
                  | 曼巴咖啡
                  span Medellin and Brazilian Coffee
                .price 120
              li
                .name
                  | 拿鐵
                  span Latte
                .price 100
              li
                .name
                  | 豆漿拿鐵
                  span Soy Latte
                .price 100
              li
                .name
                  | 摩卡
                  span Coffee Mocha
                .price 120
            h3
              | 飲料
              span Drinks
            ul.dishes
              li
                .name
                  | 紅茶
                  span Black Tea
                .price 60
              li
                .name
                  | 熱可可
                  span Hoy Chocolate
                .price 80
              li
                .name
                  | 中中奶茶
                  span Milk Tea Special
                .price 80
              li
                .name
                  | 鮮奶茶
                  span Milk Tea
                .price 100
              li
                .name
                  | 黑糖鮮奶
                  span Milk with dark brown sugar
                .price 100
              li
                .name
                  | 芝麻豆漿
                  span Sesame soy milk
                .price 80
              li
                .name
                  | 豆漿紅茶
                  span Soy milk + black tea
                .price 80
              li
                .name
                  | 香濃豆漿
                  span Soy Milk
                .price 60
              li
                .name
                  | 時令果汁
                  span Juice
                .price 120
              li
                .name
                  | 可可歐蕾
                  span Cocoa aulait
                .price 100
              li
                .name
                  | 草莓歐蕾
                  span Strawberry aulait
                .price 100
              li
                .name
                  | 有機南非博士紅茶
                  span Organic rooibos tea
                .price 100
              li
                .name
                  | 有機南非博士綠茶
                  span Organic green rooibos tea
                .price 120
              li
                .name
                  | 有機南非博士綠蜜樹茶
                  span Organic green rooibos honeybush tea
                .price 120
      section#reservation
        .reservation-inner.restrict-l
          header
            h3 立即預約
            a.phone-number(href="tel:+886424371266", itemprop="telephone") (04)2437-1266
          .main
            h6 營業時間與相關規則請見下方說明
            .open-hour <span>營業時間</span>：早上 10:00 - 晚上 20:00 ( 每週一公休 )
            .row
              .block
                span 預約訂位注意事項：
                ol
                  li 為維護所有顧客在本店的消費體驗，預約時間逾時保留 10 分鐘，超出時間者喪失優先入座權利。
                  li 預約人數如有增減，請盡可能於預約日期前提早通知我們，以利座位安排。
                  li 請盡可能使用電話訂位取代 Facebook 訊息：(04)2437-1266，電話預約接聽時間早上 9:00 - 晚上 20:30。
                  li 如當日您有任何特殊需求：如生日派對、古禮抓周、團體聚餐等，請於預約時註明。
              .block 
                span 消費方式：
                ol
                  li 成人每位最低消費 200 元，六歲以上兒童低消 150 元，六歲以下兒童每位酌收 100 元清潔費 ( 不可抵消費 )。
                  li 用餐時間為 120 分鐘。
                span 活動包場：
                ol
                  li 如欲舉辦大型活動 ( 生日派對、社團聚餐等 )，請於活動 14 天前來電預約。 )
              .block 
                img(src='../assets/images/components/dino-sketching.gif')
      section#map
      section#instagram
        .row
          #instafeed
        //- .overlay
        //-   .inner
        //-     h1
        //-       a(href='https://www.instagram.com/middlemiddlekids') Follow us on Instagram <span>@middlemiddlekids</span>
</template>

<script>
// import request from 'superAgent'
import News from './News'
import Fun from './Fun'
import Instafeed from 'instafeed.js'
import jump from 'jump.js'
// import {lory} from 'lory.js'
// Expose Jquery Globally.
import $ from 'jquery'
window.jQuery = window.$ = $
require('imports?$=jquery!../assets/vendor/jquery.tinyMap.min.js')
require('imports?$=jquery!../assets/vendor/jquery.vide.min.js')
export default {
  name: 'Home',
  watch: {
    '$route': 'adjustPosition'
  },
  methods: {
    adjustPosition (dom) {
      console.log('route changes')
      if (this.$route.name) {
        dom = this.$route.name
      } else {
        dom = 'home'
      }
      var target = document.getElementById(dom)
      // var targetId = '#' + dom
      if (window.scrollY + 74 > target.offsetTop && window.scrollY - 74 < target.offsetTop) {
        console.log('passed')
      } else {
        console.log('repeating')
        jump('#' + dom, {
          duration: 1000,
          offset: -72,
          callback: () => this.adjustPosition(dom),
          a11y: false
        })
      }
    },
    jumpTo () {
      if (this.$route.hash) {
        jump(this.$route.hash, {
          duration: 1000,
          offset: -72,
          callback: undefined,
          a11y: false
        })
      } else {
        return
      }
    }
  },
  mounted () {
    this.adjustPosition()
    $('#about').vide('/static/video/bg')
    // document.addEventListener('DOMContentLoaded', () => {
    //     const slider = document.querySelector('.js_slider');

    //     lory(slider, {
    //         // options going here
    //     });
    // });
    // const slider = document.querySelector('.js_slider')
    // lory(slider, {
    //   // options going here
    //   infinite: 1
    // })
    // if (this.$route.hash) {
    //   jump(this.$route.hash, {
    //     duration: 1000,
    //     offset: -72,
    //     callback: undefined,
    //     a11y: false
    //   })
    // }
    // Map
    $.fn.tinyMapConfigure({
      // Google Maps API Key，預設 null
      'key': 'AIzaSyDB0dwhyV2kDxZeUMYBMDRud6_QCuz9tmg',
      // 使用的地圖語言
      'language': 'zh‐TW'
    })
    console.log('ee')
    $('#map').tinyMap({
      'center': ['24.1770491', '120.7112015'],
      'zoom': 16,
      'scrollwheel': false,
      'marker': [
        {
          'addr': ['24.1770491', '120.7112015'],
          'text': '<h2 style=margin: 0; text-align: center;>中中親子樂園</h2><ul style=margin:0;padding:0;list-style-type: none;><li><b>地址：</b>台中市北屯區松竹五路 172 號</li><li><b>預約電話：</b>(04)2437-1266</li><li><b>營業時間：</b>10:00~20:00 ( 週一公休 )</li></ul>',
          'newLabel': '中中親子樂園',
          'newLabelCSS': 'labels',
          // 自訂外部圖示
          'icon': {
            'url': 'static/map-pointer.png',
            'scaledSize': [40, 48]
          },
          // 動畫效果
          'animation': 'DROP'
        }
      ],
      'styles': [
        {
          'featureType': 'administrative',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#444444'
            }
          ]
        },
        {
          'featureType': 'administrative.country',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#f2f2f2'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': -100
            },
            {
              'lightness': 45
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#4694ec'
            },
            {
              'visibility': 'on'
            }
          ]
        }
      ]
    })
    var feed = new Instafeed({
      get: 'user',
      userId: '2230806826',
      accessToken: '2230806826.1ef4bf1.623f1e10226d4895aa9df1ab0ea6d072',
      limit: 12,
      resolution: 'low_resolution'
    })
    feed.run()
  },
  components: {
    News,
    Fun
  }
}
</script>

<style lang='scss'>
@import "../../bower_components/susy/sass/susy";
@import "../../bower_components/breakpoint-sass/stylesheets/breakpoint";
@import "../assets/styles/lib/var/_var";
@import "../assets/styles/lib/base";
#foods {
  background-image: url('../assets/images/components/food-bg.png');
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
      color: $main;
      display: block;
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
#dish {
  padding-top: 6em;
  header {
    text-align: center;
    h1 {
      margin: 0;
    }
  }
  h3 {
    font-weight: bold;
    line-height: 1.2;
    span {
      display: block;
      font-size: .7em;
      color: $darkgray;
    }
  }
  .annoucements {
    background-color: $smokygray;
    padding: 1em 2em;
    box-sizing: border-box; 
  }
  ul.dishes {
    display: block;
    @extend .clr;
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      margin-bottom: 1em;
      padding-bottom: .5em;
      border-bottom: 1px solid $lightgray;
      @include breakpoint(768px) {
        @include gallery(6 of 12 2);
      }
      @include breakpoint(1280px) {
        @include gallery(4 of 12 2);
      }
    }
    .name {
      font-size: 1.1em;
      flex: 1;
      span {
        display: block;
        font-weight: normal;
        font-size: .7em;
        color: $darkgray;
      }
    }
    .price {
      text-align: right;
      font-size: 1.2em;
      font-weight: 100;
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
#instagram {
  a {
    display: block;
    @include gallery(2 of 12 0);
  }
}
.clr {
  &:before, &:after {
    content:'';
    clear: both;
    display: block;
  }
}
#instafeed {
  @extend .clr;
  img {
    width: 100%; 
  }
}
.slider, .frame, .slides, .js_slide {
  height: 100%;
}
.js_slide {
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
  }
}
/**
 * (optional) define here the style definitions which should be applied on the slider container
 * e.g. width including further controls like arrows etc.
 */
.slider {}

.frame {

    position: relative;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    white-space: nowrap;
}

.slides {
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: 0;
    li {
      position: relative;
      display: inline-block;
      width: 100%;
      /**
       * (optional) if the content inside the slide element has a defined size.
       */
    }
}



.prev, .next {
    position: absolute;
    top: 50%;
    margin-top: -25px;
    display: block;
    cursor: pointer;
}

.next {
    right: 2em;
}

.prev {
    left: 2em;
}

.next svg, .prev svg {
    width: 25px;
}
</style>
