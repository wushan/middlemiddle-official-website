<template lang="pug">
  #container
    navigation
    transition(name="fade", mode="out-in")
      router-view
    footer
      #footer
        ul
          //- li
            //- a(href="javascript:;") Term of Use
          li
            router-link(to="/privacy", itemprop="url") Privacy Policy
          //- li
            //- a(href="javascript:;") Media Pack
        .additional
          ul
            li.title 「中中親子樂園」
            li.address 台中市北屯區松竹五路二段 172 號
            li.tel
              a(href="tel:+886424371266", itemprop="telephone") (04)2437-1266
            li.mail.
              連絡信箱 <a href="mailto:service@middlemiddle.com">service@middlemiddle.com</a>
</template>

<script>
import Navigation from './Navigation'
export default {
  name: 'Container',
  components: {
    Navigation
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
</style>
