<template>
  <RealTimeClork />
  <el-button @click="store.increment"></el-button>
  {{ store.name }}
  {{ store.doubleCount }}
</template>
<script setup lang="ts">
import RealTimeClork from '@/components/utils/RealTimeClork.vue';
import { useCounterStore } from '@/store/counter';
import { onUnmounted } from 'vue';

const store = useCounterStore();
onUnmounted(() => {
  store.count = 10;
});
</script>
