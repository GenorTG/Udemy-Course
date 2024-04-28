import { className } from "lib/utils";
import { useEffect, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Ripple, initTWE } from "tw-elements";
initTWE({ Ripple }, { allowReinits: true });

type SHElementProps = {
  title: string;
  ripColor?: string;
  ripCenter?: string;
  children?: React.ReactNode;
};

const SHElement = ({
  title,
  ripColor,
  ripCenter,
  children,
}: SHElementProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [show, setShow] = useState(true);

  if (!ripColor) ripColor = "light";
  if (!ripCenter) ripCenter = "true";

  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => {
        setShow((s) => !s);
      }, 750);
    }
    if (isVisible) {
      setShow((s) => !s);
    }
  }, [isVisible]);

  return (
    <div className="flex-center w-full flex-col gap-4">
      <button
        data-twe-ripple-init
        data-twe-ripple-color={ripColor}
        data-twe-ripple-centered={ripCenter}
        type="button"
        className="cmix-1 rounded p-2 flex-center flex-row gap-2 relative pl-10 border-2 border-secondary font-bold hover:cmix-4 transition-all ease-in-out duration-300"
        onClick={() => setIsVisible((prevState) => !prevState)}
      >
        <BiShow
          size={30}
          className={className(
            "absolute left-1",
            `${isVisible ? "animate-fadeIn" : "animate-fadeOut"}`
          )}
        />
        <BiHide
          size={30}
          className={className(
            "absolute left-1",
            `${isVisible ? "animate-fadeOut" : "animate-fadeIn"}`
          )}
        />
        <p>{title}</p>
      </button>
      <div
        className={className(
          "flex-center",
          `${isVisible ? "animate-fadeIn" : "animate-fadeOut"}`
        )}
      >
        {show && (children ?? children)}
      </div>
    </div>
  );
};
export default SHElement;
