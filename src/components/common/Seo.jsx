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
      <title>{pageTitle}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="Adarsh Dhauni, React Developer, Frontend Developer, Full Stack Developer, JavaScript, Portfolio"
      />

      <meta name="author" content={SITE_CONFIG.fullName} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Seo;
