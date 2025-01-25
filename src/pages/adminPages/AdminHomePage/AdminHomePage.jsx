import {
  MontserratUnorderedList,
  StandardChunkFiveSubTitleH4,
} from "@components/PageTitles/PageTitles";
import SocialMediaFollowersTracker from "../components/SocialMediaFollowersTracker/SocialMediaFollowersTracker";
import "./AdminHomePage.css";
import { CardGridLayout } from "@components/Layouts/Layouts";
import PageViewsChart from "../components/PageViewsChart/PageViewsChart";
import DailyVisitorsChart from "../components/DailyVisitorsChart/DailyVisitorsChart";

const AdminHomePageSubSection = ({ title, children }) => {
  return (
    <div className="adminHomePageSubSection">
      <StandardChunkFiveSubTitleH4
        title={title}
        style={{ color: "black", margin: "0" }}
      />
      {children}
    </div>
  );
};

const CanvaLinks = [
  <p key="1">
    <a
      href="https://www.canva.com/design/DAGKDB8f5B4/pfDSNVw-4m7uk6E04jyQ5Q/edit"
      target="_blank"
    >
      Pubmats
    </a>
  </p>,
  <p key="2">
    <a
      href="https://www.canva.com/design/DAGJsN2RVOQ/sk4VG4dy2tGMWEdTnShWHQ/edit"
      target="_blank"
    >
      Transparency report
    </a>
  </p>,
  <p key="4">
    <a
      href="https://www.canva.com/design/DAGRBSesDwk/bcVov5SV052qXsU_ur2jCw/edit?utm_content=DAGRBSesDwk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      target="_blank"
    >
      Kwentong Komyu
    </a>
  </p>,
  <p key="5">
    <a
      href="https://www.canva.com/design/DAFjoASyTdI/CbP-ofMCfu-Qwj2qqAnT6A/edit"
      target="_blank"
    >
      Birthday Greetings
    </a>
  </p>,
  <p key="6">
    <a
      href="https://www.canva.com/design/DAGMt4YKaU0/-Zv_dxp4phqM4Z3NwbpVbQ/edit"
      target="_blank"
    >
      Birthday Calendar
    </a>
  </p>,
];

const GDriveLinks = [
  <p key="1">
    <a
      href="https://drive.google.com/drive/folders/1L0qx_pn8ByhZYlzIRKSNWSMqd6ATabQm"
      target="_blank"
    >
      Team Dunong & Kabataan Documentation Photos
    </a>
  </p>,
  <p key="2">
    <a
      href="https://drive.google.com/drive/folders/1LESxLB0xdygl__qsW9esFSKtJ0iyTSPe"
      target="_blank"
    >
      Team Dunong & Kabataan Documentation Videos
    </a>
  </p>,
  <p key="7">
    <a
      href="https://drive.google.com/drive/folders/1QvpdnB55tFnFA8sOsQsNxSbarepDTDpk?usp=sharing"
      target="_blank"
    >
      Graphics (Logo, etc.)
    </a>
  </p>,
];

const GuidesLinks = [
  <p key="1">
    <a
      href="https://issuu.com/maningning/docs/liwanag_at_dunong_boluntirs_manual_2_"
      target="_blank"
    >
      Liwanag at Dunong Boluntirs' Manual 2025
    </a>
  </p>,
  <p key="2">
    <a
      href="https://docs.google.com/spreadsheets/d/1QVxwdQNUpUVmTiMCJXATYzYPhKWFBChCzCwizveXQKU/edit?usp=sharing"
      target="_blank"
    >
      Team Dunong Guide
    </a>
  </p>,
  <p key="7">
    <a
      href="https://docs.google.com/document/d/1fBUqYtwonH-XNGPeKwanblY2NUXKyLePfuDBcHWPIhg/edit?usp=sharing"
      target="_blank"
    >
      Team Kabataan Guide
    </a>
  </p>,
  <p key="7">
    <a
      href="https://docs.google.com/spreadsheets/d/13Us3QlPeT27GCxZN2S19r9dlzB4CRvC0THzULjQNpKM/edit?usp=sharing"
      target="_blank"
    >
      Team Dokyu Guide
    </a>
  </p>,
];

const AdminHomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <AdminHomePageSubSection title="Statistics">
        {/* <CardGridLayout sizeOfCard="290px" margin="1rem 0"></CardGridLayout> */}
        <CardGridLayout sizeOfCard="400px" margin="1rem 0" textAlign="left">
          <PageViewsChart />
          <DailyVisitorsChart />
        </CardGridLayout>
      </AdminHomePageSubSection>
      <AdminHomePageSubSection title="Links">
        <CardGridLayout sizeOfCard="290px" margin="1rem 0">
          <MontserratUnorderedList context={"Canva Links"} list={CanvaLinks} />
          <MontserratUnorderedList
            context={"Google Drive Links"}
            list={GDriveLinks}
          />
          <MontserratUnorderedList
            context={"Volunteer Guides"}
            list={GuidesLinks}
          />
        </CardGridLayout>
      </AdminHomePageSubSection>
      <SocialMediaFollowersTracker />
    </>
  );
};

export default AdminHomePage;
