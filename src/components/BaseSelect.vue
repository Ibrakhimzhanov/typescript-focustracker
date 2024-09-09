<script setup>
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { computed } from 'vue'
import { isSelectValueValid, isUndefinedOrNull, validateSelectOptions } from '../validators'
import { BUTTON_TYPE_NEUTRAL } from '../constants'
import { normalizeSelectValue } from '../functions'
import { ICON_X_MARK } from '../icons'

const props = defineProps({
  selected: [String, Number],
  placeholder: {
    required: true,
    type: String
  },
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>
<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <BaseIcon :name="ICON_X_MARK" />
    </BaseButton>
    <select
      name=""
      id=""
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl outline-none"
      @change="select($event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
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
