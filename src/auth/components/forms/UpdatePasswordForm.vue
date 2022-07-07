<script setup>
import { QForm, QInput } from 'quasar'

defineProps({
  email: {
    required: false,
    type: String,
    default: null
  },
  currentPassword: {
    required: false,
    type: String,
    default: null
  },
  password: {
    required: true,
    type: String
  },
  passwordConfirmation: {
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
  'update:currentPassword',
  'update:password',
  'update:passwordConfirmation'
])
</script>

<template>
  <q-form>
    <slot name="top" />
    <q-input
      v-if="typeof email === 'string'"
      :error="!!validationErrors?.['email']"
      :error-message="validationErrors?.['email']?.[0]"
      :model-value="email"
      class="q-mb-md"
      filled
      hide-bottom-space
      label="Email"
      @update:model-value="value => emit('update:email', value)"
    />
    <q-input
      v-if="typeof currentPassword === 'string'"
      :error="!!validationErrors?.['current_password']"
      :error-message="validationErrors?.['current_password']?.[0]"
      :model-value="currentPassword"
      class="q-mb-lg"
      filled
      hide-bottom-space
      label="Current Password"
      type="password"
      @update:model-value="value => emit('update:currentPassword', value)"
    />
    <q-input
      v-if="typeof password === 'string'"
      :error="!!validationErrors?.['password']"
      :error-message="validationErrors?.['password']?.[0]"
      :model-value="password"
      class="q-mb-sm"
      filled
      hide-bottom-space
      label="New Password"
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
      label="Confirm New Password"
      type="password"
      @update:model-value="value => emit('update:passwordConfirmation', value)"
    />
    <slot name="bottom" />
  </q-form>
</template>
