import { cn } from "../utils/cn";
import { RxCross2 } from "react-icons/rx";

const Card = () => {
  return (
    <div
      className={cn(
        "w-72 min-h-[26rem] h-[26rem] rounded-xl",
        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(24,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
        "p-4 flex flex-col"
      )}
    >
      <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
      <p className="text-neutral-600 mt-2 text-[10px]">
        A collection of beautiful UI components, let's get on with it.
      </p>
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-1 text-[10px] mt-4 shadow-[0px_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(24,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-md">
          <img src="/logo.png" alt="logo" className="w-4 h-4" />
          <span className="text-neutral-600">Aceternity</span>
          <RxCross2 className="w-3 h-3 text-neutral-400" />
        </button>
      </div>
    </div>
  );
};

export default Card;
