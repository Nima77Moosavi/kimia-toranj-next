// app/user-panel/page.jsx
import { redirect } from "next/navigation";

export const metadata = {
  title: "پنل کاربری، کیمیاترنج",
};

export default function UserPanelIndex() {
  redirect("/user-panel/wishlist");
}
