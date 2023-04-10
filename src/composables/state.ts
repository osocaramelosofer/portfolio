import type { Timezone } from '~/interfaces'

export const zones = ref<Timezone[]>([])

export function addToTimezones(timezone: Timezone) {
  zones.value.push(timezone)
}
