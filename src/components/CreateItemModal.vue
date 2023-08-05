<template>
  <TransitionRoot as="template" :show="isOpenModal">
    <Dialog as="div" class="relative z-10" @close="isOpenModal = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="
            flex
            min-h-full
            items-end
            justify-center
            p-4
            text-center
            sm:items-center sm:p-0
          "
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="
                relative
                transform
                overflow-hidden
                rounded-lg
                bg-white
                px-4
                pb-4
                pt-5
                text-left
                shadow-xl
                transition-all
                sm:my-8 sm:w-full sm:max-w-lg sm:p-6
              "
            >
              <div class="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h3"
                  class="text-base font-semibold leading-6 text-gray-900"
                  >Create new item
                </DialogTitle>
                <div class="flex flex-col space-y-6 mt-6">
                  <div class="flex flex-col space-y-2 mx-auto w-1/2">
                    <label for="name">Item name</label>
                    <n-input
                      id="name"
                      v-model:value="form.name"
                      name="name"
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

                  <div class="flex flex-col space-y-2 mx-auto w-1/2">
                    <label for="price">Price</label>
                    <n-input-number
                      id="price"
                      v-model:value="form.price"
                      name="price"
                      min="1"
                    />
                  </div>

                  <div class="flex flex-col space-y-2 mx-auto w-1/2">
                    <label for="quantity">Quantity</label>
                    <n-input-number
                      id="quantity"
                      v-model:value="form.quantity"
                      name="quantity"
                      min="1"
                    />
                  </div>
                  <div class="flex flex-col space-y-2 mx-auto w-1/2">
                    <label for="imageSrc">Image url</label>
                    <n-input
                      id="imageSrc"
                      v-model:value="form.imageSrc"
                      name="imageSrc"
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
                  <div class="flex flex-col space-y-2 mx-auto w-1/2">
                    <label for="description">Description</label>
                    <n-input
                      id="description"
                      v-model:value="form.description"
                      name="description"
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
                </div>
              </div>
              <div class="w-full text-center">
                <p v-if="errorMessage" class="text-sm text-red-600">
                  {{ errorMessage }}
                </p>
              </div>
              <div
                class="
                  mt-5
                  sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3
                "
              >
                <button
                  type="button"
                  class="
                    inline-flex
                    w-full
                    justify-center
                    rounded-md
                    bg-indigo-600
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    hover:bg-indigo-500
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-indigo-600
                    sm:col-start-2
                  "
                  @click="submitForm"
                >
                  Create
                </button>
                <button
                  ref="cancelButtonRef"
                  type="button"
                  class="
                    mt-3
                    inline-flex
                    w-full
                    justify-center
                    rounded-md
                    bg-white
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    text-gray-900
                    shadow-sm
                    ring-1 ring-inset ring-gray-300
                    hover:bg-gray-50
                    sm:col-start-1 sm:mt-0
                  "
                  @click="isOpenModal = false"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { NInput, NInputNumber } from 'naive-ui';
import { ref, computed } from 'vue';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { sendItem } from '@/service/ItemService';
import { useProductStore } from '@/store/productStore';

const productStore = useProductStore();

const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const form = ref({
  name: '',
  price: 1,
  quantity: 1,
  imageSrc: '',
  description: '',
});

const errorMessage = ref('');

const isOpenModal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

async function submitForm() {
  try {
    await sendItem(form.value);
    productStore.getProducts();
    isOpenModal.value = false;
  } catch (e) {
    errorMessage.value = 'Please fill all the input fields!';
  }
}
</script>
