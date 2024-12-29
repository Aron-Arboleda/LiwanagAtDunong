import { SharpCardLightShadowContainer } from "@components/CardContainers/CardContainers";
import {
  WhiteChunkFiveTitle,
  MontserratCardInfoBiggerText,
} from "@components/PageTitles/PageTitles";

const SharpLightShadowCard = ({ children, backgroundColor, title, info }) => {
  return (
    <SharpCardLightShadowContainer backgroundColor={backgroundColor}>
      <WhiteChunkFiveTitle text={title} />
      <MontserratCardInfoBiggerText text={info} />
      {children}
    </SharpCardLightShadowContainer>
  );
};

export default SharpLightShadowCard;
