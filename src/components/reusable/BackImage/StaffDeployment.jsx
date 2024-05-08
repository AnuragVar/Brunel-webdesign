import Aero from "../../../assets/aero.svg";
import Jet from "../../../assets/jet.svg";

function Staff() {
  return (
    <div className="bg-white flex sm:gap-3 gap-1 rounded-full sm:w-[180px] py-2 sm:left-[-15%] sm:bottom-[95px] bottom-[50px] w-[120px] relative shadow-sm hover:shadow-md h-[40px] sm:h-[60px]">
      <img src={Aero} alt="nitro jet" className="sm:w-10 w-8 pl-2" />
      <img
        src={Jet}
        alt="jet"
        className="absolute sm:left-2 sm:top-5 top-3 left-3 sm:h-[24px] h-[16px]"
      />
      <div className="flex flex-col justify-center">
        <h2 className="font-bold sm:text-[19px] text-[11px]">10 DAYS</h2>
        <p className="sm:text-[12px] text-[8px] font-medium text-[#828282]">
          Staff Deployment
        </p>
      </div>
    </div>
  );
}
export default Staff;
