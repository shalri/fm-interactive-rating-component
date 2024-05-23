"use client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function InteractiveRating() {
  const { toast } = useToast();
  const router = useRouter();
  const [rating, setRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating !== 0) {
      router.push(`/thank-you?rating=${rating}`);
    } else {
      toast({
        title: "Please select a rating from 1 to 5",
        description: "You need to select a rating before submitting.",
        duration: 3000,
      });
    }
  };

  const ratingValues = [1, 2, 3, 4, 5];

  return (
    <section className="relative max-w-[358px] rounded-2xl bg-irc-gradient px-6 pb-8 pt-6 text-irc-white sm:max-w-[412px] sm:rounded-[30px] sm:p-8">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-irc-light-grey/10 sm:h-[48px] sm:w-[48px]">
        <div className="h-[14px] w-[14px] sm:h-[17px] sm:w-[17px]">
          <Image
            src="./images/icon-star.svg"
            width={17}
            height={17}
            alt="star icon"
            className="object-fill"
          />
        </div>
      </div>
      <h1 className="mt-6 text-[1.475rem] sm:mt-8 sm:text-[1.775rem]">
        How did we do?
      </h1>
      <p className="mt-2 text-sm leading-[1.6] opacity-60 sm:text-[.925rem]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ol className="my-[1.475rem] flex items-center justify-between sm:mb-8">
        {ratingValues.map((value) => (
          <li
            key={value}
            className={`transition-color flex h-[40px] w-[40px] cursor-pointer items-center justify-center  rounded-full pt-1 text-center text-sm font-bold duration-300 hover:bg-irc-orange hover:text-irc-very-dark-blue/80 active:text-irc-very-dark-blue/80 sm:h-[50px] sm:w-[50px] sm:text-body ${rating === value ? "bg-irc-white text-irc-very-dark-blue" : "bg-irc-light-grey/15 text-irc-white/50"}`}
            onClick={() => handleClick(value)}
          >
            {value}
          </li>
        ))}
      </ol>
      <button
        className="transition-color h-11 w-full rounded-l-full rounded-r-full bg-irc-orange pt-1 text-sm font-bold uppercase tracking-widest text-irc-very-dark-blue duration-300 hover:bg-irc-white active:bg-irc-orange sm:text-body"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
}
