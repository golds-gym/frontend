<template>
  <v-card flat>
    <v-card-title>
      <span>Your trainings</span>
    </v-card-title>
    <v-sheet height="64">
      <v-toolbar flat color="white">
        <v-spacer />
        <v-btn fab text small color="grey darken-2" @click="prev">
          <v-icon small>mdi-chevron-left</v-icon>
        </v-btn>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-btn fab text small color="grey darken-2" @click="next">
          <v-icon small>mdi-chevron-right</v-icon>
        </v-btn>
        <v-spacer />
      </v-toolbar>
    </v-sheet>
    <v-calendar
      ref="calendar"
      v-model="value"
      :events="events"
      :weekdays="weekdays"
      :event-color="getEventColor"
      :now="today"
      @change="getEvents"
    ></v-calendar>
    <v-card-actions>
      <v-btn block color="primary">New</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Calendar",
  data: () => ({
    value: "",
    weekdays: [1, 2, 3, 4, 5, 6, 0],
    events: [],
    start: null,
    end: null,
    today: null
  }),
  methods: {
    getEvents({ start, end }) {
      this.start = start;
      this.end = end;
      this.events = [
        {
          name: "Training",
          start: this.formatDate(new Date("March 3, 2020 20:00:00"), false),
          end: this.formatDate(new Date("March 3, 2020 21:30:00"), false),
          color: "indigo"
        },
        {
          name: "with PT",
          start: this.formatDate(new Date("March 7, 2020 10:00:00"), false),
          end: this.formatDate(new Date("March 7, 2020 12:30:00"), false),
          color: "deep-purple"
        },
        {
          name: "Training",
          start: this.formatDate(new Date("March 10, 2020 20:00:00"), false),
          end: this.formatDate(new Date("March 10, 2020 21:30:00"), false),
          color: "indigo"
        },
        {
          name: "with PT",
          start: this.formatDate(new Date("March 14, 2020 10:00:00"), false),
          end: this.formatDate(new Date("March 14, 2020 12:30:00"), false),
          color: "deep-purple"
        },
        {
          name: "Training",
          start: this.formatDate(new Date("March 17, 2020 20:00:00"), false),
          end: this.formatDate(new Date("March 17, 2020 21:30:00"), false),
          color: "indigo"
        },
        {
          name: "with PT",
          start: this.formatDate(new Date("March 21, 2020 10:00:00"), false),
          end: this.formatDate(new Date("March 21, 2020 12:30:00"), false),
          color: "deep-purple"
        },
        {
          name: "with PT",
          start: this.formatDate(new Date("March 28, 2020 10:00:00"), false),
          end: this.formatDate(new Date("March 28, 2020 12:30:00"), false),
          color: "deep-purple"
        }
      ];
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.value = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    },
    formatDate(a, withTime) {
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() +
            1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`;
    }
  },
  computed: {
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }
      const startMonth = this.monthFormatter(start);
      const startYear = start.year;
      return `${startMonth} ${startYear}`;
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      });
    }
  },
  mounted() {
    this.$refs.calendar.checkChange();
  }
};
</script>
