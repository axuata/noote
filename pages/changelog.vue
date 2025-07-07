<script setup lang="ts">
type Update = {
  emoji: string,
  date: string,
  title: string
}

const {t} = useI18n();
const updates: Update[] = [
  {
    emoji: '🎋',
    date: '2025-07-07',
    title: t('changelog.updates.20250707')
  }
]
</script>

<template>
  <section class="text-center py-24px">
    <p class="text-48px font-700 text-shadow-md text-gray-8">更新履歴</p>
  </section>
  <section class="py-18px">
    <div v-for="update in updates" :key="update.date" class="flex gap-12px text-20px">
      <p>{{ update.emoji }}</p>
      <p class="font-600 text-shadow-md text-gray-7">{{ update.date }}</p>
      <p class="font-600 text-shadow-md text-gray-8">{{ update.title }}</p>
    </div>
  </section>
</template>

<style scoped>

</style>