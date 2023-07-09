<script setup lang="ts">
import { ref } from 'vue';
let value = ref()
let isHuman = ref()
</script>

<template>
  <div
    class='flex flex-wrap w-full p-1 pb-2 gap-3 surface-50 h-2 border-3 border-round border-50 justify-content-evenly align-items-center'>
    <span class="flex flex-row w-full justify-content-center font-bold" style="color: var(--primary-color);">
      I'd love to hear from you!
    </span>
    <div class="flex flex-row justify-content-between align-items-center gap-2 pt-2" style="color: var(--primary-color);">
      <div class="flex text-sm">
        Rate my portfolio:
      </div>
      <Rating v-model="value" class="flex">
        <template #cancelicon>
          <img src="https://primefaces.org/cdn/primevue/images/rating/cancel.png" height="24" width="24" />
        </template>
        <template #onicon>
          <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" height="24" width="24" />
        </template>
        <template #officon>
          <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" height="24" width="24" />
        </template>
      </Rating>
    </div>
    <div class="flex flex-row align-items-center justify-content-between gap-2 " style="color: var(--primary-color);">
      <span class="flex text-sm">Suggestions:</span>
      <InputText placeholder="I believe you could improve the following section" class="flex w-full"></InputText>
    </div>
    <div class="flex flex-row align-items-center justify-content-center gap-2" style="color:var(--primary-color)">
      <div class="flex flex-row align-items-center gap-2 text-sm">
        I am not a robot:
      </div>
      <InputSwitch v-model="isHuman"></InputSwitch>
    </div>
    <div class="flex">
      <Button size="large" rounded icon="pi pi-send" :disabled="!isHuman"></Button>
    </div>
  </div>
</template>
<style scoped></style>
