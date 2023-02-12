<template>
  <HeaderMainFooterLayout>
    <template v-slot:header>
      <RealTimeClork />
      <BasicTab :tapOption="tapOption">
        <template v-slot:Home><HomeView /></template>
        <template v-slot:About><AboutView /></template>
      </BasicTab>
    </template>
    <template v-slot:main></template>
    <template v-slot:footer></template>
  </HeaderMainFooterLayout>
  <el-backtop :right="100" :bottom="100" />
</template>

<script setup lang="ts">
import HeaderMainFooterLayout from '@/components/HeaderMainFooterLayout.vue';
import BasicTab from '@/components/BasicTab.vue';
import RealTimeClork from '@/components/RealTimeClork.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';

const tapOption = ['Home', 'About'];
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
