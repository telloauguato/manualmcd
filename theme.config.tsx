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
  }
}

export default config
