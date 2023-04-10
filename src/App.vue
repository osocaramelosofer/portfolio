<script setup lang="ts">
import timezones from 'timezones.json'
import Fuse from 'fuse.js'
import type { Timezone } from './types'

const zones = ref<Timezone[]>([])
const input = ref('')
const fuse = new Fuse(timezones, {
  keys: ['utc', 'value', 'text', 'abbr'],
})

const searchResult = computed(() => {
  // return timezones.filter(i => i.utc.find(u => u.includes(input.value)))
  return fuse.search(input.value)
})
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <input v-model="input" type="text" text-black>
    <div>
      <div v-for="i of searchResult" :key="i.refIndex">
        {{ i.item.text }}
      </div>
    </div>

    <!-- <RouterView />
    <TheFooter /> -->
  </main>
</template>
