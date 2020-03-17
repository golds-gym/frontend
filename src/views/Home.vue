<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-subheader>Goals</v-subheader>
        <v-row>
          <v-col class="pa-1" v-for="goal in goals" :key="goal.title">
            <Goal v-bind="goal"></Goal>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="mb-6">
        <v-subheader>Upcoming Events</v-subheader>
        <v-row>
          <v-col class="pa-1">
            <UpcomingEvents :events="events"></UpcomingEvents>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="mt-4">
        <v-btn block color="deep-orange" @click="logout">
          <span>Logout</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Goal from "@/components/Goal.vue";
import UpcomingEvents from "@/components/UpcomingEvents.vue";
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
    events: [
      {
        day: "Thu",
        time: "6PM",
        title: "Training"
      },
      {
        day: "Fri",
        time: "6PM",
        title: "Training",
        subtitle: "legs"
      }
    ],
    goals: [
      {
        title: "Weight loss",
        goal: 56,
        units: "kg"
      },
      {
        title: "Deadlift",
        goal: 40,
        units: "x5"
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
  },

  components: {
    Goal,
    UpcomingEvents
  }
};
</script>
