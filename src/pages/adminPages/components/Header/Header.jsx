import { useState, useEffect, useContext } from "react";
import { formatDate } from "@utils/helpers";
import "./Header.css";
import Calendar from "lucide-react/dist/esm/icons/calendar";
import View from "lucide-react/dist/esm/icons/view";
import Crown from "lucide-react/dist/esm/icons/crown";
import Pencil from "lucide-react/dist/esm/icons/pencil";
import AuthContext from "@contexts/AuthContext";

const roleReference = {
  super_admin: { text: "Super Admin", Icon: Crown },
  editor: { text: "Editor", Icon: Pencil },
  viewer: { text: "Viewer", Icon: View },
  loading: { text: "Loading...", Icon: View },
};

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const [adminRole, setAdminRole] = useState("Loading...");
  const [Icon, setIcon] = useState(View);

  useEffect(() => {
    if (user && user.user_role && roleReference[user.user_role]) {
      setAdminRole(roleReference[user.user_role].text);
      setIcon(roleReference[user.user_role].Icon);
    } else {
      setAdminRole("Unknown Role");
      setIcon(View);
    }
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate((prevDate) => {
        const newDate = new Date();
        return newDate.getMinutes() !== prevDate.getMinutes()
          ? newDate
          : prevDate;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Run only on mount

  return (
    <div className="adminHeader">
      <div className="headerItem">
        <Icon size={24} />
        {adminRole}
      </div>
      <div className="headerItem">
        <Calendar size={24} />
        {formatDate(currentDate)}
      </div>
    </div>
  );
};

export default Header;
