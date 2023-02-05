<template>
  <div>
    <h1>{{ props.title }}</h1>
    <h3>{{ props.subTitle }}</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">{{
          props.description
        }}</a>
      </li>
    </ul>
    <button @click="onClick">Show Detail!</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue';

// Props
// interface Props {
//   title: string;
// }
// const props = defineProps<Props>();

// Props Default Values
interface Props {
  title?: string;
  subTitle?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Welcome to Your Vue.js + TypeScript App',
  subTitle: 'Tech Stack',
  description: 'Vue3 + Typescript + Vuex',
});

// type-based
const emit = defineEmits<{
  (e: 'change', value: string): void;
}>();

function onClick() {
  emit('change', 'detail!');
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
