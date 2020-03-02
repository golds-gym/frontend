<template>
  <v-container>
    <v-row dense>
      <v-col v-for="goal in goals" :key="goal.title" cols="12">
        <v-card class="mt-8 mx-auto">
          <v-sheet
            color="cyan"
            max-width="calc(100% - 32px)"
            class="v-sheet--offset mx-auto"
            elevation="12"
          >
            <v-sparkline
              :key="String(avg)"
              :smooth="16"
              color="white"
              :line-width="3"
              :label-size="12"
              :padding="16"
              :labels="goal.results.map(i=>i[0])"
              :value="goal.results.map(i=>i[1])"
              auto-draw
              stroke-linecap="round"
            ></v-sparkline>
          </v-sheet>
          <v-card-title >{{ goal.goal }}{{ goal.units }}</v-card-title>
          <v-card-subtitle>{{ goal.title }}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" class="mt-4">
        <v-card>
          <v-card-title>Upcoming trainings</v-card-title>
          <v-card-text>
            <v-calendar></v-calendar>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn>Schedule training</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" class="mt-4">
        <v-btn block color="deep-orange" @click="logout">
          <span>Logout</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Login from "@/components/Login.vue";
const exhale = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  name: "Home",
  methods: {
    logout: function() {
      this.$store.commit("logout");
    },
    heartbeat() {
      return Math.ceil(Math.random() * (120 - 80) + 80);
    },
    async takePulse(inhale = true) {
      this.checking = true;

      inhale && (await exhale(1000));

      this.heartbeats = Array.from({ length: 20 }, this.heartbeat);

      this.checking = false;
    }
  },
  data: () => ({
    checking: false,
    heartbeats: [],
    goals: [
      {
        title: "Weight loss",
        goal: 56,
        units: "kg",
        results: [
          ["SU", 61],
          [" ", 62],
          ["TU", 62.5],
          [" ", 61],
          ["TH", 61.4],
          [" ", 61],
          ["SA", 60.6],
          [" ", 60.8],
          ["MO", 60],
          [" ", 60],
          ["WE", 60.2],
          [" ", 59.8],
          ["FR", 59.8],
          [" ", 59]
        ]
      },
      {
        title: "Deadlift",
        goal: 40,
        units: "x5",
        results: [
          ["SU", 30],
          [" ", 30],
          ["TU", 30],
          [" ", 30],
          ["TH", 32],
          [" ", 32],
          ["SA", 32],
          [" ", 32],
          ["MO", 32.5],
          [" ", 32.5],
          ["WE", 32.5],
          [" ", 34],
          ["FR", 34],
          [" ", 34]
        ]
      },
      {
        title: "Deadlift-2",
        goal: 50,
        units: "x5",
        results: [
          ["SU", 30],
          [" ", 30],
          ["TU", 30],
          [" ", 30],
          ["TH", 32],
          [" ", 32],
          ["SA", 32],
          [" ", 32],
          ["MO", 32.5],
          [" ", 32.5],
          ["WE", 32.5],
          [" ", 34],
          ["FR", 34],
          [" ", 34]
        ]
      }

    ]
  }),

  computed: {
    avg() {
      const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0);
      const length = this.heartbeats.length;

      if (!sum && !length) return 0;

      return Math.ceil(sum / length);
    }
  },

  created() {
    this.takePulse(false);
  }
};
</script>
