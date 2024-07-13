import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h2 className="text-2xl text-center">Data Explorer from apis</h2>
      <Outlet />
    </>
  );
}

export default App;
