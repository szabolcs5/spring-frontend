<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="flex min-h-full flex-1">
    <div
      class="
        flex flex-1 flex-col
        justify-center
        px-4
        py-12
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-24
      "
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            class="h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2
            class="
              mt-8
              text-2xl
              font-bold
              leading-9
              tracking-tight
              text-gray-900
            "
          >
            Sign in to your account
          </h2>
          <p class="mt-2 text-sm leading-6 text-gray-500">
            Not a member?
            {{ ' ' }}
            <router-link
              :to="{ name: 'register' }"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
              >Register to the website</router-link
            >
          </p>
        </div>

        <div class="mt-10">
          <div>
            <form class="space-y-6" @submit.prevent>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email address</label
                >
                <div class="mt-2">
                  <n-input
                    id="email"
                    v-model:value="user.email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="
                      block
                      w-full
                      rounded-md
                      border-0
                      py-1.5
                      shadow-sm
                      ring-1 ring-inset ring-gray-300
                      placeholder:text-gray-400
                      focus:ring-2 focus:ring-inset focus:ring-indigo-600
                      sm:text-sm sm:leading-6
                    "
                  />
                </div>
                <p v-if="errorMessages.email" class="text-sm text-red-600">
                  {{ errorMessages.email }}
                </p>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Password</label
                >
                <div class="mt-2">
                  <n-input
                    id="password"
                    v-model:value="user.password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="
                      block
                      w-full
                      rounded-md
                      border-0
                      py-1.5
                      shadow-sm
                      ring-1 ring-inset ring-gray-300
                      placeholder:text-gray-400
                      focus:ring-2 focus:ring-inset focus:ring-indigo-600
                      sm:text-sm sm:leading-6
                    "
                  />
                </div>
                <div class="mt-2">
                  <p v-if="errorMessages.password" class="text-sm text-red-600">
                    {{ errorMessages.password }}
                  </p>
                </div>
              </div>
              <div class="w-full text-center">
                <p v-if="isCredentialsInvalid" class="text-sm text-red-600">
                  {{ errorMessages.form }}
                </p>
              </div>
              <div>
                <button
                  class="
                    flex
                    w-full
                    justify-center
                    rounded-md
                    bg-indigo-600
                    px-3
                    py-1.5
                    text-sm
                    font-semibold
                    leading-6
                    text-white
                    shadow-sm
                    hover:bg-indigo-500
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-indigo-600
                  "
                  @click="sendLogin"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { NInput } from 'naive-ui';
import { computed, ref } from 'vue';
import { sendLoginRequest } from '@/service/AuthService';
import { useRouter } from 'vue-router';

const router = useRouter();

const user = ref({
  email: '',
  password: '',
  form: '',
});

const errorMessages = ref({
  email: '',
  password: '',
});

const isCredentialsInvalid = computed(() => {
  return !errorMessages.value.email && !errorMessages.value.password;
});

async function sendLogin() {
  try {
    const res = await sendLoginRequest(user.value);
    console.log(res.data);
    localStorage.setItem('user', JSON.stringify(res.data));
    router.push('/items');
  } catch (e) {
    if (e.response.status === 400) {
      errorMessages.value = e.response.data;
      errorMessages.value.form = 'Invalid credentials';
    }
  }
}
</script>
