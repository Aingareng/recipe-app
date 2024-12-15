<script setup lang="ts">
import { links } from "./naviation";
</script>

<template>
  <header class="flex justify-between p-4">
    <NuxtLink to="/">
      <NuxtImg
        presets="algol"
        src="/icon-green.png"
        alt="icon-green"
        width="56px"
        format="webp"
        densities="x1"
      />
    </NuxtLink>
    <UHorizontalNavigation :links="links" :ui="{ wrapper: 'w-max' }">
      <template #default="{ link }">
        <span class="group-hover:text-primary relative">{{ link.label }}</span>
      </template>
    </UHorizontalNavigation>
  </header>
</template>

<style scoped></style>
