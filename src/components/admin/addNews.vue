<template lang="pug">
  form(@submit.prevent.stop="addNews")
    .contorlgroup
      label 文章標題
      .controls
        input(type="text", name="title")
    .controlgroup
      label File
      .controls
        input(type="file", name="thumbnail")
    .contorlgroup
      label 文章
      .controls
        //- textarea(name="content")
        .textarea-wrapper
          quill-editor(ref="myTextEditor", v-model="content", :config="editorOption", @blur="onEditorBlur($event)", @focus="onEditorFocus($event)", @ready="onEditorReady($event)")
    .call-action
      button.btn.basic.full(type="submit") Submit
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
import firebase from 'firebase'
var db = firebase.database()
// var storage = firebase.storage()
var storageRef = firebase.storage().ref()
import uuid from 'uuid'
export default {
  name: 'addNews',
  props: ['validuser'],
  components: {
    quillEditor
  },
  mounted () {
    // if (this.validuser) {
    //   this.$nextTick(() => {
    //     this.$router.push('/admin')
    //   })
    // }
  },
  data () {
    return {
      content: null,
      editorOption: {
       // something config
      }
    }
  },
  methods: {
    addNews (e) {
      var instance = this
      console.log(e.target.elements.thumbnail.files[0])
      var file = e.target.elements.thumbnail.files[0]
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
          thumbnail: downloadURL,
          title: e.target.elements.title.value,
          content: instance.content,
          time: firebase.database.ServerValue.TIMESTAMP
        }).then((res) => {
          instance.$router.push('list')
        })
      })
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
