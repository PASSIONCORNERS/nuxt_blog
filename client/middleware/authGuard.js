export default function ({ store, route, redirect }) {
  // If the user is not authenticated, redirect to login page.
  const user = store.state.auth.isLoggedIn;
  const blockRoute = /\/dashboard\/*/g;

  if (!user && route.path.match(blockRoute)) {
    return redirect("/");
  }
}
