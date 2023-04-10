<script setup lang="ts">
import timezoneRaw from 'timezones.json'
import Fuse from 'fuse.js'
import type { Timezone } from './types'

const timezone = timezoneRaw.flatMap((i) => {
  return i.utc.map((u) => {
    return {
      name: u,
      offset: i.offset,
    }
  })
})

const zones = ref<Timezone[]>([])
const input = ref('')
const fuse = new Fuse(timezone, {
  keys: ['name'],
})

const searchResult = computed(() => {
  return fuse.search(input.value)
})
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <input v-model="input" type="text" text-black>
    <div>
      <div v-for="i of searchResult" :key="i.refIndex">
        {{ i.item.name }} - {{ i.item.offset }}
      </div>
    </div>

    <!-- <RouterView />
    <TheFooter /> -->
  </main>
</template>
