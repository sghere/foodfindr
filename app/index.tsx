import { Redirect } from "expo-router";

export default function Index() {
  const isLoggedIn = false; // your auth state

  if (isLoggedIn) return <Redirect href={"/(protected)"} />;
  else return <Redirect href={"/(public)/login"} />;
}
