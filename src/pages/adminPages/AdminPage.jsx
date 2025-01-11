import Sidebar from "./components/Sidebar/Sidebar";
import "./AdminPage.css";
import AdminHomePage from "./AdminHomePage/AdminHomePage";
import { PageContainer } from "./components/containers/containers";

const AdminPage = ({ Page = AdminHomePage }) => {
  return (
    <div className="adminPageContainer">
      <Sidebar />
      <PageContainer>
        <Page />
      </PageContainer>
    </div>
  );
};

export default AdminPage;
