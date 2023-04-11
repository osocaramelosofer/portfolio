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
function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown')
    index.value = (index.value + 1) % searchResult.value.length

  else if (e.key === 'ArrowUp')
    index.value = (index.value - 1 + searchResult.value.length) % searchResult.value.length

  else if (e.key === 'Enter')
    add(searchResult.value[index.value])
}
</script>

<template>
  <div relative>
    <input
      v-model="input" type="text" text-black placeholder="Search timezone..."
      p="x3 y2" border="~ base rounded" focus:border-neutral-500
      dark:text-slate-50 w-full bg-transparent
      @keydown="onKeyDown"
    >
    <div
      v-show="input" absolute top-full left-0 right-0
      p1 border="~ base" bg-base max-h-50 overflow-auto
    >
      <button
        v-for="i, idx of searchResult" :key="i.refIndex"
        flex gap-2 w-full
        :class="idx === index ? 'dark:bg-neutral-800 bg-gray-2' : ''"
        @click="add(i.item)"
      >
        <TimezoneItem :timezone="i.item" />
      </button>
    </div>
  </div>
</template>

<style scoped>
*:focus {
  outline: none;
}
</style>
