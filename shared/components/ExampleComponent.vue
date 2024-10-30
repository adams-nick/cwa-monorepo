<!-- shared/components/ExampleComponent.vue -->
<template>
  <div class="example-component">
    <p>{{ apiUrl }}</p>
  </div>
</template>

<script setup>
const apiUrl = useRuntimeConfig().public.BASE_API_URL;
</script>

<style scoped></style>
