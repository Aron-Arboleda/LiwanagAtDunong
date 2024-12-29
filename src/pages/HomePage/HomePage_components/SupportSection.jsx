import "../HomePage_styles/SupportSection.css";

const SupportSection = () => {
  return (
    <div id="supportPage">
      <div id="supportMainContainer">
        <div id="supportPageTitleContainer">
          <img
            src="/images/PageImages/HomePage/SupportSection/call-for-support-title.svg"
            alt="Call for Support Title"
          />
        </div>
        <div id="supportPubmatsContainer">
          <div className="supportPubmatColumn">
            <img
              src="/images/PageImages/HomePage/SupportSection/saanAabotAng20PesosMo.png"
              alt="Liwanag at Dunong Pubmat: Saan Aabot Ang 20 Pesos Mo"
              className="pubmatImage"
            />
            <img
              src="/images/PageImages/HomePage/SupportSection/isangYeroIsangPangarap.png"
              alt=""
              className="pubmatImage"
            />
          </div>
          <div id="supportGCashColumn">
            <p>G-Cash</p>
            <img
              src="/images/PageImages/HomePage/SupportSection/QRCode.png"
              alt="Liwanag at Dunong Pubmat: QR Code"
            />
            <p>QR Code</p>
          </div>
          <div className="supportPubmatColumn">
            <img
              src="/images/PageImages/HomePage/SupportSection/callForMedicalSupport.png"
              alt="Liwanag at Dunong Pubmat: Call for Medical Support"
              className="pubmatImage"
            />
            <img
              src="/images/PageImages/HomePage/SupportSection/supportLDLiteracyProject.png"
              alt="Liwanag at Dunong Pubmat: Support LD Literacy Project"
              className="pubmatImage"
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
