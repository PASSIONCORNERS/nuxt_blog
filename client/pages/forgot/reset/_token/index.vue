<template>
  <div class="mt-44">
    <div class="container mx-auto px-4">
      <h1 class="text-center text-4xl">Reset your password</h1>
      <form class="flex flex-col w-full md:w-4/12 mx-auto">
        <input
          type="password"
          class="border border-indigo-500 rounded shadow-lg py-3 mt-20 pl-4"
          placeholder="Enter new password"
        />
        <input
          type="password"
          class="border border-indigo-500 rounded shadow-lg py-3 mt-4 pl-4"
          placeholder="Confirm new password"
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
          reset
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
