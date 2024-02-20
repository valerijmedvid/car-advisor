<script setup lang="ts">
import { useRouter } from 'vue-router'

import supabase from '@/services/supabaseClient'

const router = useRouter()

async function login() {
  localStorage.setItem('isAuthenticated', 'true')
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'vmedvid@gmail.com',
    password: 'testovaci',
  })
  console.log(data)
  router.push('/')
}
</script>

<template>
  <div>
    <h3>Login</h3>
    <QBtn class="bg-secondary" @click="login()">Login</QBtn>
  </div>
</template>
