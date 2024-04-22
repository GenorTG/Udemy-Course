import React, { useState } from "react";
import { classNames } from "utils";
import { TERipple } from "tw-elements-react";

const AdviceCounter = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="flex min-h-[260px] flex-col items-center justify-between gap-4 rounded border-2 border-black bg-gray-100 p-4 transition-all ease-in-out">
        <div className="flex flex-row items-center justify-center gap-4 ">
          {advice.map((_, i) => (
            <p
              key={i}
              className={classNames(
                "bg-gray-200 rounded-full flex items-center justify-center font-bold size-10 text-xl",
                `${step >= i && "bg-blue-700 text-white "}`
              )}
            >
              {i + 1}
            </p>
          ))}
        </div>
        <h1 className="w-[400px] text-center text-2xl font-bold">
          {advice[step]}
        </h1>
        <div className="flex w-full justify-between">
          <TERipple rippleColor="light">
            <button
              type="button"
              className="rounded bg-blue-700 px-2 py-1 text-white transition-all ease-in-out hover:bg-blue-300 hover:text-black"
              onClick={() => setStep((s) => Math.max(s - 1, 0))}
            >
              Previous step
            </button>
          </TERipple>
          <TERipple rippleColor="light">
            <button
              type="button"
              className="rounded bg-blue-700 px-2 py-1 text-white transition-all ease-in-out hover:bg-blue-300 hover:text-black"
              onClick={() => setStep((s) => Math.min(s + 1, 3))}
            >
              Next step
            </button>
          </TERipple>
        </div>
      </div>
    </div>
  );
};

export default AdviceCounter;

const advice: string[] = [
  "Find something you want to do",
  "Work hard at studying that thing",
  "Get good enough to find work in the field",
  "Enjoy your work and earn a ton of cash, hopefully",
];
