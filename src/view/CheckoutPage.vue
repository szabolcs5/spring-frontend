<template>
  <TheNavbar />
  <div class="bg-gray-50">
    <div
      class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Checkout</h2>

      <form
        class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
        @submit.prevent
      >
        <div>
          <div>
            <h2 class="text-lg font-medium text-gray-900">
              Contact information
            </h2>

            <div class="mt-4">
              <label
                for="email-address"
                class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <n-input
                  id="email-address"
                  type="email"
                  name="email-address"
                  autocomplete="email"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">
              Shipping information
            </h2>

            <div
              class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
            >
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700"
                  >First name</label
                >
                <div class="mt-1">
                  <n-input
                    id="first-name"
                    type="text"
                    name="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                  >Last name</label
                >
                <div class="mt-1">
                  <n-input
                    id="last-name"
                    type="text"
                    name="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="company"
                  class="block text-sm font-medium text-gray-700"
                  >Company</label
                >
                <div class="mt-1">
                  <n-input
                    id="company"
                    type="text"
                    name="company"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="address"
                  class="block text-sm font-medium text-gray-700"
                  >Address</label
                >
                <div class="mt-1">
                  <n-input
                    id="address"
                    type="text"
                    name="address"
                    autocomplete="street-address"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="apartment"
                  class="block text-sm font-medium text-gray-700"
                  >Apartment, suite, etc.</label
                >
                <div class="mt-1">
                  <n-input
                    id="apartment"
                    type="text"
                    name="apartment"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="city"
                  class="block text-sm font-medium text-gray-700"
                  >City</label
                >
                <div class="mt-1">
                  <n-input
                    id="city"
                    type="text"
                    name="city"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="region"
                  class="block text-sm font-medium text-gray-700"
                  >State / Province</label
                >
                <div class="mt-1">
                  <n-input
                    id="region"
                    type="text"
                    name="region"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700"
                  >Postal code</label
                >
                <div class="mt-1">
                  <n-input
                    id="postal-code"
                    type="text"
                    name="postal-code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                  >Phone</label
                >
                <div class="mt-1">
                  <n-input
                    id="phone"
                    type="text"
                    name="phone"
                    autocomplete="tel"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Payment -->
          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Payment</h2>

            <fieldset class="mt-4">
              <legend class="sr-only">Payment type</legend>
            </fieldset>

            <div class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
              <div class="col-span-4">
                <label
                  for="card-number"
                  class="block text-sm font-medium text-gray-700"
                  >Card number</label
                >
                <div class="mt-1">
                  <n-input
                    id="card-number"
                    v-model:value="form.cardNumber"
                    type="text"
                    name="card-number"
                    autocomplete="cc-number"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-4">
                <label
                  for="name-on-card"
                  class="block text-sm font-medium text-gray-700"
                  >Name on card</label
                >
                <div class="mt-1">
                  <n-input
                    id="name-on-card"
                    v-model:value="form.cardHolder"
                    type="text"
                    name="name-on-card"
                    autocomplete="cc-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-3">
                <label
                  for="expiration-date"
                  class="block text-sm font-medium text-gray-700"
                  >Expiration date (MM/YY)</label
                >
                <div class="mt-1">
                  <n-input
                    id="expiration-date"
                    v-model:value="form.expirationDate"
                    type="text"
                    name="expiration-date"
                    autocomplete="cc-exp"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="cvc" class="block text-sm font-medium text-gray-700"
                  >CVC</label
                >
                <div class="mt-1">
                  <n-input
                    id="cvc"
                    v-model:value="form.cvc"
                    type="text"
                    name="cvc"
                    autocomplete="csc"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order summary -->
        <div class="mt-10 lg:mt-0">
          <h2 class="text-lg font-medium text-gray-900">Order summary</h2>

          <div
            class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <h3 class="sr-only">Items in your cart</h3>
            <ul role="list" class="divide-y divide-gray-200">
              <li
                v-for="product in cart"
                :key="product.id"
                class="flex px-4 py-6 sm:px-6 w-full"
              >
                <div class="flex flex-row w-full space-x-12">
                  <div class="flex-shrink-0">
                    <img :src="product.imageSrc" class="w-20 rounded-md" />
                  </div>

                  <div class="ml-6 flex flex-col">
                    <div class="flex w-full">
                      <div class="min-w-0 flex-1">
                        <h4 class="text-sm">
                          <p
                            class="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {{ product.name }}
                          </p>
                        </h4>
                      </div>
                    </div>
                    <div>
                      <div class="flex flex-1 items-end justify-between pt-2">
                        <p class="mt-1 text-sm font-medium text-gray-900">
                          Price: ${{ product.price }}
                        </p>
                      </div>

                      <div class="flex flex-1 items-end justify-between pt-2">
                        <p class="mt-1 text-sm font-medium text-gray-900">
                          Quantity: {{ product.quantity }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <dl class="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex items-center justify-between">
                <dt class="text-sm">Subtotal</dt>
                <dd class="text-sm font-medium text-gray-900">
                  ${{ productPrice }}
                </dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Shipping</dt>
                <dd class="text-sm font-medium text-gray-900">
                  ${{ shippingValue }}
                </dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Taxes</dt>
                <dd class="text-sm font-medium text-gray-900">
                  ${{ taxes.toFixed(2) }}
                </dd>
              </div>
              <div
                class="flex items-center justify-between border-t border-gray-200 pt-6"
              >
                <dt class="text-base font-medium">Total</dt>
                <dd class="text-base font-medium text-gray-900">
                  ${{ total.toFixed(2) }}
                </dd>
              </div>
            </dl>
            <p class="text-red-500 text-sm text-center">
              Please give valid informations
            </p>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <button
                type="submit"
                class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                @click="sendOrder"
              >
                Confirm order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { sendCard } from '@/service/CardsService';
import { useProductStore } from '@/store/ProductStore';
import { NInput } from 'naive-ui';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import TheNavbar from '../TheNavbar.vue';

const router = useRouter();

const form = ref({
  cardHolder: '',
  cardNumber: '',
  cvc: '',
  expirationDate: '',
  userId: JSON.parse(localStorage.getItem('user')).id,
});

const productStore = useProductStore();

const productPrice = computed(() =>
  productStore.cart.reduce((acc, product) => acc + product.price, 0),
);

const shippingValue = 5;

const taxes = computed(() => productPrice.value * 0.19);

const total = computed(() => productPrice.value + taxes.value + shippingValue);

const cart = computed(() => productStore.cart);

async function sendOrder() {
  await sendCard(form.value);
  router.push({ name: 'items' });
}
</script>
