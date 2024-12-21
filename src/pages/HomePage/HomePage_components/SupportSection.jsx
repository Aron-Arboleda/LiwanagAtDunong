import "../HomePage_styles/SupportSection.css";

const SupportSection = () => {
  return (
    <div id="supportPage">
      <div id="supportMainContainer">
        <div id="supportPageTitleContainer">
          <img src="./images/supportPage/call-for-support-title.svg" alt="" />
        </div>
        <div id="supportPubmatsContainer">
          <div className="supportPubmatColumn">
            <img
              src="./images/supportPage/saanAabotAng20PesosMo.png"
              alt=""
              className="pubmatImage"
            />
            <img
              src="./images/supportPage/isangYeroIsangPangarap.png"
              alt=""
              className="pubmatImage"
            />
          </div>
          <div id="supportGCashColumn">
            <p>G-Cash</p>
            <img src="./images/supportPage/QRCode.png" alt="" />
            <p>QR Code</p>
          </div>
          <div className="supportPubmatColumn">
            <img
              src="./images/supportPage/callForMedicalSupport.png"
              alt=""
              className="pubmatImage"
            />
            <img
              src="./images/supportPage/supportLDLiteracyProject.png"
              alt=""
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
