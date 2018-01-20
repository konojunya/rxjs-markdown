<template>
  <section>
    <h1>Hello from Editor</h1>
    <textarea ref="textarea" cols="30" rows="10"></textarea>
  </section>
</template>

<script>
import Rx from 'rxjs'
import vueStore from '../../vuex'

export default {
  name: "editor",
  mounted() {
    const textarea = this.$refs.textarea
    const textareaStream = Rx.Observable.fromEvent(textarea, "input")
    .map((el) => {
      return el.target.value
    })
    .map((value) => {
      value = value.replace(/\r\n/g, '\n');
      value = value.replace(/\r/g, '\n');
      var lines = value.split('\n');
      return lines.join("<br/>")
    });
    textareaStream.subscribe((value) => vueStore.commit("update", value));
  }
}
</script>
