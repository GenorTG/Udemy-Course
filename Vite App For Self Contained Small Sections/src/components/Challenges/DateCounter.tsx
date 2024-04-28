import { useState } from "react";
import SHElement from "../ui/SHElement";

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <SHElement title={"Date Counter"}>
      <div className="flex flex-col p-6 border-primary border-2 rounded bg-light min-w-[340px]">
        <div className="flex flex-col items-center justify-center gap-4 p-2">
          <div className="bg-secondary rounded px-4 py-2">
            <input
              className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              type="range"
              min={0}
              max={10}
              onChange={(e) => setStep(Number(e.target.value))}
            ></input>
          </div>
          <p className="min-w-[100px] flex items-center justify-center">{`Step: ${step}`}</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 p-2">
          <button
            className="p-2 size-8 text-2xl flex items-center justify-center bg-primary text-secondary rounded-full hover:bg-secondary hover:text-primary transition-all ease-in-out"
            onClick={() => setCount((s) => s - step)}
          >
            -
          </button>
          <p>Count:</p>
          <input
            className="px-2 py-1 w-16 text-center"
            type="text"
            placeholder="0"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button
            className="p-2 size-8 text-2xl flex items-center justify-center bg-primary text-secondary rounded-full hover:bg-secondary hover:text-primary transition-all ease-in-out"
            onClick={() => setCount((s) => s + step)}
          >
            +
          </button>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center">
          {" "}
          <p>
            {step != 0 && count != 0
              ? `${Math.abs(count)} ${Math.abs(count) > 1 ? "days" : "day"} ${
                  count > 0 ? "from today is" : "ago was"
                }`
              : `Today is`}
          </p>
          <p>{`${date.toLocaleDateString()}`}</p>
        </div>
        {(count != 0 || step != 1) && (
          <div className="flex-center">
            <button
              className="bg-primary text-secondary px-2 py-1 mt-2 w-fit"
              type="button"
              onClick={() => {
                setStep(1);
                setCount(0);
              }}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </SHElement>
  );
};
export default DateCounter;
