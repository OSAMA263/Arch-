import img from "/public/loader.gif";

export default function Loader() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-white text-center">
      <img src={img} alt="" />
    </div>
  );
}
