import "./FoldersUIPackage.css";
import { brightenColor } from "@utils/color";
import { useState } from "react";

export const FoldersContainer = ({ children, withSpaceAbove = true }) => {
  return (
    <div
      className="foldersContainer"
      style={withSpaceAbove ? { marginTop: "75vh" } : { marginTop: "70px" }}
    >
      {children}
    </div>
  );
};

export const Folder = ({ children, folderIndex, style }) => {
  return (
    <div className={`folder folder${folderIndex}`} style={style}>
      {children}
    </div>
  );
};

export const FolderHeader = ({ children }) => {
  return <div className="folderHeader">{children}</div>;
};

export const FolderNotch = ({
  children,
  folderNotchIndex,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style,
}) => {
  return (
    <div
      className={`folderNotch folderNotch${folderNotchIndex} flex-center`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const FolderBody = ({ children, folderBodyIndex, style }) => {
  return (
    <div
      className={`folderBody ${
        folderBodyIndex ? `folderBody${folderBodyIndex}` : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export const StaticFolderContainer = ({ children, color, withSpaceAbove }) => {
  const colorIndex = {
    yellow: 1,
    orange: 2,
    green: 3,
    redOrange: 4,
    blue: 5,
    purple: 5,
  };

  return (
    <FoldersContainer withSpaceAbove={withSpaceAbove}>
      <Folder folderIndex={colorIndex[color]}>
        <FolderHeader>
          <FolderNotch folderNotchIndex={colorIndex[color]}></FolderNotch>
        </FolderHeader>
        <FolderBody folderBodyIndex={colorIndex[color]}>{children}</FolderBody>
      </Folder>
    </FoldersContainer>
  );
};

export const InteractiveFolders = ({ IFoldersData }) => {
  const { frontFolderData, interactiveFoldersData } = IFoldersData;

  const [switches, setSwitches] = useState([false, false, false, false, false]);
  const [currentFolderShowedIndex, setCurrentFolderShowedIndex] =
    useState(null);
  const [styles, setStyles] = useState({
    0: {
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: interactiveFoldersData[0].originalColor, // Default color for folder 1
      },
      folderBody: {
        backgroundColor: interactiveFoldersData[0].originalColor, // Default color for folder 1 body
      },
    },
    1: {
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: interactiveFoldersData[1].originalColor, // Default color for folder 2
      },
      folderBody: {
        backgroundColor: interactiveFoldersData[1].originalColor, // Default color for folder 2 body
      },
    },
    2: {
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: interactiveFoldersData[2].originalColor, // Default color for folder 3
      },
      folderBody: {
        backgroundColor: interactiveFoldersData[2].originalColor, // Default color for folder 3 body
      },
    },
    3: {
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: interactiveFoldersData[3].originalColor, // Default color for folder 4
      },
      folderBody: {
        backgroundColor: interactiveFoldersData[3].originalColor, // Default color for folder 4 body
      },
    },
    4: {
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: interactiveFoldersData[4].originalColor, // Default color for folder 5
      },
      folderBody: {
        backgroundColor: interactiveFoldersData[4].originalColor, // Default color for folder 5 body
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
    <FoldersContainer>
      <Folder folderIndex={1}>
        <FolderHeader>
          <FolderNotch folderNotchIndex={1}></FolderNotch>
        </FolderHeader>
        <FolderBody folderBodyIndex={1}>{frontFolderData}</FolderBody>
      </Folder>
      {interactiveFoldersData.map((folder, index) => (
        <Folder
          folderIndex={index + 2}
          key={index}
          style={{
            transform: switches[index]
              ? "translateY(-70vh)"
              : "translateY(0px)",
            transition:
              "transform 0.5s, border-top 0.3s, background-color 0.1s",
          }}
        >
          <FolderHeader>
            <FolderNotch
              folderNotchIndex={index + 2}
              style={styles[index]?.folderNotch}
              onMouseEnter={() =>
                handleTabMouseEnter(index, folder.originalColor)
              }
              onMouseLeave={() =>
                handleTabMouseLeave(index, folder.originalColor)
              }
              onClick={() => handleTabClick(index)}
            >
              {folder.notchChildren}
            </FolderNotch>
          </FolderHeader>
          <FolderBody style={styles[index]?.folderBody}>
            {folder.children}
          </FolderBody>
        </Folder>
      ))}
    </FoldersContainer>
  );
};
