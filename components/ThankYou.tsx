"use client";

import { useSearchParams } from "next/navigation";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const rating = searchParams.get("rating");
  return (
    <main className="flex flex-grow  items-center justify-center p-6">
      <h1 className="">Thank you {rating}</h1>
    </main>
  );
}
