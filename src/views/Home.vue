<template>
  <v-card max-width="450" class="mx-auto">
    <v-card-title>Provide your Member's ID</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="ID" name="id" prepend-icon="mdi-account" type="text" />
        <v-text-field id="code" label="Code" name="code" prepend-icon="mdi-lock" type="password" />
      </v-form>
    </v-card-text>
    <v-card-actions class="ma-2">
      <v-btn block color="primary">Login</v-btn>
    </v-card-actions>
    <v-row align="center" justify="center">
      <v-subheader>or login with</v-subheader>
    </v-row>
    <v-row align="center" justify="center">
      <v-col md="auto">
        <v-tooltip>
          <template v-slot:activator="{ on }">
            <v-btn icon outlined large v-on="on">
              <v-icon>mdi-vk</v-icon>
            </v-btn>
          </template>
          <span>Login via VK</span>
        </v-tooltip>
      </v-col>
      <v-col md="auto">
        <v-tooltip>
          <template v-slot:activator="{ on }">
            <v-btn icon outlined large v-on="on">
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </template>
          <span>Login via Google</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Login from "@/components/Login.vue";

export default {
  name: "Home"
};
</script>
