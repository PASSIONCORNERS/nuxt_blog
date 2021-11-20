export default function ({ $axios, app, redirect }) {
  $axios.onRequest((config) => {
    const token = app.$csrfToken();

    if (!config.headers["X-CSRF-Token"] && token)
      config.headers["X-CSRF-Token"] = token;

    return config;
  });
}
