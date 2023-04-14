import { timezones } from './data'

export interface State {
  name?: string
  description?: string
  zones: string[]
  home: string
  date: Date
  selections: Selection[]
}

export interface Selection {
  from: Date
  to: Date
}

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone
export const storage = useStorage<State>('what-time-state', {
  zones: [userTimezone],
  home: userTimezone,
  date: new Date(),
  selections: [],
})

export const now = useNow({ interval: 30_000 })
export const zoneNames = computed(() => storage.value.zones)
export const zones = computed(() => zoneNames.value.map(name => timezones.find(i => i.name === name)))
export const homeZone = toRef(storage.value, 'home')
export const homeOffset = computed(() => timezones.find(i => i.name === homeZone.value)?.offset || 0)

export function setHomeZone(timezone: Timezone) {
  homeZone.value = timezone.name
}

if (!zones.value.length)
  zoneNames.value.push(userTimezone)

export function addToTimezones(timezone: Timezone) {
  zoneNames.value.push(timezone.item.name)
}
export function removeZone(timezone: Timezone) {
  zoneNames.value = zoneNames.value.filter(name => name !== timezone.name)
}
export function moveZone(timezone: Timezone, delta: 1 | -1) {
  const index = zoneNames.value.indexOf(timezone.name)
  if (index === -1)
    return
  const target = index + delta
  const other = zoneNames.value[target]
  zoneNames.value[target] = timezone.name
  zoneNames.value[index] = other
}
