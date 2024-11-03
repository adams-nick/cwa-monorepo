<template>
  <div class="example-component">
    <p>{{ apiUrl }}</p>
  </div>
</template>

<script setup>
const {
  public: { BASE_API_URL },
} = useRuntimeConfig()
const apiUrl = BASE_API_URL
</script>

<style scoped></style>
