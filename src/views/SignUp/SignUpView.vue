<template>
  <el-form
    ref="signInForm"
    :model="ruleForm"
    status-icon
    label-width="120px"
    style="max-width: 460px"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="ruleForm.password" type="password" />
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPass">
      <el-input v-model="ruleForm.checkPass" type="password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { useSignUpStore } from '@/store/signUp';
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';

const store = useSignUpStore();

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  email: '',
  password: '',
  checkPass: '',
});

const submitForm = () => {
  if (!ruleForm) return;
  console.log(ruleForm.email);
  console.log(ruleForm.password);
  store.signUp({ email: ruleForm.email, password: ruleForm.password });
  console.log('submit!');
};
</script>
