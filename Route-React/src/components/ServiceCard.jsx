export function ServiceCard(props) {
  return (
    <div className=" pb-5 rounded flex flex-col items-center bg-gradient-to-b from-black/20 to-red-600  shadow-inner w-[83%] md:w-[23%]  px-5 min-h-[00px] shadow-2xl">
      <div className=" flex flex-col gap-1 justify-center items-center text-yellow-500 mt-[-20px] md:mt-[-30px] ">
        <img src={props.image} loading="lazy" alt="imagen" />
        <h1 className="font-bold text-2xl border-b border-yellow-500">
          {props.text}
        </h1>
        <h2>-{props.description}-</h2>
        <h2>Prize: ${props.prize}.00</h2>
      </div>
    </div>
  );
}
