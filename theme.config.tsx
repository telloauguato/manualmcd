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
      <meta name="description" content="𝗣𝗘𝗡𝗦𝗔𝗠𝗘𝗡𝗧𝗢𝗦 𝗘 𝗜𝗗𝗘𝗜𝗔𝗦" />
      <meta name="og:description" content="𝗣𝗘𝗡𝗦𝗔𝗠𝗘𝗡𝗧𝗢𝗦 𝗘 𝗜𝗗𝗘𝗜𝗔𝗦" />
      <meta name="twitter:card" content="https://morkgalarhan.vercel.app/morkgalarhan.png" />
      <meta name="twitter:image" content="https:// morkgalarhan.vercel.app/morkgalarhan.png" />
      <meta name="twitter:site:domain" content="morkgalarhan.vercel.app" />
      <meta name="twitter:url" content="https://morkgalarhan.vercel.app" />
      <meta name="og:title" content="𝗠𝗢𝗥𝗞 𝗚𝗔𝗟𝗔𝗥𝗛𝗔𝗡" />
      <meta name="og:image" content="https://morkgalarhan.vercel.app/cover.png" />
      <meta name="apple-mobile-web-app-title" content="𝗠𝗢𝗥𝗞 𝗚𝗔𝗟𝗔𝗥𝗛𝗔𝗡 — 𝗣𝗘𝗡𝗦𝗔𝗠𝗘𝗡𝗧𝗢𝗦 𝗘 𝗜𝗗𝗘𝗜𝗔𝗦" />
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
  search: true,
  prevLinks: true,
  nextLinks: true,
  unstable_faviconGlyph: '🍔'
}

export default config
