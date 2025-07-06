<script setup lang="ts">
const {t, locales, setLocale} = useI18n();
</script>

<template>
  <header class="flex items-center justify-between h-60px">
    <div class="flex items-center gap-8px">
      <div class="bg-white size-34px rounded-9px flex items-center justify-center shadow-sm">
        <NuxtImg src="/favicon.svg" class="size-22px" />
      </div>
      <p class="text-gray-8 font-700 text-shadow-md text-18px">Noote 🚧</p>
    </div>
    <div class="flex flex-wrap items-center gap-10px">
      <LHeaderLink :text="t('header.home')" icon="tabler:home" to="/" />
      <LHeaderLink :text="t('header.changelog')" icon="tabler:script" to="/changelog/" />
      <LHeaderDropdown :text="t('header.change_lang')" icon="tabler:world">
        <div class="flex flex-col gap-5px">
          <button v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)" class="px-8px py-4px hover:bg-gray-1 rounded-8px text-14px font-500 text-shadow-sm text-gray-8">
            {{ locale.name }}
          </button>
        </div>
      </LHeaderDropdown>
    </div>
  </header>
</template>

<style scoped>

</style>