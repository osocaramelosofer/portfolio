<script lang="ts" setup>
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
      <div absolute text-xl top-4 bottom-0 left="~ -7"
        dark:text-2xl
      >
        <button 
        button i-fluent-emoji:cross-mark
        dark:i-fluent-emoji:cross-mark-button
        ></button>
      </div>
    </div>
  </div>
</template>
