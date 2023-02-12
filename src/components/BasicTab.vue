<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane
      v-for="tap in props.tapOption"
      :key="tap"
      :label="tap"
      :name="tap"
    >
      <slot :name="tap"></slot>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref, defineProps, withDefaults } from 'vue';
import type { TabsPaneContext } from 'element-plus';

interface Props {
  tapOption: Array<string>;
}
const props = withDefaults(defineProps<Props>(), {
  tapOption: () => ['first'],
});

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
