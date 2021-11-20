<template>
  <div class="mt-44">
    <div class="container mx-auto px-4">
      <h1 class="text-center text-4xl">Please enter your email 📨</h1>
      <p class="text-center mt-4">To reset your password</p>
      <form
        class="flex flex-col w-full md:w-4/12 mx-auto"
        @submit.prevent="formSubmit"
      >
        <input
          v-model="form.email"
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
import { isEmpty, isEmail } from "~/utils/validate";
export default {
  data() {
    return {
      form: {
        email: "",
      },
    };
  },
  methods: {
    async formSubmit() {
      // check fields
      if (!isEmpty(this.form.email))
        return this.$toast.error("Please fill in all fields", {
          position: "top-center",
          duration: 8000,
          action: {
            text: "CLOSE",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
        });
      // check email
      if (!isEmail(this.form.email))
        return this.$toast.error("Please enter a valid email address", {
          position: "top-center",
          duration: 8000,
          action: {
            text: "CLOSE",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
        });
      // call to api
      await this.$axios
        .$post("http://localhost:8000/api/auth/forgot_pass", this.form)
        .then((res) => {
          // console.log(res.message);
          this.form.email = "";
          this.$toast.success(res.message, {
            position: "top-center",
            duration: 5000,
            action: {
              text: "CLOSE",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              },
            },
          });
          this.$router.push("/");
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            position: "top-center",
            duration: 5000,
            action: {
              text: "CLOSE",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              },
            },
          });
        });
      // console.log(this.email);
    },
  },
};
</script>

<style></style>
