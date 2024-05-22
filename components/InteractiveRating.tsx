"use client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Toast } from "@radix-ui/react-toast";

export default function InteractiveRating() {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating !== 0) {
      alert(`You submitted a rating of ${rating}`);
    } else {
      toast({
        title: "Please select a rating from 1 to 5",
        description: "You need to select a rating before submitting.",
        duration: 2000,
      });
    }
  };

  const ratingValues = [1, 2, 3, 4, 5];

  return (
    <section className="relative max-w-[358px] rounded-2xl bg-irc-dark-blue px-6 pb-8 pt-5 text-irc-white">
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-irc-very-dark-blue">
        <img src="../images/icon-star.svg" alt="star" width={14} />
      </div>
      <h1>How did we do?</h1>
      <p className="">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ol className="flex items-center justify-between">
        {ratingValues.map((value) => (
          <li
            key={value}
            className={`transition-color flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-irc-light-grey pt-1 text-center font-bold duration-300 hover:bg-irc-orange active:bg-irc-white active:text-irc-very-dark-blue ${rating === value ? "bg-irc-white text-irc-very-dark-blue" : "bg-irc-light-grey"}`}
            onClick={() => handleClick(value)}
          >
            {value}
          </li>
        ))}
      </ol>
      <button
        className="transition-color h-11 w-full rounded-l-full rounded-r-full bg-irc-orange pt-1 text-sm font-bold uppercase tracking-widest text-irc-very-dark-blue duration-300 hover:bg-irc-white active:bg-irc-orange"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
}
