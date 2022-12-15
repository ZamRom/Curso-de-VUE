<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <Menu />
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <RouterView/>  
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'
import Menu from '@/components/Menu.vue'
import {RouterView} from 'vue-router'
  const  drawer = ref (null)
  
</script>