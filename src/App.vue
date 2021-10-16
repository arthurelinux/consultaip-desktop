<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Acesso Design Logo"
          class="shrink mr-2"
          contain
          src="/logos/g2750.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Acesso Design Logo"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="/logos/g210.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      
<!--
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
     <Grid />
     <v-btn color="purple" dark elevation="2" id="linkSobre"  >site</v-btn>

    </v-main>
    
  </v-app>
</template>

<script>
//import "./function/renderer.js"
import Grid from './components/Grid.vue'
export default {
  name: 'App',

  components: {
    Grid,
  },

  data: () => ({
    //
  }),

};
</script>
