import Home from "./home/page";
import Navbar from "./navbar/page";

const Page = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-row w-screen z-10 justify-center items-center fixed top-5 "> {Navbar()}</div>
      <main className="">
        {Home()}
{/*         
        <div className="w-screen justify-center"> */}
          <div className="bg-gradient-to-b from-[#2ea043] to-white w-1 h-96 duration-1000 hover:scale-y-[2]"></div>          
        {/* </div> */}
      </main>
    </div>
  );
};

export default Page;
