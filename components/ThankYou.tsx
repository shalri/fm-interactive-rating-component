"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const rating = searchParams.get("rating");

  return (
    <section className="fadeIn relative flex max-w-[358px] flex-col items-center justify-center rounded-2xl bg-irc-gradient px-6 pb-8 pt-6 text-center text-irc-white sm:max-w-[412px] sm:rounded-[30px] sm:p-8 sm:px-8 sm:pb-10">
      <div className="mt-3 w-[148px] sm:mt-[.8rem] sm:w-[160px]">
        <Image
          src="./images/illustration-thank-you.svg"
          alt="thank you"
          width={160}
          height={95}
          className="object-fill"
        />
      </div>
      <p className="mt-6 rounded-l-full rounded-r-full bg-irc-light-grey/10 px-4 pb-1 pt-2 text-[0.850rem] text-irc-orange/70 sm:mt-9 sm:px-5 sm:text-body">
        You selected {rating} out of 5
      </p>
      <h1 className="mt-8 text-[1.475rem] sm:text-[1.775rem]">Thank you!</h1>
      <p className="mt-2 text-sm leading-[1.6] opacity-50 sm:text-body">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get back in touch!
      </p>
    </section>
  );
}
