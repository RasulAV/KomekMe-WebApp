/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n.ts')

module.exports = withNextIntl({
  // Other Next.js config options can go here
})
