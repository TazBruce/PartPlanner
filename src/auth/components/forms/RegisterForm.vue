<script setup>
import { QForm, QInput } from 'quasar'
import { getConfig } from '@vueauth/core'

const { withUsername } = getConfig('identityPassword:register')

defineProps({
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  passwordConfirmation: {
    required: true,
    type: String
  },
  name: {
    required: false,
    type: String,
    default: null
  },
  username: {
    required: false,
    type: String,
    default: null
  },
  validationErrors: {
    required: false,
    type: Object,
    default () {
      return {}
    }
  }
})

const emit = defineEmits([
  'update:email',
  'update:password',
  'update:passwordConfirmation',
  'update:name',
  'update:username'
])
</script>

<template>
  <q-form>
    <q-input
      v-if="typeof name === 'string'"
      :error="!!validationErrors?.['name']"
      :error-message="validationErrors?.['name']?.[0]"
      :model-value="name"
      class="q-mb-sm"
      filled
      hide-bottom-space
      label="Name"
      @update:model-value="value => emit('update:name', value)"
    />
    <q-input
      v-if="withUsername"
      :error="!!validationErrors?.['username']"
      :error-message="validationErrors?.['username']?.[0]"
      :model-value="username"
      class="q-mb-sm"
      filled
      hide-bottom-space
      label="Username"
      @update:model-value="value => emit('update:username', value)"
    />
    <q-input
      :error="!!validationErrors?.['email']"
      :error-message="validationErrors?.['email']?.[0]"
      :model-value="email"
      class="q-mb-sm"
      filled
      hide-bottom-space
      label="Email"
      @update:model-value="value => emit('update:email', value)"
    />
    <q-input
      :error="!!validationErrors?.['password']"
      :error-message="validationErrors?.['password']?.[0]"
      :model-value="password"
      class="q-mb-sm"
      filled
      hide-bottom-space
      label="Password"
      type="password"
      @update:model-value="value => emit('update:password', value)"
    />
    <q-input
      v-if="typeof passwordConfirmation === 'string'"
      :error="!!validationErrors?.['password_confirmation']"
      :error-message="validationErrors?.['password_confirmation']?.[0]"
      :model-value="passwordConfirmation"
      class="q-mb-sm"
      filled
      hide-bottom-space
      label="Confirm Password"
      type="password"
      @update:model-value="value => emit('update:passwordConfirmation', value)"
    />
  </q-form>
</template>
