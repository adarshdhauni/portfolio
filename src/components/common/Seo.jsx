import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/constants/siteConfig";

const Seo = ({
  title,
  description,
  image = SITE_CONFIG.ogImage,
  url = SITE_CONFIG.siteUrl,
}) => {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.fullName}`
    : SITE_CONFIG.fullName;

  return (
    <Helmet>
      <html lang="en" />

      <title>{pageTitle}</title>

      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Adarsh Dhauni, Full-Stack Developer, React, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, Portfolio"
      />
      <meta name="author" content={SITE_CONFIG.fullName} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#000000" />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_CONFIG.fullName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta
        property="og:image:alt"
        content="Adarsh Dhauni — Full-Stack Developer Portfolio"
      />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content="Adarsh Dhauni — Full-Stack Developer Portfolio"
      />
    </Helmet>
  );
};

export default Seo;