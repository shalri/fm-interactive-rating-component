import ThankYou from "@/components/ThankYou";
import { Suspense } from "react";

export default function ThankYouPage() {
  return (
    <main className="flex flex-grow  items-center justify-center p-6">
      <Suspense fallback={<div>Loading...</div>}>
        <ThankYou />
      </Suspense>
    </main>
  );
}
