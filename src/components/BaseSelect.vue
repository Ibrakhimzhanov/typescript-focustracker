<script setup lang="ts" generic="T extends number | string">
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { normalizeSelectValue } from '../functions'
import { type SelectOption, IconName, ButtonType } from '../types'

defineProps<{
  options: SelectOption<T>[]
  selected: T | null
  placeholder: string
}>()

const emit = defineEmits<{
  select: [value: T | null]
}>()

function select(value: string | null): void {
  emit('select', normalizeSelectValue(value) as T | null)
}
</script>
<template>
  <div class="flex gap-2">
    <BaseButton :type="ButtonType.NEUTRAL" @click="select(null)">
      <BaseIcon :name="IconName.X_MARK" />
    </BaseButton>
    <select
      name=""
      id=""
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl outline-none"
      @change="select(($event.target as HTMLSelectElement).value)"
    >
      <option :selected="selected === null" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
