<script setup>
import PasswordResetRequestCard from 'src/auth/components/PasswordResetRequestCard.vue'</script>

<template>
  <div
    class="flex flex-center"
    padding
    style="min-height: 100vh"
  >
    <div class="text-center">
      <h5 class="q-mb-md">
        Password Reset
      </h5>
      <PasswordResetRequestCard/>
      <q-btn
        :to="{ name: 'auth.login' }"
        class="full-width q-mt-md"
        color="grey-6"
        flat
        label="back"
      />
    </div>
  </div>
</template>
