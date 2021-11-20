<template>
  <div>
    <div class="container mx-auto px-4 mt-44">
      <!-- <p class="text-center">{{ this.$store.state.jwt.isLoggedIn }}</p> -->
      <div class="flex px-20 items-center justify-between">
        <!-- heading -->
        <div class="w-5/12">
          <h1 class="text-5xl">Lorem ipsum dolor sit amet.</h1>
          <p class="mt-5 leading-relaxed fw-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi
            unde laborum facilis incidunt dolores ad labore illum doloremque
            aspernatur.
          </p>
        </div>
        <!-- signup -->
        <div class="w-5/12">
          <h2 class="text-center text-3xl mb-4">Sign Up Here</h2>
          <form class="flex flex-col" @submit.prevent="formSubmit">
            <input
              v-model="username"
              type="text"
              autocomplete="off"
              class="border border-indigo-500 rounded py-3 pl-3 my-2"
              placeholder="Name"
            />
            <input
              v-model="email"
              type="text"
              autocomplete="off"
              class="border border-indigo-500 rounded py-3 pl-3 my-2"
              placeholder="Email"
            />
            <input
              v-model="password"
              type="password"
              autocomplete="off"
              class="border border-indigo-500 rounded py-3 pl-3 my-2"
              placeholder="Password"
            />
            <input
              v-model="cf_password"
              type="password"
              autocomplete="off"
              class="border border-indigo-500 rounded py-3 pl-3 my-2"
              placeholder="Confirm Password"
            />
            <input type="hidden" v-model="$data._csrf" />
            <button
              type="submit"
              class="
                mt-4
                px-6
                py-3
                text-white
                bg-indigo-500
                hover:bg-indigo-400
                transition-all
                rounded
              "
            >
              Sign Up
            </button>
          </form>
          <nuxt-link to="/forgot">
            <p class="text-center mt-6">Forgot password ?</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty, isEmail, isLength, isMatch } from "~/utils/validate";
export default {
  head() {
    return {
      title: "Homepage",
      meta: [
        {
          name: "description",
          content: "This is a homepage",
          hid: "description",
        },
      ],
    };
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      cf_password: "",
      _csrf: this.$csrfToken(),
    };
  },
  methods: {
    async formSubmit() {
      // same ass isEmpty == false
      // check fields
      if (!isEmpty(this.username) || !isEmpty(this.password))
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
      // check password
      if (!isLength(this.password))
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
      if (!isMatch(this.password, this.cf_password))
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
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
        _csrf: this.$csrfToken(),
      };
      await this.$axios
        .$post("http://localhost:8000/api/register", data)
        .then((res) => {
          console.log(res.message);
          this.username = "";
          this.email = "";
          this.password = "";
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
      // .finally(() => {
      //   //Perform action in always
      // });
    },
  },
  middleware({ store, redirect }) {
    if (store.state.auth.isLoggedIn) {
      return redirect("/dashboard");
    }
  },
};
</script>
