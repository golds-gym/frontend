<template>
  <v-card flat>
    <v-card-title>
      <span>Hurry to book yourself a locker</span>
    </v-card-title>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="display-3" v-text="freeLockers"></v-card-title>
        <v-card-subtitle>lockers left</v-card-subtitle>
      </div>
    </div>
    <v-card-actions>
      <v-btn block color="primary">Book</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Lockers",
  data: () => ({
    freeLockers: 10
  })
};
</script>
