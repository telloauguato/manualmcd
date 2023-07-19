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
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Manual McD'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Manual McD" />
      <meta property="og:description" content="Manual McD" />
    </>
  ), 
  banner: {
    key: 'contribute',
    text: (
      <a href="https://github.com/telloauguato/manualmcd" target="_blank">
        🖋 Entre e contribua com as comunidade →
      </a>
    )
  },
  navigation: {
    prev: true,
    next: true
  },
  faviconGlyph: '🍔'
}

export default config