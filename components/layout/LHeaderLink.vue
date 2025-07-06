<script setup lang="ts">
const props = defineProps<{
  text: string,
  icon?: string,
  to?: string,
  target?: '_blank' | '_parent' | '_self' | '_top'
}>();
</script>

<template>
  <NuxtLinkLocale :to :target class="flex items-center gap-4px bg-white px-8px py-2px rounded-8px hover:bg-gray-1 transition-all duration-100">
    <Icon v-if="icon" :name="icon" class="text-gray-8" />
    <p class="text-14px font-500 text-shadow-sm text-gray-7">{{ text }}</p>
  </NuxtLinkLocale>
</template>

<style scoped>

</style>