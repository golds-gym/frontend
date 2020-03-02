<template>
  <v-card flat>
    <v-card-title>
      <span>Manage your balance</span>
    </v-card-title>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="display-3" v-text="workoutsLeft"></v-card-title>
        <v-card-subtitle>workouts left</v-card-subtitle>
      </div>
      <div>
        <v-card-title class="display-3">${{ balance }}</v-card-title>
        <v-card-subtitle class="d-flex justify-end">balance</v-card-subtitle>
      </div>
    </div>
    <v-card-actions>
      <v-btn block color="primary">Pre-pay</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Payment",
  data: () => ({
    balance: 17.5,
    workoutsLeft: 3
  })
};
</script>
