<script lang="ts" setup>
</script>

<template>
  <div>
    <div
      v-for="zone, idx of zones"
      :key="zone.name"
      p="~ x3 y2" border="~ b base"
    >
      <TimezoneItem :timezone="zone" />
    </div>
  </div>
</template>
