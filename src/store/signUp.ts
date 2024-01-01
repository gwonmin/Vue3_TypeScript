import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '@/api/client';

export const useSignUpStore = defineStore('signUp', () => {
  const userEmail = ref('email');

  async function signUp({ email, password }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(data, error);
  }

  return { userEmail, signUp };
});
