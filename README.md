<div align="center">
  <img src="icon.svg" alt="GitHub Force Feed Icon" width="128" height="128">
  
  # GitHub Force Feed

  A lightweight browser extension that automatically redirects you from the GitHub homepage to your personalized feed.
</div>

## What It Does

When you visit `github.com`, this extension automatically redirects you to `github.com/feed` - your personalized GitHub activity feed.

## Why?

GitHub recently changed their UI, moving the feed to a separate page. This extension brings back the convenience of landing directly on your feed when visiting GitHub.

## Installation

### Chrome/Edge

1. Download the latest `chrome-mv3-*.zip` from [Releases](https://github.com/flashblaze/github-force-feed/releases)
2. Unzip the file
3. Go to `chrome://extensions/` (or `edge://extensions/`)
4. Enable "Developer mode" (toggle in the top right)
5. Click "Load unpacked" and select the unzipped folder

### Firefox

1. Download the latest `firefox-mv2-*.zip` from [Releases](https://github.com/flashblaze/github-force-feed/releases)
2. Go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select the zip file directly

## Development

### Prerequisites

- [Bun](https://bun.sh) (or Node.js with npm/yarn)

### Setup

```bash
# Install dependencies
bun install

# Development mode (Chrome)
bun run dev

# Development mode (Firefox)
bun run dev:firefox
```

### Build

```bash
# Build for Chrome/Edge
bun run build

# Build for Firefox
bun run build:firefox

# Create distribution zips
bun run zip
bun run zip:firefox
```

## Tech Stack

- [WXT](https://wxt.dev) - Browser extension framework
- TypeScript
- Content Script for redirect logic

## License

MIT

