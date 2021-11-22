<template>
  <div>
    <h1 class="text-center mt-44">Dashboard</h1>
    <p class="text-center" v-if="this.$store.state.auth.user">
      Hello, {{ this.$store.state.auth.user.username }}
    </p>
    <!-- <h1 v-if="this.$store.state.auth.user">
      {{ this.$store.state.auth.user.username }}
    </h1> -->
    <!-- <button @click="" class="bg-black py3 px-4 rounded text-white">Test</button> -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Dashboard",
      meta: [
        {
          name: "description",
          content: "This is a homepage",
          hid: "description",
        },
      ],
    };
  },
  async fetch() {
    const accToken = this.$cookies.get("app.vnblog.tk");
    // get user info
    await this.$axios
      .get("http://localhost:8000/api/user", {
        headers: { Authorization: accToken },
      })
      .then((res) => {
        this.$store.dispatch("auth/getUser", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    // testLogOut() {
    //   this.$store.dispatch("auth/logout");
    // },
  },
  // middleware: "authGuard",
  middleware({ store, redirect }) {
    if (!store.state.auth.isLoggedIn) {
      return redirect("/");
    }
  },
  layout: "admin-dashboard",
};
</script>

<style></style>
