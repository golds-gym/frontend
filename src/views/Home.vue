<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card>
          <v-card-title>Goals</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Upcoming trainings</v-card-title>
          <v-card-text>
            <v-calendar></v-calendar>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn>Schedule training</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
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
// import Login from "@/components/Login.vue";

export default {
  name: "Home",
  methods: {
    logout: function() {
      this.$store.commit("logout");
    }
  }
};
</script>
