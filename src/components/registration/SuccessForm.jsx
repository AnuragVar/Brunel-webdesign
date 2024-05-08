import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SuccessForm() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          navigate("/");
          clearInterval(intervalId);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-between py-10">
      <div className="w-[90%] sm:w-[55%] md:[35%] flex flex-col items-center gap-2">
        <div>
          <img src="./Tick.svg" alt="tick" />
        </div>
        <div className=" font-coveredByYourGrace text-[#2DA950] text-2xl text-center py-2 ">
          Success Submitted
        </div>
        <div className="font-bold text-xl sm:text-2xl md:text-4xl">
          Congratulations
        </div>
        <div className="text-[#727272] sm:text-base md:text-md text-center w-[58%] pt-3 font-medium">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to you shortly with updates.
        </div>
      </div>
      <div className="text-[#727272] sm:text-base text-xs">
        Redirecting you to Homepage in{" "}
        <span className="inline font-bold text-[#1C1C1C]">
          {timer} second{timer !== 1 && "s"}
        </span>
      </div>
    </div>
  );
}

export default SuccessForm;
