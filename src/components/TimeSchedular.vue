<script lang="ts" setup>
import { moveZone, removeZone } from '~/composables/state'
</script>

<template>
  <div>
    <div
      v-for="zone, idx of zones"
      :key="zone.name"
      p="~ x3 y2" border="~ b base"
      relative
    >
      <TimezoneItem :timezone="zone" />
      <div
        absolute top-4 bottom-0 left="~ -7"
        dark:text-2xl flex="~ col" items-center justify-center
      >
        <button
          v-if="idx !== 0"
          text-2xl
          icon-btn m--1px i-material-symbols:arrow-drop-up
          title="Move up"
          @click="moveZone(zone, -1)"
        />
        <button
          icon-btn m--1px text-sm i-carbon:close-outline
          title="Remove"
          @click="removeZone(zone)"
        />
        <button
          v-if="idx !== zones.length - 1"
          icon-btn text-2xl m--1px i-material-symbols:arrow-drop-down
          title="Move down"
          @click="moveZone(zone, 1)"
        />
      </div>
    </div>
  </div>
</template>
