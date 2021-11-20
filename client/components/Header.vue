<template>
  <div class="bg-black">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- logo -->
        <div>
          <nuxt-link to="/">
            <h1 class="text-3xl uppercase text-white">blog vn</h1>
          </nuxt-link>
        </div>
        <!-- logged out -->
        <form @submit.prevent="logIn" v-if="!this.$store.state.auth.isLoggedIn">
          <input
            v-model="email"
            type="text"
            autocomplete="off"
            placeholder="Email"
            class="py-2 rounded pl-2"
          />
          <input
            v-model="password"
            type="password"
            autocomplete="off"
            placeholder="Password"
            class="py-2 rounded pl-2"
          />
          <input type="hidden" v-model="$data._csrf" />
          <button
            type="submit"
            class="
              py-2
              px-6
              bg-indigo-500
              rounded
              uppercase
              text-white
              transition-all
              hover:bg-indigo-400
            "
          >
            login
          </button>
        </form>
        <!-- logged in -->
        <div class="flex items-center" v-else>
          <img
            src="https://source.unsplash.com/random/1"
            alt="user avatar"
            class="w-14 h-14 object-cover rounded-full mr-6"
          />
          <button
            @click="logOut"
            class="
              py-2
              px-6
              bg-indigo-500
              rounded
              uppercase
              text-white
              transition-all
              hover:bg-indigo-400
            "
          >
            logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty, isEmail } from "~/utils/validate";
export default {
  data() {
    return {
      email: "",
      password: "",
      _csrf: this.$csrfToken(),
    };
  },
  // async fetch() {
  //   this._csfr = this.$csrfToken();
  // },
  methods: {
    async logIn() {
      // check fields
      if (!isEmpty(this.email) || !isEmpty(this.password))
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
      if (!isEmail(this.email))
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
      const data = {
        email: this.email,
        password: this.password,
        _csrf: this.$data._csrf,
        // _csrf: "fake",
      };

      await this.$axios
        .$post("http://localhost:8000/api/login", data)
        .then((res) => {
          // set cookie
          this.$cookies.set("app.vnblog.tk", res, {
            path: "/",
            maxAge: 60 * 60 * 1000 * 24,
          });
          // set state
          this.$store.dispatch("auth/login");
          // clear form
          this.email = "";
          this.password = "";
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.$router.push("/");
          // console.log("For Dev >>>", error.response.data.message);
          // clear form
          this.email = "";
          this.password = "";
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
    // don't need csrf because no form is submitted to server
    async logOut() {
      await this.$store.dispatch("auth/logout");
      this.$cookies.remove("app.vnblog.tk");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
