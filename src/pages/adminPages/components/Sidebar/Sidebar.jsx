import { useContext, useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { LDLogo } from "@images/Graphics/WEBSITE_Graphics/IconsAndVectors";

import FileSpreadsheet from "lucide-react/dist/esm/icons/file-spreadsheet";
import House from "lucide-react/dist/esm/icons/house";
import LayoutDashboard from "lucide-react/dist/esm/icons/layout-dashboard";
import Menu from "lucide-react/dist/esm/icons/menu";
import Archive from "lucide-react/dist/esm/icons/archive";
import UserRoundCog from "lucide-react/dist/esm/icons/user-round-cog";
import AuthContext from "@contexts/AuthContext";
import LogOut from "lucide-react/dist/esm/icons/log-out";
import School from "lucide-react/dist/esm/icons/school";
import ConfirmationPanel from "../ConfirmationPanel/ConfirmationPanel";
import { ToastContainer } from "react-toastify";
import { showActionDoneMessage } from "../DataTable/DataTable";
import {
  Admin1,
  Admin2,
  Admin3,
  Admin4,
} from "@images/Graphics/WEBSITE_Graphics/IconsAndVectors/adminProfiles";
import { pickRandomFromArray } from "@utils/helpers";

const adminProfile = pickRandomFromArray([Admin1, Admin2, Admin3, Admin4]);

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLogoutConfirmationOpen, setIsLogoutConfirmationOpen] =
    useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSettingsMenu = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleLogout = () => {
    setIsLogoutConfirmationOpen(true);
  };

  const logoutConfirm = async () => {
    try {
      setLogoutLoading(true);
      await logout();
    } catch (error) {
      showActionDoneMessage("Error: " + error, false);
    } finally {
      setLogoutLoading(false);
    }
  };

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange); // Update on browser back/forward.

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
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
        <div className="sidebarContainer">
          <div>
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
              <li className={isActive("/admin/archive") ? "active" : ""}>
                <a href="/admin/archive" className="navLinks">
                  <Archive size={20} className="icon" />
                  <span>Archive</span>
                </a>
              </li>
              {user ? (
                user.user_role === "super_admin" ? (
                  <li className={isActive("/admin/admins") ? "active" : ""}>
                    <a href="/admin/admins" className="navLinks">
                      <UserRoundCog size={20} className="icon" />
                      <span>Admins</span>
                    </a>
                  </li>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </ul>
          </div>
          <div className="sidebarFooter">
            {isSettingsOpen && (
              <div className="settingsContainer">
                <button
                  className="settingsItem"
                  onClick={handleLogout}
                  disabled={logoutLoading}
                >
                  {logoutLoading ? "Logging out..." : "Log out"}
                  <LogOut size={20} className="icon" />
                </button>
                <a className="settingsItem" href="/">
                  Go to website
                  <School size={20} className="icon" />
                </a>
              </div>
            )}
            <div className="adminProfileContainer" onClick={toggleSettingsMenu}>
              <img
                src={adminProfile}
                alt="admin profile image"
                className="adminProfileImage"
              />
              <p className="adminUsername">
                {user ? user.user_username : "Loading..."}
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <div className={`sidebarOverlay ${isMenuOpen ? "open" : "closed"}`}></div>
      <div className="sidebarSpace"></div>

      {isLogoutConfirmationOpen && (
        <ConfirmationPanel
          confirmationTitle="Are you sure you want to logout?"
          confirmationDescription={`You are about to logout from the admin panel and end your session. Do you want to proceed?`}
          onConfirm={logoutConfirm}
          onCancel={() => setIsLogoutConfirmationOpen(false)}
          variant="critical"
        />
      )}
    </>
  );
};

export default Sidebar;
