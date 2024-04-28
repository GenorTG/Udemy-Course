import { useState } from "react";
import { className } from "lib/utils";
import SHElement from "../ui/SHElement";
import { Ripple, initTWE } from "tw-elements";
initTWE({ Ripple }, { allowReinits: true });

const AdviceCounter = () => {
  const [step, setStep] = useState(0);

  const generateRandomId = () => {
    return crypto.randomUUID();
  };

  return (
    <SHElement title={"Advice card"} ripCenter={"true"} ripColor={"light"}>
      <div className="flex min-h-[260px] flex-col items-center justify-between gap-4 rounded border-2 border-primary bg-gray-100 p-4 transition-all ease-in-out">
        <div className="flex flex-row items-center justify-center gap-4 ">
          {advice.map((_, i) => (
            <p
              key={generateRandomId()}
              className={className(
                "bg-gray-200 rounded-full flex items-center justify-center font-bold size-10 text-xl",
                `${step >= i && "cmix-1"}`
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
          <button
            data-twe-ripple-init
            data-twe-ripple-color="light"
            type="button"
            className="rounded px-2 py-1 transition-all ease-in-out cmix-1 hover:cmix-4"
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
          >
            Previous step
          </button>
          <button
            data-twe-ripple-init
            data-twe-ripple-color="light"
            type="button"
            className="rounded px-2 py-1 transition-all ease-in-out cmix-1 hover:cmix-4"
            onClick={() => setStep((s) => Math.min(s + 1, 3))}
          >
            Next step
          </button>
        </div>
      </div>
    </SHElement>
  );
};

export default AdviceCounter;

const advice: string[] = [
  "Find something you want to do",
  "Work hard at studying that thing",
  "Get good enough to find work in the field",
  "Enjoy your work and earn a ton of cash, hopefully",
];
