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
    <v-row v-for="(lockerRow, index) in lockers" :key="index">
      <v-col v-for="(isFree, number) in lockerRow" :key="number">
        <Locker v-if="number != 0" :number="number" :free="isFree"></Locker>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-btn block color="primary">Book</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Locker from "@/components/Locker.vue";
const free = true;
const booked = false;
export default {
  name: "Lockers",
  data: () => ({
    lockers: [
      {
        1: free,
        2: free,
        3: booked,
        4: free,
        5: booked,
        6: booked,
        7: free,
        8: booked,
        9: booked,
        10: booked
      },
      { 0: booked },
      { 0: booked },
      {
        11: booked,
        12: booked,
        13: free,
        14: booked,
        15: booked,
        16: booked,
        17: free,
        18: booked,
        19: booked,
        20: booked
      },
      {
        21: free,
        22: booked,
        23: booked,
        24: free,
        25: booked,
        26: free,
        27: booked,
        28: booked,
        29: booked,
        30: booked
      },
      { 0: booked },
      {
        31: booked,
        32: booked,
        33: booked,
        34: free,
        35: booked,
        36: booked,
        37: free,
        38: booked,
        39: free,
        40: booked
      }
    ]
  }),
  computed: {
    freeLockers() {
      return this.lockers.reduce((acc, row) => {
        for (let [number, isFree] of Object.entries(row)) {
          if (isFree && number != 0) {
            acc += 1;
          }
        }
        return acc;
      }, 0);
    }
  },
  components: {
    Locker
  }
};
</script>
