<template>
  <router-view />
</template>

<script setup lang="ts">
import { authenticateRoutes } from '@vueauth/quasar-ui-auth'

authenticateRoutes()

</script>
