import "./LargeContainers.css";
import "./FoldersContainer.css";

export const MainContainer = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

export const TransparentLargeContainer = ({ children }) => {
  return <div className="transparentlargecontainer">{children}</div>;
};

export const WhiteLargeContainer = ({ children }) => {
  return <div className="whitelargecontainer">{children}</div>;
};

export const CurvyLargeContainer = ({ children }) => {
  return (
    <div className="curvylargecontainer wrapper cartoonyBorder cartoonyComponentShadow">
      {children}
    </div>
  );
};

export const CardLargeContainer = ({ children }) => {
  return <div className="cardlargecontainer">{children}</div>;
};

export const GridFoldersContainer = ({ children, withSpaceAbove = true }) => {
  const style = {
    marginTop: withSpaceAbove ? "75vh" : "5rem",
  };
  return (
    <div id="foldersContainer" style={style}>
      {children}
    </div>
  );
};

export const FolderLargeContainer = ({ children, color = "yellow" }) => {
  const styles = {
    yellow: {
      folderID: "folder1",
      folderNotchID: "folderNotch1",
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(252, 205, 42)",
      },
      folderBody: {
        backgroundColor: "rgb(252, 205, 42)",
      },
    },
    orange: {
      folderID: "folder2",
      folderNotchID: "folderNotch2",
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(255, 160, 72)",
      },
      folderBody: {
        backgroundColor: "rgb(255, 160, 72)",
      },
    },
    green: {
      folderID: "folder3",
      folderNotchID: "folderNotch3",
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(52, 121, 40)",
      },
      folderBody: {
        backgroundColor: "rgb(52, 121, 40)",
      },
    },
    redorange: {
      folderID: "folder4",
      folderNotchID: "folderNotch4",
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(255, 64, 38)",
      },
      folderBody: {
        backgroundColor: "rgb(255, 64, 38)",
      },
    },
    blue: {
      folderID: "folder5",
      folderNotchID: "folderNotch5",
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(123, 152, 255)",
      },
      folderBody: {
        backgroundColor: "rgb(123, 152, 255)",
      },
    },
    purple: {
      folderID: "folder6",
      folderNotchID: "folderNotch6",
      folderNotch: {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        backgroundColor: "rgb(193, 72, 235)",
      },
      folderBody: {
        backgroundColor: "rgb(193, 72, 235)",
      },
    },
  };

  return (
    <div className="folder" id={styles[color].folderID}>
      <div className="folderHeader">
        <div
          className="folderNotch flex-center"
          id={styles[color].folderNotchID}
          style={styles[color]?.folderNotch} // Apply dynamic styles to folderNotch
        ></div>
      </div>
      <div
        className="folderBody"
        style={styles[color]?.folderBody} // Apply dynamic styles to folderBody
      >
        {children}
      </div>
    </div>
  );
};
