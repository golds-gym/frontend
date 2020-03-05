<template>
  <v-card>
    <v-card-title>
      {{ goal }}
      <span class="font-weight-light">{{ units }}</span>
    </v-card-title>
    <v-card-subtitle>{{ title }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "Goal",
  props: ["title", "subtitle", "value", "goal", "units", "results"]
};
</script>