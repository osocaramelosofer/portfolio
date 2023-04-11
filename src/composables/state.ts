import { timezones } from './data';

export const zoneNames = useStorage<string[]>('world-time-zones', [])
export const zones = computed(()=> zoneNames.value.map(name => timezones.find( i => i.name === name)))

export function addToTimezones(timezone: Timezone) {
  zoneNames.value.push(timezone.item.name)
}

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone

if(!zones.value.length){
  zoneNames.value.push(userTimezone)
}
