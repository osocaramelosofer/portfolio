<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
</script>

<template>
  <div>
    <span />

    <div i-carbon-pedestrian text-4xl inline-block />
    <div i-fluent-emoji:call-me-hand text-4xl inline-block />
    <p>
      Fuck you, {{ props.name }}!
    </p>
    <div i-fluent-emoji:broccoli text-5xl />
    <TheTest />
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
