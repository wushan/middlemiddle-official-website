<template lang="pug">
  form(@submit.prevent.stop="addNews")
    .contorlgroup
      label 文章標題
      .controls
        input(type="text", name="title", v-model="title")
    .controlgroup
      label 類型
      .controls
        .check-group
          .check-item
            label
              input(type="radio", name="type", v-model="type", value="image")
              span 圖片
          .check-item
            label
              input(type="radio", name="type", v-model="type", value="video")
              span 影片
    .controlgroup(v-if="type === 'image'")
      label File
      .controls
        input(type="file", name="thumbnail")
    .controlgroup(v-else)
      label 影片網址
      .controls
        input(type="text", name="videourl", v-model="videourl")
    .contorlgroup
      label 文章
      .controls
        //- textarea(name="content")
        .textarea-wrapper
          //- quill-editor(ref="myTextEditor", v-model="content", :config="editorOption", @blur="onEditorBlur($event)", @focus="onEditorFocus($event)", @ready="onEditorReady($event)")
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
export default {
  name: 'addNews',
  props: ['validuser'],
  components: {
  },
  mounted () {
    var simplemde
    simplemde = new SimpleMDE({
      element: document.getElementById('editor'),
      spellChecker: false
    })
    simplemde.codemirror.on('change', () => {
      this.content = simplemde.value()
    })
    // if (this.validuser) {
    //   this.$nextTick(() => {
    //     this.$router.push('/admin')
    //   })
    // }
  },
  data () {
    return {
      type: 'image',
      content: null,
      videourl: null,
      editorOption: {
       // something config
      }
    }
  },
  methods: {
    addNews (e) {
      var instance = this
      var file
      if (e.target.elements.thumbnail) {
        file = e.target.elements.thumbnail.files[0]
      } else {
        file = false
      }
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
          instance.$firebaseRefs.news.push({
            type: instance.type,
            videourl: instance.videourl,
            thumbnail: downloadURL,
            title: instance.title,
            content: instance.content,
            time: firebase.database.ServerValue.TIMESTAMP
          }).then((res) => {
            instance.$router.push('list')
          })
        })
      } else {
        // Video Mode
        instance.$firebaseRefs.news.push({
          type: instance.type,
          videourl: instance.videourl,
          thumbnail: null,
          title: instance.title,
          content: instance.content,
          time: firebase.database.ServerValue.TIMESTAMP
        }).then((res) => {
          instance.$router.push('list')
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
@import '../../assets/vendor/simplemde'
</style>
