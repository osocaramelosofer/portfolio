<script lang="ts" setup>
import { homeZone, moveZone, removeZone, setHomeZone } from '~/composables/state'
import { timezoneItemHeight, timezoneItemWidth } from '~/composables/constants'
</script>

<template>
  <div relative select-none>
    <div
      absolute left--6 top-0 bottom-0
      flex="~ col"
    >
      <div
        v-for="zone, idx of zones"
        :key="zone.name"
        flex="~ col none" text-xl justify-center items-center
        :style="{ height: `${timezoneItemHeight}px` }"
      >
        <button
          v-if="idx !== 0"
          icon-btn m--1px i-material-symbols:arrow-drop-up
          title="Move up"
          @click="moveZone(zone, -1)"
        />

        <button
          v-if="homeZone !== zone.name"
          icon-btn m--1px text-sm i-carbon:close-outline
          title="Remove"
          @click="removeZone(zone)"
        />

        <button
          v-if="homeZone !== zone.name"
          icon-btn m--1px i-carbon:home scale-75
          title="Set to home zone"
          @click="setHomeZone(zone)"
        />
        <button
          v-if="idx !== zones.length - 1"
          icon-btn m--1px text-2xl i-material-symbols:arrow-drop-down
          title="Move down"
          @click="moveZone(zone, 1)"
        />
      </div>
    </div>
    <div of-x-auto of-visible relative>
      <div
        v-for="zone of zones"
        :key="zone.name"
        border="b base"
      >
        <div flex="~ row" items-center w-max>
          <TimezoneItem
            :style="{ height: `${timezoneItemHeight}px`, width: `${timezoneItemWidth}px` }"
            :timezone="zone"
            flex-none px3
          />
          <TimeDial :timezone="zone" />
        </div>
      </div>
      <!-- <SelectionOverlay
        absolute inset-0 w-full
        :style="{ left: `${timezoneItemWidth}px` }"
      /> -->
    </div>
  </div>
</template>
