import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://oneheartbeatwarriors.com'
const SITE_NAME = 'One Heartbeat Warriors'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

export default function SEO({ title, description, path = '', image }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Mental Performance & Leadership Training`
  const url = `${SITE_URL}${path}`
  const img = image || DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  )
}
