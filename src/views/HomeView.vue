<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MainTitle @change="onChange" />
    {{ dataFromMainTitle.content }}
    <h2>Today</h2>
    <h3>{{ getToday }}</h3>
    <h2>Computed RealTime(reset when you refresh)</h2>
    <h3>{{ getComputedRealTime }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import MainTitle from '@/components/MainTitle.vue'; // @ is an alias to /src
import dayjs from 'dayjs';

const today = new Date();
const getToday = ref<Date | string>(dayjs(today).format('YYYY-MM-DD'));

const getComputedRealTime = computed<Date>(() => {
  return new Date();
});

interface DataFromMainTitle {
  content: string;
}
const dataFromMainTitle: DataFromMainTitle = reactive({ content: '' });

function onChange(data: string) {
  dataFromMainTitle.content = data;
}
</script>
