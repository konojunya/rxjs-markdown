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
    });
    textareaStream.subscribe((value) => vueStore.commit("update", value));
  }
}
</script>
