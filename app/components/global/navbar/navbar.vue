<template>
  <nav>
    <ul>
      <li v-for="option in options" :key="option.id"></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface Option {
  id: string;
  label: string,
  path: string
}
defineProps<{
  options: Option[];
}>();
</script>