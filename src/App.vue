<template>
  <v-app id="golds-gum">
    <v-navigation-drawer app>
      <!--v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app> -->
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture-300x261.jpg"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">Franco Maguire</v-list-item-title>
          <v-list-item-subtitle>Member</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-item :key="item.text" :to="item.to" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Login",
        to: "/",
        icon: "mdi-login"
      },
      {
        text: "Trainers",
        to: "/trainers",
        icon: "mdi-google-classroom"
      },
      {
        text: "Lockers",
        to: "/lockers",
        icon: "mdi-locker-multiple"
      },
      {
        text: "Payment",
        to: "/payment",
        icon: "mdi-cash-usd"
      }
    ]
  })
};
</script>
