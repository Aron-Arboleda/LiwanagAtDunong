import { InlineImageAndTextLayout } from "@components/Layouts/Layouts";
import "./Footer.css";
import { MontserratTextInfo } from "@components/PageTitles/PageTitles";

const Footer = () => {
  return (
    <footer>
      <div id="footerMainContainer">
        <div id="footerLogoContainer" className="flex-center">
          <img src="/LD_Logo.jpg" alt="" id="footerLogo" />
        </div>
        <div id="footerInfoContainer">
          <div>
            <h2 className="footerh2">Keep Connected</h2>
            <div className="footerIconTextGridLayout">
              <a
                href="https://www.facebook.com/LiwanagAtDunongProject"
                target="_blank"
              >
                <img
                  src="/images/Graphics/WEBSITE_Graphics/IconsAndVectors/facebookIcon.svg"
                  alt="Facebook Icon"
                />
              </a>
              <p>Like us on Facebook</p>
              <a
                href="https://www.instagram.com/liwanagatdunong/"
                target="_blank"
              >
                <img
                  src="/images/Graphics/WEBSITE_Graphics/IconsAndVectors/instagramLogo.svg"
                  alt="Instagram Icon"
                />
              </a>
              <p>Follow us on Instagram</p>
              <a href="https://www.tiktok.com/@liwanagatdunong" target="_blank">
                <img
                  src="/images/Graphics/WEBSITE_Graphics/IconsAndVectors/tiktokLogo.svg"
                  alt="Tiktok Icon"
                />
              </a>
              <p>Connect with us on Tiktok</p>
              <a href="https://x.com/liwanagatdunong" target="_blank">
                <img
                  src="/images/Graphics/WEBSITE_Graphics/IconsAndVectors/xLogo.svg"
                  alt="X Icon"
                />
              </a>
              <p>Tweet with us on X</p>
              <a
                href="https://www.youtube.com/@LiwanagatDunong"
                target="_blank"
              >
                <img
                  src="/images/Graphics/WEBSITE_Graphics/IconsAndVectors/youtubeLogo.svg"
                  alt="Youtube Icon"
                />
              </a>
              <p>Subcribe on our Youtube</p>
            </div>
          </div>
          <div>
            <div>
              <h2 className="footerh2">More About LD</h2>
              <p>
                Project Liwanag at Dunong aims to enhance indigenous peoples'
                access to educational opportunities by establishing a learning
                center that promotes culturally relevant literacy programs for
                young and adult learners.
              </p>
            </div>
            <div>
              <h2 className="footerh2">Form Links</h2>
              <ul>
                <li>
                  <a href="https://forms.gle/CW3WXAeg7EmUvpjt7" target="_blank">
                    Volunteer Form for Tarlac Volunteers
                  </a>
                </li>
                <li>
                  <a href="https://forms.gle/EPbmoot6XwsBKq7b7" target="_blank">
                    Volunteer Form for Manila Volunteers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="footerh2">Contact Information</h2>
            <div className="footerIconTextGridLayout">
              <img
                src="/images/Graphics/WEBSITE_Graphics/IconsAndVectors/homeLogo.svg"
                alt="Home Icon"
              />
              <p>Liwanag at Dunong Project</p>
              <img
                src="/images/Graphics/WEBSITE_Graphics/IconsAndVectors/telephoneLogo.svg"
                alt="Telephone Icon"
              />
              <p>(+63) 906-836-6000</p>
              <a href="mailto:liwanag.at.dunong@gmail.com" target="_blank">
                <img
                  src="/images/Graphics/WEBSITE_Graphics/IconsAndVectors/mailLogo.svg"
                  alt="Mail Icon"
                />
              </a>
              <p>liwanag.at.dunong@gmail.com</p>
            </div>
          </div>
        </div>
        <InlineImageAndTextLayout>
          <MontserratTextInfo
            text="© 2025 Liwanag at Dunong Project. All rights reserved."
            color="#fffbe6"
          />
        </InlineImageAndTextLayout>
      </div>
    </footer>
  );
};

export default Footer;
