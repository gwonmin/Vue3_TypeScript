<template>
  <LoginForm
    :id="userInfo.id"
    :password="userInfo.password"
    @loginFormChange="loginForm"
  />
  <el-button @click="onClickSignInButton">Sign In</el-button>
  <el-button @click="onClickLookAroundButton">Look around</el-button>
</template>

<script setup lang="ts">
import router from '@/router';
import { reactive } from 'vue';
import LoginForm from '../components/LoginForm.vue';

interface UserInfo {
  id: string;
  password: string;
}
const userInfo: UserInfo = reactive({ id: '', password: '' });

const loginForm = (userInfo: object) => {
  // 로그인 로직 들어갈 자리
  console.log(userInfo);
};

const onClickLookAroundButton = () => {
  router.push({ path: '/about' });
};
const onClickSignInButton = () => {
  router.push({ path: '/signin' });
};
</script>
