<script setup lang="ts">
import Fuse from 'fuse.js'
import { timezones } from '~/composables/data'
import { addToTimezones } from '~/composables/state'

const input = ref('')
const index = ref(0)
const fuse = new Fuse(timezones, {
  keys: ['name'],
})

const searchResult = computed(() => {
  return fuse.search(input.value)
})

function add(t: Timezone) {
  addToTimezones(t)
  input.value = ''
  index.value = 0
}
</script>

<template>
  <div relative>
    <input
      v-model="input" type="text" text-black placeholder="Search timezone..."
      px2 py1 rounded="~ gray/15" text-slate-50 w-full
    >
    <div
      v-show="input" absolute bg-gray-900 left-0 right-0
      top-full
    >
      <button
        v-for="i of searchResult" :key="i.refIndex"
        flex gap-2
        @click="add(i.item)"
      >
        <div font-mono w-10 text-right>
          {{ i.item.offset }}
        </div>
        <div>
          {{ i.item.name }}
        </div>
      </button>
    </div>
  </div>
</template>
