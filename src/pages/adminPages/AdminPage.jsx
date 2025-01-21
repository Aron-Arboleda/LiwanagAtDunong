import Sidebar from "./components/Sidebar/Sidebar";
import "./AdminPage.css";
import AdminHomePage from "./AdminHomePage/AdminHomePage";
import { PageContainer } from "./components/containers/containers";
import Header from "./components/Header/Header";

const AdminPage = ({ Page = AdminHomePage }) => {
  return (
    <div className="adminPageContainer">
      <Sidebar />
      <PageContainer>
        <Header />
        <Page />
      </PageContainer>
    </div>
  );
};

export default AdminPage;
