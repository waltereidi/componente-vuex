<!-- src/components/Counter.vue -->

<template>
  <button @click="increment">Increment</button>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
};
</script>

