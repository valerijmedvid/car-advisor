<script setup lang="ts">
import supabase from '@/services/supabaseClient'

async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'vmedvid@gmail.com',
    password: 'testovaci',
    options: {
      emailRedirectTo: 'http://localhost:5173/',
    },
  })
  console.log(data)
}
</script>

<template>
  <div>
    <h3>Register</h3>
    <QBtn class="bg-secondary" @click="signUpNewUser()">Register</QBtn>
  </div>
</template>
