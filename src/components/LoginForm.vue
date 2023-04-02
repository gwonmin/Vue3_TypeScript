<template>
  <el-form
    ref="loginForm"
    label-position="left"
    label-width="100px"
    :model="userInfo"
    style="max-width: 460px"
  >
    <el-form-item label="Id">
      <el-input v-model="userInfo.id" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="userInfo.password" />
    </el-form-item>
  </el-form>
  <el-button @click="onClickLoginButon">Login</el-button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, reactive } from 'vue';

interface Props {
  id: string;
  password: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  password: '',
});

const userInfo = reactive({ id: props.id, password: props.password });

const emit = defineEmits<{
  (e: 'loginFormChange', value: object): void;
}>();

const onClickLoginButon = () => {
  emit('loginFormChange', userInfo);
};
</script>
