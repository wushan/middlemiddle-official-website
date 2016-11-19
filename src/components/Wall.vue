<template lang="pug">
  div
    h1 WALL
    form(@submit.prevent.stop="uploadFile")
      .controlgroup
        label file
        .controls
          input(type="file", name="file")
      button(type='submit') submit
</template>

<script>
import superagent from 'superagent'
export default {
  components: {
  },
  data () {
    return {
      post: {
        file: null
      }
    }
  },
  methods: {
    uploadFile (e) {
      var file = e.target.elements.file.files[0]
      console.log(e.target.elements.file.files[0])
      superagent.post('/api/Containers/middlemiddle/upload')
      .attach('file', file)
      .end(function (err, res) {
        if (err) {
          console.log(err.response.body.error.message)
        } else {
          console.log(res)
        }
      })
    }
  }
}
</script>

<style lang="scss">
</style>
