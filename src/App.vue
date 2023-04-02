<template>
  <HeaderMainFooterLayout>
    <template v-slot:header>MyLab</template>
    <template v-slot:main>
      <router-view></router-view>
    </template>
    <template v-slot:footer>footer</template>
  </HeaderMainFooterLayout>
  <el-backtop :right="100" :bottom="100" />
</template>

<script setup lang="ts">
import HeaderMainFooterLayout from './components/HeaderMainFooterLayout.vue';
</script>
