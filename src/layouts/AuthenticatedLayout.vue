<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-grey-9"
      elevated
    >
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          dense
          flat
          icon="menu"
          round
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Quasar {{ authProviderUpperFirst }}</q-toolbar-title>

        <q-btn
          flat
          icon="person"
          round
        >
          <AuthAccountMenu />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
    >
      <q-list>
        <q-item-label header>
          Menu
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { getDefaultProvider } from '@vueauth/core'
import AuthAccountMenu from 'src/auth/components/AccountMenu/AccountMenu.vue'

const leftDrawerOpen = ref(false)

const authProvider = getDefaultProvider()
const authProviderUpperFirst = authProvider.charAt(0).toUpperCase() + authProvider.slice(1)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
