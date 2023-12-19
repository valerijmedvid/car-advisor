<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}
logout()
</script>

<template>
  <div>
    <h3>Logout</h3>
  </div>
</template>
