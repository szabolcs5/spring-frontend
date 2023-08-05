<template>
  <TheNavbar />
  <div
    class="
      mx-auto
      max-w-2xl
      px-4
      py-16
      sm:px-6 sm:py-24
      lg:max-w-7xl lg:px-8
      flex flex-col
    "
  >
    <h1 class="text-xl text-gray-700 text-center">Product information</h1>
    <div v-if="!errorMessage" class="mt-4 flex flex-col justify-between">
      <div>
        <h3 class="text-sm text-gray-700">Item name: {{ product.name }}</h3>
      </div>
      <p class="text-sm font-medium text-gray-900">
        Price: {{ product.price }}$
      </p>
      <p class="text-sm font-medium text-gray-900">
        Quantity: {{ product.quantity }}
      </p>
      <p class="text-sm font-medium text-gray-900">
        Description: {{ product.description }}
      </p>
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
      <button
        class="
          justify-center
          mt-4
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
        @click="handleBack"
      >
        &lt; Back to items page
      </button>
    </div>
    <div v-else>
      <h3 class="text-md text-gray-700">
        {{ errorMessage }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getItem } from '@/service/ItemService';
import TheNavbar from '@/TheNavbar.vue';

const router = useRouter();

const id = computed(() => router.currentRoute.value.params.id ?? '');

const product = ref({});

const errorMessage = ref('Product not found');

onMounted(async () => {
  try {
    const res = await getItem(id.value);
    product.value = res.data;
    errorMessage.value = '';
  } catch (e) {
    errorMessage.value = 'Product not found';
  }
});

function handleBack() {
  router.push('/items');
}
</script>
