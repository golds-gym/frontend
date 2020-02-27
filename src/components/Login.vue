<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer />
          <v-tooltip>
            <template v-slot:activator="{ on }">
              <v-btn icon large v-on="on">
                <v-icon>mdi-vk</v-icon>
              </v-btn>
            </template>
            <span>Login via vk</span>
          </v-tooltip>
          <v-tooltip>
            <template v-slot:activator="{ on }">
              <v-btn icon large v-on="on">
                <v-icon>mdi-google</v-icon>
              </v-btn>
            </template>
            <span>Login via google</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="ID" name="id" prepend-icon="mdi-account" type="text" />
            <v-text-field
              id="code"
              label="Code"
              name="code"
              prepend-icon="mdi-lock"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String
  }
};
</script>