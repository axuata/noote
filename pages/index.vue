<script setup lang="ts">
import {useLocalStorage} from '@vueuse/core';
import {v4 as uuidv4} from 'uuid';

type Note = {
  id: string,
  icon: string,
  title: string,
  content: string
}

const {t} = useI18n();
const time = ref<string>('');
const initialNotes: Note[] = [
  {
    id: uuidv4(),
    icon: '😍',
    title: 'Note 1',
    content: `Hello World`
  },
  {
    id: uuidv4(),
    icon: '🫠',
    title: 'Note 2',
    content: `Hello World`
  },
  {
    id: uuidv4(),
    icon: '✨',
    title: 'Note 3',
    content: `Hello World`
  }
];
const notes = useLocalStorage('notes', initialNotes);

onMounted(() => {
  setInterval(() => {
    updateTime();
  }, 100);
});

function updateTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  time.value = `${hours}:${minutes}:${seconds}`;
}

function updateIcon(id: string) {
  let targetNote = notes.value.find(item => item.id === id);
  if (targetNote && targetNote.icon) {
    const userInput = prompt(t('home.enter_emoji'));
    if (userInput) {
      targetNote.icon = userInput;
    }
  }
}

function createNote() {
  const emptyNote: Note = {
    id: uuidv4(),
    icon: '✏️',
    title: t('home.empty_note.title'),
    content: t('home.empty_note.content')
  }
  notes.value.push(emptyNote);
}

function removeNote(id: string) {
  notes.value = notes.value.filter(note => note.id !== id);
}
</script>

<template>
  <section class="text-center py-42px line-height-tight">
    <p v-if="time !== ''" class="text-60px font-600 text-shadow-md">{{ time }}</p>
    <div v-else class="bg-#e0e8f0 w-300px h-75px mx-auto animate-pulse rounded-16px flex items-center justify-center">
      <Icon name="tabler:loader" class="animate-spin size-32px text-slate-6" />
    </div>
  </section>
  <section class="py-8px">
    <button @click="createNote()" class="flex items-center justify-center gap-3px bg-white py-2px px-8px rounded-8px shadow-sm text-15px font-500 text-gray-8 hover:scale-105 transition-all duration-100">
      <Icon name="tabler:plus" />
      {{ t('home.create_note') }}
    </button>
  </section>
  <section v-if="notes.length > 0" class="flex flex-col gap-12px">
    <div v-for="note in notes" :key="note.id" class="bg-white shadow-sm b-(solid 1px gray-1) p-8px rounded-12px flex flex-col gap-8px">
      <div class="flex items-center justify-between gap-10px">
        <div class="flex items-center gap-10px w-full">
          <div class="flex items-center justify-center bg-#f3f8fc size-33px rounded-8px shrink-0">
            <button @click="updateIcon(note.id)" class="hover:scale-105 transition-all duration-100">{{ note.icon }}</button>
          </div>
          <input v-model="note.title" type="text" class="text-22px font-600 text-shadow-md text-gray-8 w-full">
        </div>
        <div class="flex items-center">
          <button @click="removeNote(note.id)" class="bg-white b-(solid 1px gray-2) shadow-sm flex items-center justify-center size-26px rounded-6px">
            <Icon name="tabler:trash" />
          </button>
        </div>
      </div>
      <textarea v-model="note.content" class="text-16px bg-#f3f8fc px-8px py-4px rounded-6px resize-none h-100px">{{ note.content }}</textarea>
    </div>
  </section>
  <section v-else class="w-780px h-159px bg-#e0e8f0 animate-pulse flex items-center justify-center rounded-18px">
    <p class="font-600 text-gray-8 text-18px">{{ t('home.no_notes') }}</p>
  </section>
</template>

<style scoped>

</style>