import Spark from "../../../assets/spark, sparkle, 26.svg";
function ReductionAchieved() {
  return (
    <div className="bg-white sm:w-[200px] sm:left-[-18%] absolute sm:top-[12%] rounded-2xl sm:p-4 shadow-sm hover:shadow-md sm:pl-7 sm:pt-5 p-3 sm:h-[180px] w-[130px] h-[115px] left-[-10%] top-[12%] ">
      <div className="relative">
        <img
          src={Spark}
          alt="spark"
          className="absolute sm:top-[-36px] sm:left-[-35px] sm:h-20 top-[-16px] left-[-15px] h-10"
        />
        <h2
          className="sm:text-[45px] text-[30px] font-bold"
          style={{ fontFamily: "Switzer" }}
        >
          40%
        </h2>
      </div>
      <p className="sm:text-[14px] text-[9px] text-[#828282] font-[500px] sm:leading-[16px] leading-[13px]">
        Achieved reduction in project execution time by optimising team
        availability
      </p>
    </div>
  );
}
export default ReductionAchieved;
