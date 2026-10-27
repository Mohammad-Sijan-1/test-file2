export function Button({ color, children }) {
  const colors = {
    black: "bg-black text-white shadow-sm",
    blue: "bg-blue-500 text-white shadow-sm",
    white: "bg-white text-black shadow-sm",
    orange: "bg-[#F44335] text-white shadow-sm"
  };
  return (
    
    <button className={`${colors[color]} rounded-sm px-3 py-1.5 font-sans text-sm/6 text-[18px] font-normal `}>
      {children}
    </button>
  );
}