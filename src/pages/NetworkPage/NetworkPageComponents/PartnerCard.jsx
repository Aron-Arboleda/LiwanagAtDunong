import { GreenCardContainer } from "@components/CardContainers/CardContainers";
import {
  MontserratCardInfo,
  MontserratCardTitle,
} from "@components/PageTitles/PageTitles";

const PartnerCard = ({ imgSrc, title, info }) => {
  return (
    <GreenCardContainer imgSrc={imgSrc}>
      <MontserratCardTitle text={title} />
      <MontserratCardInfo text={info} />
    </GreenCardContainer>
  );
};

export default PartnerCard;
