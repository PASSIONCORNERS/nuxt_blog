<template>
  <div>
    <!-- <h1>Activate Your Account</h1> -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.activate();
  },
  methods: {
    async activate() {
      const token = this.$route.params.token;
      if (token) {
        await this.$axios
          .$post("http://localhost:8000/api/activate", { token })
          .then((res) => {
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
            this.$router.push("/");
            console.log(error);
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
      }
    },
  },
};
</script>

<style></style>
