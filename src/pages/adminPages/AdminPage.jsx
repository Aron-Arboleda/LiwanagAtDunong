import Sidebar from "./components/Sidebar/Sidebar";
import "./AdminPage.css";
import AdminHomePage from "./AdminHomePage/AdminHomePage";

const AdminPage = ({ Page = AdminHomePage }) => {
  return (
    <div className="adminPageContainer">
      <Sidebar />
      <Page />
    </div>
  );
};

export default AdminPage;
