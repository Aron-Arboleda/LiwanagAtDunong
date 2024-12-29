import React, { useState } from "react";
import "../HomePage_styles/AetaLearningCenterSection.css";
import { brightenColor } from "@utils/color";
import { BrownCircleTitle } from "@components/PageTitles/PageTitles";

const AetaLearningCenterSection = () => {
  const [switches, setSwitches] = useState([false, false, false, false, false]);
  const [currentFolderShowedIndex, setCurrentFolderShowedIndex] =
    useState(null);
  const [styles, setStyles] = useState({
    0: {
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(255, 160, 72)", // Default color for folder 1
      },
      folderBody: {
        backgroundColor: "rgb(255, 160, 72)", // Default color for folder 1 body
      },
    },
    1: {
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(52, 121, 40)", // Default color for folder 2
      },
      folderBody: {
        backgroundColor: "rgb(52, 121, 40)", // Default color for folder 2 body
      },
    },
    2: {
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(255, 64, 38)", // Default color for folder 3
      },
      folderBody: {
        backgroundColor: "rgb(255, 64, 38)", // Default color for folder 3 body
      },
    },
    3: {
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(123, 152, 255)", // Default color for folder 4
      },
      folderBody: {
        backgroundColor: "rgb(123, 152, 255)", // Default color for folder 4 body
      },
    },
    4: {
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(193, 72, 235)", // Default color for folder 5
      },
      folderBody: {
        backgroundColor: "rgb(193, 72, 235)", // Default color for folder 5 body
      },
    },
  });

  const handleTabMouseEnter = (index, originalColor) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        folderNotch: {
          borderTop: "3px solid black",
          borderLeft: "3px solid black",
          borderRight: "3px solid black",
          backgroundColor: brightenColor(originalColor, 20),
        },
        folderBody: {
          backgroundColor: brightenColor(originalColor, 20), // Brighten folder body as well
        },
      },
    }));
  };

  const handleTabMouseLeave = (index, originalColor) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        folderNotch: {
          borderTop: "2px solid black",
          borderLeft: "2px solid black",
          borderRight: "2px solid black",
          backgroundColor: originalColor,
        },
        folderBody: {
          backgroundColor: originalColor, // Reset folder body color
        },
      },
    }));
  };

  const handleTabClick = (tabIndex) => {
    const newSwitches = [...switches];
    let newCurrentFolderShowedIndex = currentFolderShowedIndex;

    if (!newSwitches[tabIndex]) {
      newCurrentFolderShowedIndex = tabIndex;
      newSwitches[tabIndex] = true;
    } else {
      if (newCurrentFolderShowedIndex === tabIndex) {
        newSwitches[tabIndex] = false;
        newCurrentFolderShowedIndex = tabIndex + 1;
      } else {
        newCurrentFolderShowedIndex = tabIndex;
      }
    }

    for (let i = 0; i < tabIndex; i++) {
      if (newSwitches[i]) {
        newSwitches[i] = false;
      }
    }

    for (let i = tabIndex + 1; i < switches.length; i++) {
      newSwitches[i] = true;
    }

    setSwitches(newSwitches);
    setCurrentFolderShowedIndex(newCurrentFolderShowedIndex);
  };

  return (
    <div id="aetaLearningCenterPage">
      <BrownCircleTitle title="Aeta Learning Center" />
      <div id="foldersContainer">
        <div className="folder" id="folder1">
          <div className="folderHeader">
            <div className="folderNotch" id="folderNotch1"></div>
          </div>
          <div className="folderBody" id="folderBody1">
            <div id="socmedHalf">
              <div id="postsContainer">
                <a
                  href="https://www.instagram.com/liwanagatdunong/"
                  target="_blank"
                >
                  <img
                    src="/images/PageImages/HomePage/AetaLearningCenterSection/SocialMediaPosts/igPost.jpg"
                    alt="Instagram Post"
                    className="socmedPost"
                    id="igPost"
                  />
                </a>
                <a
                  href="https://www.facebook.com/LiwanagAtDunongProject"
                  target="_blank"
                >
                  <img
                    src="/images/PageImages/HomePage/AetaLearningCenterSection/SocialMediaPosts/facebookPost.png"
                    alt="Facebook Post"
                    className="socmedPost"
                    id="facebookPost"
                  />
                </a>
                <a href="https://x.com/liwanagatdunong" target="_blank">
                  <img
                    src="/images/PageImages/HomePage/AetaLearningCenterSection/SocialMediaPosts/twitterPost.png"
                    alt="Twitter Post"
                    className="socmedPost"
                    id="twitterPost"
                  />
                </a>
              </div>
              <img
                src="/images/Graphics/WEBSITE_Graphics/Sprites/curveSection.svg"
                alt="curve"
                id="curveSectionSVG"
              />
            </div>
          </div>
        </div>
        {foldersData.map((folder, index) => (
          <div
            className="folder"
            id={`folder${index + 2}`}
            key={index}
            style={{
              transform: switches[index]
                ? "translateY(-70vh)"
                : "translateY(0px)",
              transition:
                "transform 0.5s, border-top 0.3s, background-color 0.1s",
            }}
          >
            <div className="folderHeader">
              <div
                className="folderNotch flex-center"
                id={`folderNotch${index + 2}`}
                onMouseEnter={() =>
                  handleTabMouseEnter(index, folder.originalColor)
                }
                onMouseLeave={() =>
                  handleTabMouseLeave(index, folder.originalColor)
                }
                onClick={() => handleTabClick(index)}
                style={styles[index]?.folderNotch} // Apply dynamic styles to folderNotch
              >
                <p className="folderDateText">{folder.date}</p>
              </div>
            </div>
            <div
              className="folderBody"
              style={styles[index]?.folderBody} // Apply dynamic styles to folderBody
            >
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
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AetaLearningCenterSection;

const foldersData = [
  {
    date: "March 20, 2022",
    description:
      "Before commencing the construction, Our technical team, consisting of engineering students and dedicated volunteers, initially designed a structure that incorporates indigenous materials such as cogon and bamboo to harmonize with the community's surroundings and culture.",
    image:
      "/images/PageImages/HomePage/AetaLearningCenterSection/ALCProgressImages/ALCProgress1.png",
    originalColor: "rgb(255, 160, 72)",
  },
  {
    date: "March 27, 2022",
    description:
      "Following extensive consultations with the community and new project partners, the original design was fortified with additional materials to ensure its long-lasting durability and practicality.",
    image:
      "/images/PageImages/HomePage/AetaLearningCenterSection/ALCProgressImages/ALCProgress2.jpg",
    originalColor: "rgb(52, 121, 40)",
  },
  {
    date: "April 18, 2022",
    description:
      "The male members of the community joined forces to construct the ALC, utilizing materials provided by IP supporters. As a token of gratitude for their active involvement in the construction of the ALC and their contributions to community development, they received food support.",
    image:
      "/images/PageImages/HomePage/AetaLearningCenterSection/ALCProgressImages/ALCProgress3.jpg",
    originalColor: "rgb(255, 64, 38)",
  },
  {
    date: "April 24, 2022",
    description:
      "The structure's design features an outer wall with mural art inspired by Aeta children's drawings. With the help of creative volunteers and the contributions of all the workers involved in the project, the art has become a popular photo spot for many tourists and volunteers who continue to support Liwanag at Dunong.",
    image:
      "/images/PageImages/HomePage/AetaLearningCenterSection/ALCProgressImages/ALCProgress4.jpg",
    originalColor: "rgb(123, 152, 255)",
  },
  {
    date: "Nov. 15, 2022",
    description:
      "At present, the ALC administers an adult literacy program, aiding community members in obtaining a Certificate of Completion for Basic Education through the Alternative Learning System. Construction commenced in March 2022 and concluded in November 2022.",
    image:
      "/images/PageImages/HomePage/AetaLearningCenterSection/ALCProgressImages/ALCProgress5.png",
    originalColor: "rgb(193, 72, 235)",
  },
];
