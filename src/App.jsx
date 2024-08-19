import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <div className="flex">
        <div className="xl:w-80 xl:bg-slate-500 xl:h-[100vh]"></div>
        <div
          className="ml-4 mt-3
        "
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
