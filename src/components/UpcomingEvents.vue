<template>
  <v-card>
    <v-timeline align-top dense>
      <v-timeline-item v-for="event in events" :fill-dot="true" :key="event.day + event.time" small>
        <v-row class="pt-1">
          <v-col cols="3">
            {{ event.day }}
            <span class="caption font-weight-light">{{ event.time }}</span>
          </v-col>
          <v-col>
            <strong>{{ event.title }}</strong>
            <div class="caption">{{ event.subtitle }}</div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
    <v-btn color="pink" dark absolute bottom left fab to="/calendar">
      <v-icon>mdi-calendar</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "UpcomingEvents",
  props: ["events"]
};
</script>