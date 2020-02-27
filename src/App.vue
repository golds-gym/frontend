<template>
  <v-app id="golds-gum">
    <v-content>
      <v-container>
        <div id="nav">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>
