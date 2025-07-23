<script setup lang="ts">
const props = defineProps<{
  text: string,
  icon?: string,
}>();
const isOpen = ref<boolean>(false);
</script>

<template>
  <div class="relative">
    <div @click="isOpen = !isOpen" class="flex items-center gap-4px bg-white px-8px py-2px rounded-8px hover:bg-gray-1 transition-all duration-100 cursor-pointer">
      <Icon v-if="icon" :name="icon" class="text-gray-8" />
      <p class="text-14px font-500 text-shadow-sm text-gray-7">{{ text }}</p>
      <Icon v-if="isOpen" name="tabler:caret-up-filled" class="text-gray-7 text-15px" />
      <Icon v-if="!isOpen" name="tabler:caret-down-filled" class="text-gray-7 text-15px" />
    </div>
    <div v-if="isOpen" class="absolute flex w-full justify-center mt-5px">
      <div class="bg-white z-999 p-8px rounded-10px shadow-md">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>