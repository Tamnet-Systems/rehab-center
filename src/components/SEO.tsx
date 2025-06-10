import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
}

export const SEO = ({
  title = 'Salmo Rehabilitation Centre - Addiction Treatment & Recovery in Kisii, Kenya',
  description = 'Salmo Rehabilitation Centre provides compassionate addiction treatment, mental health services, and recovery support in Kisii, Kenya. Evidence-based programs for lasting recovery.',
  keywords = 'rehabilitation center, addiction treatment, drug rehab, alcohol rehab, mental health services, therapy, Kisii, Kenya, recovery, substance abuse, counseling',
  canonicalUrl = 'https://salmocentre.com',
  image = 'https://salmocentre.com/og-image.jpg',
  type = 'website',
  publishedAt,
  updatedAt,
}: SEOProps) => {
  const siteTitle = 'Salmo Rehabilitation Centre';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific meta tags */}
      {type === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === 'article' && updatedAt && (
        <meta property="article:modified_time" content={updatedAt} />
      )}

      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'WebPage',
          headline: title,
          description: description,
          image: image,
          url: canonicalUrl,
          ...(type === 'article' && {
            datePublished: publishedAt,
            dateModified: updatedAt || publishedAt,
          }),
          publisher: {
            '@type': 'Organization',
            name: 'Salmo Rehabilitation Centre',
            logo: {
              '@type': 'ImageObject',
              url: 'https://salmocentre.com/logo-salmo.png',
            },
          },
        })}
      </script>
    </Helmet>
  );
}; 