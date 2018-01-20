<template>
  <section>
    <editor></editor>
    <viewer></viewer>
  </section>
</template>

<script>
import Editor from './editor/index.vue'
import Viewer from './viewer/index.vue'

export default {
  name: "app",
  components: {
    editor: Editor,
    viewer: Viewer
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
}
editor {
  width: 50%;
}
viewer {
  width: 50%;
}
</style>
