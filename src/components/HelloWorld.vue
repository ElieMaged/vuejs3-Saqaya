<!-- src/components/HelloWorld.vue -->
<template>
  <div>Hello, {{ name }}!</div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
