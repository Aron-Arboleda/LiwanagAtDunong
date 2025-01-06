import {
  CardGridLayout,
  FlexLayoutColumn,
  InlineImageAndTextLayout,
} from "@components/Layouts/Layouts";
import "./Footer.css";
import { MontserratTextInfo } from "@components/PageTitles/PageTitles";
import Section from "@components/Section/Section";
import { TransparentLargeContainer } from "@components/LargeContainers/LargeContainers";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import { useState } from "react";
import { PageDividerThin } from "@components/CustomComponents/CustomComponents";

export const SectionTitle = ({ children }) => {
  return <h2 className="footerSectionTitle">{children}</h2>;
};

export const FooterLinkContainer = ({ children }) => {
  return <div className="footerLinkContainer">{children}</div>;
};

export const FooterLink = ({ href, text, target = "_blank" }) => {
  return (
    <a href={href || "#"} target={target} className="footerLink">
      {text}
    </a>
  );
};

const SocialMediaIcon = ({
  url,
  Icon,
  initialColor,
  hoverColor,
  size = 30,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        display: "inline-block",
        transition: "transform 0.2s ease, color 0.3s ease",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon
        size={size}
        color={isHovered ? hoverColor : initialColor}
        style={{
          transition: "color 0.3s ease",
          cursor: "pointer",
        }}
      />
    </a>
  );
};

const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/LiwanagAtDunongProject",
    icon: FaFacebook,
    hoverColor: "#4267B2",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/liwanagatdunong/",
    icon: FaInstagram,
    hoverColor: "#C13584",
  },
  {
    name: "X",
    url: "https://x.com/liwanagatdunong",
    icon: TbBrandX,
    hoverColor: "#1DA1F2",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@LiwanagatDunong",
    icon: FaYoutube,
    hoverColor: "#FF0000",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@liwanagatdunong",
    icon: FaTiktok,
    hoverColor: "#000000",
  },
];

const Footer = () => {
  return (
    <footer>
      <Section backgroundColor="#083800">
        <div className="headerSpace"></div>
        <TransparentLargeContainer>
          <div className="footerContainer">
            <div id="footerLogoContainer" className="flex-center">
              <img src="/LD_Logo.jpg" alt="" id="footerLogo" />
            </div>
            <div id="footerInfoContainer">
              <FlexLayoutColumn>
                <h2 className="footerh2">Liwanag at Dunong</h2>
                <p>
                  Liwanag at Dunong is a non-governmental organization that aims
                  to enhance indigenous peoples' access to educational
                  opportunities by establishing a learning center that promotes
                  culturally relevant literacy programs for young and adult
                  learners.
                </p>
              </FlexLayoutColumn>
              <CardGridLayout margin="0">
                <FooterLinkContainer>
                  <SectionTitle>Organization</SectionTitle>
                  <FooterLink text="About Us" href="/about" target="_self" />
                  <FooterLink
                    text="Privacy Policy"
                    href="/privacy-policy"
                    target="_self"
                  />
                  <FooterLink
                    text="Terms and Condition"
                    href="/terms-and-conditions"
                    target="_self"
                  />
                  <FooterLink text="FAQs" href="/faqs" target="_self" />
                </FooterLinkContainer>
                <FooterLinkContainer>
                  <SectionTitle>Support Us</SectionTitle>
                  <FooterLink
                    text="Volunteer"
                    href="/volunteer"
                    target="_self"
                  />
                  <FooterLink text="Give help" href="/support" target="_self" />
                  <FooterLink text="Shop" />
                </FooterLinkContainer>
                <FooterLinkContainer>
                  <SectionTitle>Contacts</SectionTitle>
                  <FooterLink
                    text="(+63) 906-836-6000"
                    href="tel:+639068366000"
                    target="_blank"
                  />
                  <FooterLink
                    text="liwanag.at.dunong@gmail.com"
                    href="mailto:liwanag.at.dunong@gmail.com"
                    target="_blank"
                  />
                  <InlineImageAndTextLayout
                    style={{
                      margin: "0",
                      padding: "0",
                      justifyContent: "left",
                    }}
                  >
                    {socialMediaLinks.map(
                      ({ name, url, icon: Icon, hoverColor }) => (
                        <SocialMediaIcon
                          key={name}
                          url={url}
                          Icon={Icon}
                          initialColor="#fffbe6" // Light yellow color for initial state
                          hoverColor={hoverColor} // Color changes on hover
                        />
                      )
                    )}
                  </InlineImageAndTextLayout>
                </FooterLinkContainer>
              </CardGridLayout>
            </div>
          </div>
          <PageDividerThin color="#fffbe6" margin="50px 0 30px 0" />
          <InlineImageAndTextLayout>
            <MontserratTextInfo
              text="© 2025 Liwanag at Dunong Project. All rights reserved."
              color="#fffbe6"
              fontSize="0.8rem"
            />
          </InlineImageAndTextLayout>
        </TransparentLargeContainer>
      </Section>
    </footer>
  );
};

export default Footer;
