<script setup>
import { QForm, QInput } from 'quasar'

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
  'update:passwordConfirmation'
])
</script>

<template>
  <q-form>
    <slot name="top" />
    <q-input
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
      :error="!!validationErrors?.['password']"
      :error-message="validationErrors?.['password']?.[0]"
      :model-value="password"
      class="q-mb-xs"
      filled
      hide-bottom-space
      label="Password"
      type="password"
      @update:model-value="value => emit('update:password', value)"
    />
    <q-input
      :error="!!validationErrors?.['password_confirmation']"
      :error-message="validationErrors?.['password_confirmation']?.[0]"
      :model-value="passwordConfirmation"
      class="q-mb-md"
      filled
      hide-bottom-space
      label="Confirm Password"
      type="password"
      @update:model-value="value => emit('update:passwordConfirmation', value)"
    />
    <slot name="bottom" />
  </q-form>
</template>
