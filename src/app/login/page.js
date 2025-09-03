import { Suspense } from "react";
import LoginContent from "./LoginContent";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <LoginContent />
    </Suspense>
  );
}
