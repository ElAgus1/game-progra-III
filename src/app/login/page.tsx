import { redirect } from "next/navigation";
import Login from "./login";
import { getCurrentUserId } from "../../../lib/session";

export default async function Page() {
  const user = await getCurrentUserId();
  if (user) {
    redirect("/game");
  }
  return (
    <>
      <Login />
    </>
  );
}
