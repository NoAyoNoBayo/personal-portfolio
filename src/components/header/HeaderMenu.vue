<script setup lang="ts">
import { ref } from 'vue';
const items = ref([
  {
    label: "Home",
    icon: "pi pi-home"
  },
  {
    label: "Projects",
    icon: "pi pi-box"
  },
  {
    label: "Technologies",
    icon: "pi pi-cloud"
  },
  {
    label: "Interests",
    icon: "pi pi-heart"

  },
])
</script>
<template>
  <Menubar :model="items" class="flex w-full surface-50">
    <template #start>
      <div class="p-2 cursor-pointer" style="color: var(--primary-color)">
        Kapouranis Dimitrios
      </div>
    </template>
    <template #end>
      <Button size="small" label="Reach out" icon="pi pi-comment" style="color: var(--surface-ground);"></Button>
    </template>
  </Menubar>
</template>
<style scoped>
:deep(.p-menuitem-icon) {
  color: var(--primary-color) !important;
}
</style>
