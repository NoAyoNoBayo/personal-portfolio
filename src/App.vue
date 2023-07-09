<script setup lang="ts">
import HeaderMenu from '@/components/header/HeaderMenu.vue'
import FooterMenu from '@/components/footer/FooterMenu.vue'
</script>

<template>
  <div class="flex h-full w-full">
    <div class="flex flex-column h-full w-full">
      <div class="header-container flex flex-row">
        <HeaderMenu></HeaderMenu>
      </div>
      <div
        class="flex flex-row h-full w-full justify-content-center align-items-center overflow-y-hidden overflow-x-hidden">
        <RouterView></RouterView>
      </div>
      <div class="flex flex-row">
        <FooterMenu></FooterMenu>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
