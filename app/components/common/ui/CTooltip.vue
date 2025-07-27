<script setup lang="ts">
const props = defineProps<{
  text: string
}>();
const isOpen = ref<boolean>(false);
</script>

<template>
  <div class="relative">
    <div @mouseenter="isOpen = true" @mouseleave="isOpen = false">
      <slot />
    </div>
    <div :class="isOpen ? 'opacity-100' : 'opacity-0'" class="absolute flex w-full justify-center mt-5px transition-all-150">
      <div class="whitespace-nowrap bg-white b-b-(solid 1px gray-2) shadow-md rounded-6px px-8px py-1px leading-tight text-12px font-500 text-shadow-sm text-gray-8">
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>