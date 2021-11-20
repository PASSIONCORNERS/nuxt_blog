<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-5xl text-center mt-14" v-if="error.statusCode === 404">
        Page not found
      </h1>
      <h1 v-else>An error occurred</h1>
      <div>
        <img class="mt-2" src="/images/404.png" alt="404 illustration" />
      </div>
      <NuxtLink to="/">Return Back 🏠</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  // layout: "blog",
};
</script>
