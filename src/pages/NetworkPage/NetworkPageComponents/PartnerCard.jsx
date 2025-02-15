import { CorporateStyledContainer } from "@components/CardContainers/CardContainers";
import {
  MontserratCardInfo,
  MontserratCardTitle,
} from "@components/PageTitles/PageTitles";

const PartnerCard = ({ imgSrc, title, info }) => {
  return (
    <CorporateStyledContainer imgSrc={imgSrc}>
      <MontserratCardTitle text={title} />
      <MontserratCardInfo text={info} />
    </CorporateStyledContainer>
  );
};

export default PartnerCard;
