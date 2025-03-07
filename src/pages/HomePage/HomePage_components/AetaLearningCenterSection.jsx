import { InteractiveFolders } from "@components/LargeContainers/FoldersUIPackage";
import "../HomePage_styles/AetaLearningCenterSection.css";

import { BrownCircleTitle } from "@components/PageTitles/PageTitles";
import { curveSection } from "@images/Graphics/WEBSITE_Graphics/Sprites";
import {
  ALCProgress1,
  ALCProgress2,
  ALCProgress3,
  ALCProgress4,
  ALCProgress5,
  facebookPost,
  igPost,
  twitterPost,
} from "@images/PageImages/HomePage/AetaLearningCenterSection";

const foldersData = [
  {
    date: "March 20, 2022",
    description:
      "Before commencing the construction, Our technical team, consisting of engineering students and dedicated volunteers, initially designed a structure that incorporates indigenous materials such as cogon and bamboo to harmonize with the community's surroundings and culture.",
    image: ALCProgress1,
    originalColor: "rgb(123,164,62)",
  },
  {
    date: "March 27, 2022",
    description:
      "Following extensive consultations with the community and new project partners, the original design was fortified with additional materials to ensure its long-lasting durability and practicality.",
    image: ALCProgress2,
    originalColor: "rgb(117,159,53)",
  },
  {
    date: "April 18, 2022",
    description:
      "The male members of the community joined forces to construct the ALC, utilizing materials provided by IP supporters. As a token of gratitude for their active involvement in the construction of the ALC and their contributions to community development, they received food support.",
    image: ALCProgress3,
    originalColor: "rgb(81,120,27)",
  },
  {
    date: "April 24, 2022",
    description:
      "The structure's design features an outer wall with mural art inspired by Aeta children's drawings. With the help of creative volunteers and the contributions of all the workers involved in the project, the art has become a popular photo spot for many tourists and volunteers who continue to support Liwanag at Dunong.",
    image: ALCProgress4,
    originalColor: "rgb(57,86,14)",
  },
  {
    date: "Nov. 15, 2022",
    description:
      "At present, the ALC administers an adult literacy program, aiding community members in obtaining a Certificate of Completion for Basic Education through the Alternative Learning System. Construction commenced in March 2022 and concluded in November 2022.",
    image: ALCProgress5,
    originalColor: "rgb(40,60,10)",
  },
];

const AetaLearningCenterSection = () => {
  const IFoldersData = {
    frontFolderData: (
      <div id="socmedHalf">
        <div id="postsContainer">
          <a href="https://www.instagram.com/liwanagatdunong/" target="_blank">
            <img
              src={igPost}
              alt="Instagram Post"
              className="socmedPost"
              id="igPost"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.facebook.com/LiwanagAtDunongProject"
            target="_blank"
          >
            <img
              src={facebookPost}
              alt="Facebook Post"
              className="socmedPost"
              id="facebookPost"
              loading="lazy"
            />
          </a>
          <a href="https://x.com/liwanagatdunong" target="_blank">
            <img
              src={twitterPost}
              alt="Twitter Post"
              className="socmedPost"
              id="twitterPost"
              loading="lazy"
            />
          </a>
        </div>
        <img
          src={curveSection}
          alt="curve"
          id="curveSectionSVG"
          loading="lazy"
        />
      </div>
    ),
    interactiveFoldersData: foldersData.map((folder) => ({
      notchChildren: <p className="folderDateText">{folder.date}</p>,
      children: (
        <div className="ALCContentContainer">
          <div className="progressInfoContainer flex-center-alignCenter">
            <p className="progressInfoText">{folder.description}</p>
          </div>
          <div className="progressImageContainer flex-center-alignCenter">
            <div className="progressTitle flex-center-alignCenter">
              Progress Check:
            </div>
            <img
              src={folder.image}
              alt="Progress"
              className="progressImage"
              loading="lazy"
            />
          </div>
        </div>
      ),
      originalColor: folder.originalColor,
    })),
  };

  return (
    <div id="aetaLearningCenterPage">
      <BrownCircleTitle title="Aeta Learning Center" />
      <InteractiveFolders IFoldersData={IFoldersData} />
    </div>
  );
};

export default AetaLearningCenterSection;
