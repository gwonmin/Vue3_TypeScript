<template>
  <strong>{{ realTime.time }}</strong>
</template>
<script setup lang="ts">
import { onBeforeUnmount, reactive, ref } from 'vue';

interface RealTime {
  time?: Date | string;
}
const realTime: RealTime = reactive({
  time: Intl.DateTimeFormat(navigator.language, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(),
});

const interval = ref<number>(1000);

// update the time every second
setInterval(() => {
  // Concise way to format time according to system locale.
  realTime.time = Intl.DateTimeFormat(navigator.language, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format();
}, interval.value);

// prevent memory leak
onBeforeUnmount(() => clearInterval(interval.value));
</script>
