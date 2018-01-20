<template>
  <p v-html="text"></p>
</template>

<script>
import vueStore from '../../vuex'

export default {
  name: "viewer",
  computed: {
    text() {
      return vueStore.state.text;
    }
  }
}
</script>
