import { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { LDLogo } from "@images/Graphics/WEBSITE_Graphics/IconsAndVectors";

import FileSpreadsheet from "lucide-react/dist/esm/icons/file-spreadsheet";
import House from "lucide-react/dist/esm/icons/house";
import LayoutDashboard from "lucide-react/dist/esm/icons/layout-dashboard";
import Menu from "lucide-react/dist/esm/icons/menu";

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange); // Update on browser back/forward.

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close sidebar if clicked outside
        console.log("Clicked outside");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsMenuOpen]);

  const isActive = (path) => currentPath === path;

  return (
    <>
      <div className="sidebarHeader">
        <a href="/admin">
          <LayoutDashboard size={24} className="icon" />
          <h1 className="sidebarTitle">Dashboard</h1>
        </a>
        <button className="sidebarMenuButton" onClick={() => toggleMenu()}>
          <Menu size={24} className="icon" />
        </button>
      </div>
      <div
        ref={sidebarRef}
        className={`sidebar ${isMenuOpen ? "open" : "closed"}`}
      >
        {/* <div>
          <input type="checkbox" id="sideBarCheckbox" />
          <label htmlFor="sideBarCheckbox" className="sidebarMenuButton">
            <Menu size={24} className="icon" />
          </label>
        </div> */}
        <div className="sidebarContainer">
          <div className="flex-center">
            <img
              src={LDLogo}
              alt="Liwanag at Dunong Logo"
              className="sidebarLogo"
            />
          </div>
          <ul className="sidebarList">
            <li className={isActive("/admin") ? "active" : ""}>
              <a href="/admin" className="navLinks">
                <House size={20} className="icon" />
                <span>Home</span>
              </a>
            </li>
            <li className={isActive("/admin/submissions") ? "active" : ""}>
              <a href="/admin/submissions" className="navLinks">
                <FileSpreadsheet size={20} className="icon" />
                <span>Submissions</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`sidebarOverlay ${isMenuOpen ? "open" : "closed"}`}></div>
      <div className="sidebarSpace"></div>
    </>
  );
};

export default Sidebar;
