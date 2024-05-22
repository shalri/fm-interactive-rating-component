import InteractiveRating from "@/components/InteractiveRating";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-grow  items-center justify-center p-6">
      <InteractiveRating />
    </main>
  );
}
