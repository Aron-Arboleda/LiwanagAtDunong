import { Helmet } from "react-helmet-async";

const GlobalMetaTags = () => {
  return (
    <Helmet>
      <meta
        name="description"
        content="Liwanag at Dunong is a non-governmental organization that seeks to uplift the Aeta Indigenous People"
      />

      {/* Open Graph Meta Tags for Facebook, LinkedIn, etc. */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Liwanag at Dunong" />
      <meta
        property="og:description"
        content="Liwanag at Dunong is a non-governmental organization that seeks to uplift the Aeta Indigenous People"
      />
      <meta property="og:url" content="https://liwanagatdunong.com/" />
      <meta property="og:site_name" content="Liwanag at Dunong" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image"
        content="https://liwanagatdunong.com/backgroundImage.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Liwanag at Dunong - Aeta Indigenous People NGO"
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Liwanag at Dunong" />
      <meta
        name="twitter:description"
        content="Liwanag at Dunong is a non-governmental organization that seeks to uplift the Aeta Indigenous People"
      />
      <meta
        name="twitter:image"
        content="https://liwanagatdunong.com/backgroundImage.png"
      />
      <meta name="twitter:site" content="@liwanagatdunong" />

      {/* Fonts Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Corben:wght@400;700&family=Shrikhand&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Fuzzy+Bubbles:wght@400;700&family=Fascinate+Inline&family=Anek+Odia:wght@100..800&family=Annie+Use+Your+Telescope&family=Shrikhand&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default GlobalMetaTags;
