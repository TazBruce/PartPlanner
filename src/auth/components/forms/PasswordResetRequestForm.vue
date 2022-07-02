<script setup>
import { QForm, QInput } from 'quasar'

defineProps({
  email: {
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
  'update:email'
])
</script>

<template>
  <q-form>
    <slot name="top"/>
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
    <slot name="bottom"/>
  </q-form>
</template>
