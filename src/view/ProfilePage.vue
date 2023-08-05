<template>
  <TheNavbar />
  <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        This information will be displayed publicly so be careful what you
        share.
      </p>
      <div class="mt-4">
        <label
          for="imageUrl"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Profile photo url</label
        >
        <div class="mt-2 w-full">
          <n-input
            id="imageUrl"
            v-model:value="form.imageUrl"
            name="imageUrl"
            class="
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
      </div>
      <div class="mt-4">
        <label
          for="username"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Username</label
        >
        <div class="mt-2 w-full">
          <n-input
            id="username"
            v-model:value="form.username"
            name="username"
            class="
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
      </div>
    </div>
    <div class="w-full text-center mt-2">
      <p v-if="errorMessage" class="text-sm text-red-600">
        {{ errorMessage }}
      </p>
    </div>
    <div class="w-full mt-6 flex justify-end">
      <button
        class="
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
        @click="updateProfile"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import TheNavbar from '@/TheNavbar.vue';
import { NInput } from 'naive-ui';
import { ref, onMounted } from 'vue';
import { findById, updateUser } from '@/service/UserService';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  username: '',
  imageUrl: '',
});

const errorMessage = ref('');

const user = JSON.parse(localStorage.getItem('user'));

onMounted(async () => {
  try {
    const res = await findById(user.id);
    form.value = res.data;
  } catch (e) {
    errorMessage.value = 'Something went wrong!';
  }
});

async function updateProfile() {
  try {
    await updateUser(user.id, form.value);
    user.imageUrl = form.value.imageUrl;
    user.username = form.value.username;
    localStorage.setItem('user', JSON.stringify(user));
    router.push('/items');
  } catch (e) {
    errorMessage.value = 'Something went wrong!';
  }
}
</script>
