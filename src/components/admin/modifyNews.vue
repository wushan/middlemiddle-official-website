<template lang="pug">
  form(@submit.prevent.stop="updateNews")
    .contorlgroup
      label 文章標題
      .controls
        input(type="text", name="title", v-model="article.title")
    .controlgroup
      label File
      .controls
        input(type="file", name="thumbnail")
        .preview(v-if="article.thumbnail")
          img(v-bind:src="article.thumbnail")
    .contorlgroup
      label 文章
      .controls
        //- textarea(name="content")
        .textarea-wrapper
          textarea#editor
    .call-action
      button.btn.basic.full(type="submit") Submit
</template>
<script>
import SimpleMDE from 'simplemde'
import firebase from 'firebase'
var db = firebase.database()
// var storage = firebase.storage()
var storageRef = firebase.storage().ref()
import uuid from 'uuid'
var simplemde
export default {
  name: 'addNews',
  props: ['validuser'],
  components: {
  },
  created () {
    this.loading = true
    this.$bindAsObject('article', db.ref('news').child(this.$route.params.id))
  },
  mounted () {
    simplemde = new SimpleMDE({
      element: document.getElementById('editor'),
      spellChecker: false
    })
    simplemde.value(this.article.content)
    simplemde.codemirror.on('change', () => {
      this.article.content = simplemde.value()
    })
  },
  updated () {
    simplemde.value(this.article.content)
  },
  data () {
    return {
      editorOption: {
       // something config
      }
    }
  },
  methods: {
    updateNews (e) {
      var instance = this
      var file = e.target.elements.thumbnail.files[0]
      if (file) {
        var imagesRef = storageRef.child(uuid.v4())
        var uploadTask = imagesRef.put(file)
        // Progress
        uploadTask.on('state_changed', function (snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused')
              break
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running')
              break
          }
        }, function (error) {
          // Handle unsuccessful uploads
          console.log(error)
        }, function () {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          var downloadURL = uploadTask.snapshot.downloadURL
          instance.$firebaseRefs.news.child(instance.$route.params.id).set({
            thumbnail: downloadURL,
            title: instance.article.title,
            content: instance.article.content,
            time: firebase.database.ServerValue.TIMESTAMP
          }).then((res) => {
            instance.$router.push('/admin/home/news/list')
          })
        })
      } else {
        console.log('no file')
        instance.$firebaseRefs.news.child(instance.$route.params.id).set({
          title: instance.article.title,
          content: instance.article.content,
          time: firebase.database.ServerValue.TIMESTAMP
        }).then((res) => {
          instance.$router.push('/admin/home/news/list')
        })
      }
    },
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.content = html
    }
  },
  firebase: {
    news: db.ref('news')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
