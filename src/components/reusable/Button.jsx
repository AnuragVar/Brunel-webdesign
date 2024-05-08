export default function Button({
  children,
  icon: Icon,
  styleName,
  ...otherProps
}) {
  const styles =
    styleName === "primary"
      ? "bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white"
      : "bg-[#F1F1F1] hover:bg-[#EAEAEA] text-black";
  return (
    <button
      className={`${styles} line-height: 1.75rem py-[18.11px] w-fit px-[30.78px] text-[15px] rounded-full ${
        Icon ? "flex gap-[16px] items-center" : ""
      }`}
      {...otherProps}
    >
      {children}
      <span>{Icon && <Icon />}</span>
    </button>
  );
}
