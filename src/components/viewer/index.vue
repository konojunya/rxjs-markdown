<template>
  <p v-html="text"></p>
</template>

<script>
import vueStore from '../../vuex'
import marked from "marked";

export default {
  name: "viewer",
  computed: {
    text() {
      return marked(vueStore.state.text);
    }
  }
}
</script>
