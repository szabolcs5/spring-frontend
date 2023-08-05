<template>
  <div class="flex flex-col w-full">
    <TheNavbar />
    <div class="bg-white">
      <div
        class="
          mx-auto
          max-w-2xl
          px-4
          py-16
          sm:px-6 sm:py-24
          lg:max-w-7xl lg:px-8
        "
      >
        <div class="w-full flex justify-between">
          <h2
            class="text-2xl font-bold tracking-tight text-gray-900 text-center"
          >
            Items page
          </h2>
          <button
            class="
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
            @click="isItemModalOpen = true"
          >
            + Add new item
          </button>
        </div>

        <div
          class="
            mt-6
            grid grid-cols-1
            gap-x-6 gap-y-10
            sm:grid-cols-2
            lg:grid-cols-4
            xl:gap-x-8
          "
        >
          <div v-for="product in products" :key="product.id" class="relative">
            <div
              class="
                aspect-h-1 aspect-w-1
                w-full
                rounded-md
                bg-gray-200
                lg:aspect-none lg:h-80
              "
            >
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="
                  h-full
                  w-full
                  object-cover object-center
                  lg:h-full lg:w-full
                "
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <router-link :to="`items/${product.id}`">
                    {{ product.name }}
                  </router-link>
                </h3>
              </div>
              <p class="text-sm font-medium text-gray-900">
                {{ product.price }}$
              </p>
              <p class="text-sm font-medium text-gray-900">
                Quantity: {{ product.quantity }}
              </p>
            </div>
            <div class="flex flex-row justify-between">
              <button
                :disabled="product.quantity === 0"
                :class="
                  product.quantity !== 0
                    ? 'bg-indigo-500 hover:bg-indigo-700'
                    : 'bg-gray-700'
                "
                class="
                  mt-2
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded-full
                  cursor-pointer
                "
                @click="addToCart(product)"
              >
                Add to cart
              </button>
              <TrashIcon
                class="w-5 h-5 mt-4 cursor-pointer text-red-500"
                @click="handleDelete(product.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CreateItemModal v-model="isItemModalOpen" />
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import TheNavbar from '@/TheNavbar.vue';
import { useProductStore } from '@/store/productStore';
import CreateItemModal from '@/components/CreateItemModal.vue';
import { TrashIcon } from '@heroicons/vue/24/solid';
import { deleteItem } from '@/service/ItemService';

const productStore = useProductStore();

const isItemModalOpen = ref(false);

const products = computed(() => productStore.products);

function addToCart(productToBeAdded) {
  productStore.products = productStore.products.map((product) => {
    if (product.id === productToBeAdded.id) {
      product.quantity--;
    }
    return product;
  });

  const productIndex = productStore.cart.findIndex(
    (product) => product.id === productToBeAdded.id,
  );
  if (productIndex === -1) {
    productStore.cart.push({
      ...productToBeAdded,
      quantity: 1,
    });
    return;
  }

  productStore.cart = productStore.cart.map((product) => {
    if (product.id === productToBeAdded.id) {
      product.quantity++;
    }
    return product;
  });
}

async function handleDelete(id) {
  await deleteItem(id);
  productStore.getProducts();
}

onMounted(productStore.getProducts);
</script>
