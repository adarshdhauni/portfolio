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
        content="Adarsh Dhauni, React Developer, Frontend Developer, Full Stack Developer, JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS, Portfolio"
      />
      <meta name="author" content={SITE_CONFIG.fullName} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#000000" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_CONFIG.fullName} />
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
