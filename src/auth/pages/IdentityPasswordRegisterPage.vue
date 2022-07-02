<script setup>
import AuthRegisterCard from 'src/auth/components/RegisterCard.vue'</script>

<template>
  <div
    class="flex flex-center"
    padding
    style="min-height: 100vh"
  >
    <div class="text-center">
      <h5 class="q-mb-md">
        Register
      </h5>
      <AuthRegisterCard/>
    </div>
  </div>
  <div
    class="absolute-top-right q-pa-md"
  >
    <div>Already have an account?</div>
    <q-btn
      :to="{ name: 'auth.login' }"
      class="full-width"
      flat
      label="login"
      no-caps
    />
  </div>
</template>
