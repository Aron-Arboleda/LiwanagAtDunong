import {
  callForSupportTitle,
  callForMedicalSupport,
  isangYeroIsangPangarap,
  QRCode,
  saanAabotAng20PesosMo,
  supportLDLiteracyProject,
} from "@images/PageImages/HomePage/SupportSection";
import "../HomePage_styles/SupportSection.css";

const SupportSection = () => {
  return (
    <div id="supportPage">
      <div id="supportMainContainer">
        <div id="supportPageTitleContainer">
          <img
            src={callForSupportTitle}
            alt="Call for Support Title"
            loading="lazy"
          />
        </div>
        <div id="supportPubmatsContainer">
          <div className="supportPubmatColumn">
            <img
              src={saanAabotAng20PesosMo}
              alt="Liwanag at Dunong Pubmat: Saan Aabot Ang 20 Pesos Mo"
              className="pubmatImage"
              loading="lazy"
            />
            <img
              src={isangYeroIsangPangarap}
              alt=""
              className="pubmatImage"
              loading="lazy"
            />
          </div>
          <div id="supportGCashColumn">
            <p>G-Cash</p>
            <img
              src={QRCode}
              alt="Liwanag at Dunong Pubmat: QR Code"
              loading="lazy"
            />
            <p>QR Code</p>
          </div>
          <div className="supportPubmatColumn">
            <img
              src={callForMedicalSupport}
              alt="Liwanag at Dunong Pubmat: Call for Medical Support"
              className="pubmatImage"
              loading="lazy"
            />
            <img
              src={supportLDLiteracyProject}
              alt="Liwanag at Dunong Pubmat: Support LD Literacy Project"
              className="pubmatImage"
              loading="lazy"
            />
          </div>
        </div>
        <div id="noteContainer">
          <div className="noteMessage">
            All of the support given to Project Liwanag at Dunong will go
            directly toward printing weekly modules, booklets, and learning
            materials to enhance our programs, providing food support for our
            dedicated volunteers (who number at least 30 every week), covering
            transportation for regular volunteers traveling from Manila to the
            community, supplying materials for our volunteer teachers, and
            addressing other essential operational expenses.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
