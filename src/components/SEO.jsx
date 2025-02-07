import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, image }) => {
  const siteUrl = 'https://antonioarcher.com'; // Replace with your actual domain
  const defaultDescription = 'Full Stack Software Engineer crafting innovative web solutions with React.js, JavaScript, and Python.';
  const defaultImage = '/antonioarcher.jpeg'; // Add a default social sharing image

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title ? `${title} | Antonio Archer` : 'Antonio Archer | Full Stack Developer'}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title || 'Antonio Archer | Full Stack Developer'} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || `${siteUrl}${defaultImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title || 'Antonio Archer | Full Stack Developer'} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || `${siteUrl}${defaultImage}`} />

      {/* Keywords */}
      <meta name="keywords" content="Full Stack Developer, React.js, JavaScript, Python, Web Development, Software Engineer" />

      {/* Additional meta tags */}
      <meta name="author" content="Antonio Archer" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO; 