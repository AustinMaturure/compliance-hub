import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { buildStructuredData, seo } from './seo.config'

function resolveSiteUrl(): string {
  return (process.env.VITE_SITE_URL ?? 'https://compliancehub.co.za').replace(/\/$/, '')
}

function seoPlugin(): Plugin {
  const siteUrl = resolveSiteUrl()

  return {
    name: 'compliance-hub-seo',
    transformIndexHtml(html) {
      const structuredData = JSON.stringify(buildStructuredData(siteUrl))

      return html
        .replaceAll('%SITE_URL%', siteUrl)
        .replaceAll('%SEO_TITLE%', seo.title)
        .replaceAll('%SEO_DESCRIPTION%', seo.description)
        .replaceAll('%SEO_KEYWORDS%', seo.keywords)
        .replaceAll('%SEO_SITE_NAME%', seo.siteName)
        .replaceAll('%SEO_LOCALE%', seo.locale)
        .replaceAll('%SEO_OG_IMAGE%', `${siteUrl}${seo.ogImage}`)
        .replaceAll('%SEO_STRUCTURED_DATA%', structuredData)
    },
    closeBundle() {
      const outDir = resolve(__dirname, 'dist')

      writeFileSync(
        resolve(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`
      )

      writeFileSync(
        resolve(outDir, 'robots.txt'),
        `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoPlugin()],
})
