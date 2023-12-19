<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function login() {
  localStorage.setItem('isAuthenticated', 'true')
  router.push('/')
}
</script>

<template>
  <div>
    <h3>Login</h3>
    <QBtn class="bg-secondary" @click="login()">Login</QBtn>
  </div>
</template>
