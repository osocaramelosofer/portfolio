<script lang="ts" setup>
import { now } from '~/composables/state'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  hour: 'numeric',
  minute: 'numeric',
})

const state = computed(() => timezone.name.split('/')[0].replace(/_/g, ' '))
const city = computed(() => timezone.name.split('/')[1]?.replace(/_/g, ' ') || '')
const offset = computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)
const time = computed(() => formatter.format(now.value))
</script>

<template>
  <button
    flex justify-between w-full
    gap2 py1
  >
    <div flex="~ col">
      <div flex gap1 items-center>
        <span w-8 op70 font-bold ma>
          {{ offset }}
        </span>
        <span>
          {{ city }}
          <sup ml-.5>{{ timezone.abbr }}</sup>
        </span>
      </div>
      <div>
        <span text-sm op50 leading-1em>
          {{ state }}
        </span>
      </div>
    </div>
    <div
      tabular-nums text-sm w-20
      border="~ gray/2 rounded" shadow
    >
      {{ time }}
    </div>
  </button>
</template>
