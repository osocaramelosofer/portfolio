<script lang="ts" setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    dark:i-fluent-emoji:full-moon-face
    dark:h-10 dark:w-10 i-fluent-emoji:new-moon-face
    h-10 w-10 @click="toggleDark()"
  />
</template>

<style lang="scss" scoped>

</style>
