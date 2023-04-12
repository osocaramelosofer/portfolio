<script lang="ts" setup>
const { timezone } = defineProps<{
  timezone: Timezone
}>()

const state = computed(() => timezone.name.split('/')[0].replace(/_/g, ' '))
const city = computed(() => timezone.name.split('/')[1]?.replace(/_/g, ' ') || '')
const offset = computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)
</script>

<template>
  <button
    flex gap2 py1
  >
    <div w-8 op80 font-bold ma>
      {{ offset }}
    </div>
    <div flex="~ col">
      <div>
        {{ city }}
      </div>
      <div text-sm op50 leading-1em>
        {{ state }}
      </div>
    </div>
  </button>
</template>
