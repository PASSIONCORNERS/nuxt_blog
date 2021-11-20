<template>
  <div class="mt-44">
    <div class="container mx-auto px-4">
      <h1 class="text-center text-4xl">Reset your password</h1>
      <form
        class="flex flex-col w-full md:w-4/12 mx-auto"
        @submit.prevent="formSubmit"
      >
        <input
          v-model="form.password"
          type="password"
          autocomplete="off"
          class="border border-indigo-500 rounded shadow-lg py-3 mt-20 pl-4"
          placeholder="Enter new password"
        />
        <input
          v-model="cf_password"
          type="password"
          autocomplete="off"
          class="border border-indigo-500 rounded shadow-lg py-3 mt-4 pl-4"
          placeholder="Confirm new password"
        />
        <button
          type="submit"
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
import { isEmpty, isLength, isMatch } from "~/utils/validate";
export default {
  data() {
    return {
      form: {
        password: "",
      },
      cf_password: "",
    };
  },
  methods: {
    async formSubmit() {
      // get token
      const token = this.$route.params.token;
      // console.log("Token >>>", token);

      // check fields
      if (!isEmpty(this.form.password))
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
      // check password
      if (!isLength(this.form.password))
        return this.$toast.error("Password must be at least 6 characters", {
          position: "top-center",
          duration: 8000,
          action: {
            text: "CLOSE",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
        });
      // check match
      if (!isMatch(this.form.password, this.cf_password))
        return this.$toast.error("Password did not match", {
          position: "top-center",
          duration: 8000,
          action: {
            text: "CLOSE",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
        });
      // log
      let data = {
        password: this.form.password,
        token: token,
      };
      await this.$axios
        .$post("http://localhost:8000/api/auth/reset_pass", data)
        .then((res) => {
          console.log(res.message);
          this.form.password = "";
          this.cf_password = "";
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
    },
  },
};
</script>

<style></style>
