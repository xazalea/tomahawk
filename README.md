# Retrograde 🎮

**Self-hosted game API with 28,000+ games.** All assets (HTML, images, videos) downloaded and re-hosted on GitHub, served via jsDelivr CDN. Zero external dependencies.

## Quick Start

### HTML
```html
<script src="https://cdn.jsdelivr.net/gh/xazalea/retrograde@main/retrograde.js"></script>
<script>
  const api = new RetrogradeAPI();
  api.getGames(1).then(data => {
    console.log(data.games); // 50 games
  });
</script>
```

### Node.js
```javascript
const RetrogradeAPI = require('retrograde.js');
const api = new RetrogradeAPI();
api.getGames(1).then(data => console.log(data));
```

## API Methods

- `getGames(page)` — Get paginated games (50/page, 564 total pages)
- `getGamesByCategory(slug, page)` — Get category-filtered games
- `getCategories()` — Get all 20 categories
- `getTags()` — Get all 513 tags
- `getIndex()` — Get API metadata
- `clearCache()` — Clear cached responses

## Features

✨ **28,153 games** with full metadata
🎬 **Video previews** for 23k games
🖼️ **High-quality thumbnails** (256×160 WebP)
⚡ **Ultra-fast CDN delivery** via jsDelivr
🔍 **Full-text search** by name and tags
📱 **Mobile-friendly** responsive design
🚀 **One-line setup** — just import the client library

## Live Demo

Open the interactive demo:
`https://cdn.jsdelivr.net/gh/xazalea/retrograde@main/index.html`

## Repositories

- `xazalea/retrograde` — API JSON + metadata + HTML + images
- `xazalea/retrograde-vid` — Video previews (if downloaded)

Both served via jsDelivr CDN at no cost.

## More Info

- API Reference: https://github.com/xazalea/retrograde
- Video Repo: https://github.com/xazalea/retrograde-vid
