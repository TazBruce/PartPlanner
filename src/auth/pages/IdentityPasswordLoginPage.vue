<script setup>
import AuthLoginCard from 'src/auth/components/LoginCard.vue'</script>

<template>
  <div
    class="flex flex-center"
    padding
    style="min-height: 100vh"
  >
    <div class="text-center">
      <h5 class="q-mb-md">
        Sign In
      </h5>
      <AuthLoginCard />
      <q-btn
        :to="{ name: 'auth.requestPasswordReset' }"
        class="full-width q-mt-md"
        color="grey-6"
        flat
        label="forgot password"
      />
    </div>
  </div>
  <div
    class="absolute-top-right q-pa-md"
  >
    <div>Need an account?</div>
    <q-btn
      :to="{ name: 'auth.register' }"
      class="full-width"
      flat
      label="register"
      no-caps
    />
  </div>
</template>
