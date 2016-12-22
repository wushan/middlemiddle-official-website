<template lang="pug">
  #news
    transition(name="fade", mode="out-in")
      router-view
</template>

<script>
export default {
  name: 'NewsWrapper',
  // props:
  methods: {
  }
}
</script>

<style lang="scss">
//Susy + BreakPoint
@import '../../bower_components/susy/sass/susy';
@import '../../bower_components/breakpoint-sass/stylesheets/breakpoint';
@import "../assets/styles/lib/var/_var";
@import "../assets/styles/lib/base";
#news {
  margin-top: 72px;
}
</style>
