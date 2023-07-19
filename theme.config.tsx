import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Manual McD</span>,
  project: {
    link: 'https://github.com/telloauguato/manualmcd',
  },
  docsRepositoryBase: 'https://github.com/telloauguato/manualmcd',
  footer: {
    text: `Manual McD ${new Date().getFullYear()} — by @telloauguato`,
  },
  titleSuffix:' — Manual McD',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="pt-BR" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/cover.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/cover.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/cover.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/cover.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/cover.png"
      />
      <meta name="msapplication-TileImage" content="/cover.png" />
    </>
  ),
  prevLinks: true,
  nextLinks: true,
  unstable_faviconGlyph: '🍔'
}

export default config
