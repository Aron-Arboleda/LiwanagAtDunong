import { useEffect, useState } from "react";
import "./Sidebar.css";
import { LDLogo } from "@images/Graphics/WEBSITE_Graphics/IconsAndVectors";
import { FileSpreadsheet, House } from "lucide-react";

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange); // Update on browser back/forward.

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const isActive = (path) => currentPath === path;

  return (
    <div className="sidebar">
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
              <House size={24} className="icon" />
              Home
            </a>
          </li>
          <li className={isActive("/admin/submissions") ? "active" : ""}>
            <a href="/admin/submissions" className="navLinks">
              <FileSpreadsheet size={24} className="icon" />
              Submissions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
