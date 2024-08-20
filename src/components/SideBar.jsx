import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="drawer xl:drawer-open xl:fixed z-40 absolute top-0 left-0 w-12 h-12">
      <input id="my-drawer" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content lg:z-50">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button xl:hidden "
        >
          <GiHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <h3 className="text-2xl lg:text-3xl">Data Explorer</h3>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
