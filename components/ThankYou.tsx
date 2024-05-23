"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const rating = searchParams.get("rating");
  return (
    <section className="relative flex max-w-[358px] flex-col items-center justify-center rounded-2xl bg-irc-gradient px-6 pb-8 pt-6 text-center text-irc-white">
      <Image
        src="./images/illustration-thank-you.svg"
        alt="thank you"
        width={146}
        height={95}
        className="mt-2"
      />
      <p className="mt-6 rounded-l-full rounded-r-full bg-irc-white/10 px-4 pb-1 pt-2 text-[0.850rem] text-irc-orange/70">
        You selected {rating} out of 5
      </p>
      <h1 className="mt-7 text-[1.475rem]">Thank You!</h1>
      <p className="mt-2 text-sm leading-[1.6] opacity-50">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get back in touch!
      </p>
    </section>
  );
}
