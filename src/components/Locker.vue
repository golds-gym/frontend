<template>
  <v-badge overlap :content="number" :color="color">
    <v-icon>mdi-locker</v-icon>
  </v-badge>
</template>

<script>
export default {
  name: "Locker",
  props: ["number", "free"],
  computed: {
    color() {
      const colors = {
        true: "green",
        false: "deep-orange"
      }
      return colors[this.free]
    }
  }
};
</script>