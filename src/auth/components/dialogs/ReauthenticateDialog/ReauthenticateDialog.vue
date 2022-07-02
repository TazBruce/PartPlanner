<script setup>
import useLogin from 'auth/composables/useLogin'
import AuthLoginForm from 'src/auth/components/forms/LoginForm.vue'
import AuthErrorsBanner from 'src/auth/components/ErrorsBanner.vue'
import { ref } from 'vue'

const {
  isReauthenticating,
  form,
  validationErrors,
  login,
  hasErrors,
  errors,
  loading,
  resetForm,
  attemptSetEmailOnForm
} = useLogin()

isReauthenticating.value = true
const dialogComponent = ref()
attemptSetEmailOnForm()

async function handleLogin () {
  await login()
  if (!hasErrors.value) {
    dialogComponent.value.hide()
  }
}
</script>

<template>
  <q-dialog
    ref="dialogComponent"
    @hide="resetForm"
    @show="attemptSetEmailOnForm"
  >
    <q-card
      class="full-width"
      style="max-width: 300px;"
    >
      <q-toolbar>
        <q-toolbar-title>Confirm Identity</q-toolbar-title>
        <q-btn
          color="primary"
          flat
          icon="question_mark"
          round
          size="sm"
        >
          <q-tooltip
            anchor="bottom right"
            class="bg-primary"
            max-width="300px"
            self="top right"
            style="font-size: 1.2em;"
          >
            When making sensitive changes to your account, we ask you to login again if it's been a while.
          </q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-card-section>
        <AuthLoginForm
          v-model:email="form.email"
          v-model:password="form.password"
          :validation-errors="validationErrors"
        />
        <AuthErrorsBanner
          v-if="hasErrors"
          :errors="errors"
        />
      </q-card-section>
      <q-btn
        :loading="loading"
        class="full-width"
        color="primary"
        label="Login"
        @click="handleLogin"
      />
    </q-card>
  </q-dialog>
</template>
