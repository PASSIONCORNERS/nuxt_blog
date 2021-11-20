<template>
  <div class="mt-44">
    <div class="container mx-auto px-4">
      <h1 class="text-center text-4xl">Please enter your email 📨</h1>
      <p class="text-center mt-4">To reset your password</p>
      <form class="flex flex-col w-full md:w-4/12 mx-auto">
        <input
          type="text"
          class="border border-indigo-500 rounded shadow-lg py-3 mt-20 pl-4"
          placeholder="Enter your email..."
        />
        <button
          class="
            bg-indigo-500
            py-3
            px-5
            rounded
            text-white
            mt-4
            hover:bg-indigo-400
            transition-all
            uppercase
          "
        >
          send
        </button>
      </form>
      <nuxt-link to="/">
        <p class="text-center mt-8">Sign Up ?</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
