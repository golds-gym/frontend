<template>
  <v-app id="golds-gum">
    <Navigation />
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col md="6" sm="12" class="ma-2">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation
  }
};
</script>
