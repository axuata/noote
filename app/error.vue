<script setup lang="ts">
import type {NuxtError} from '#app';

const props = defineProps<{
  error: NuxtError
}>();
</script>

<template>
  <NuxtLayout>
    <div class="text-center py-24px">
      <div class="leading-tight">
        <h1 class="text-80px font-700 text-red-5 text-shadow-md">{{ error.statusCode }}</h1>
        <p class="text-gray-8 font-500 text-shadow-sm">{{ error.statusMessage }}</p>
      </div>
<!--      <div>-->
<!--        <NuxtLink to="/" class="text-shadow-sm font-500">Go to home</NuxtLink>-->
<!--      </div>-->
    </div>
  </NuxtLayout>
</template>
