<script setup>
import useLogout from 'auth/composables/useLogout'

const {
  loading,
  onLogoutClicked
} = useLogout()
</script>

<template>
  <q-item
    clickable
    @click="onLogoutClicked"
  >
    <q-item-section side>
      <q-icon
        v-if="!loading"
        name="logout"
      />
      <q-spinner
        v-else
        color="primary"
        size="sm"
      />
    </q-item-section>
    <q-item-section>
      Logout
    </q-item-section>
  </q-item>
</template>
