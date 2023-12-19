<script setup lang="ts">
import { computed } from 'vue'

const isLogged = computed(
  () => localStorage.getItem('isAuthenticated') === 'true',
)
</script>

<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/logout" v-if="isLogged"> Logout </router-link>
  <router-link to="/login" v-else> Login </router-link>

  <router-view></router-view>
</template>
