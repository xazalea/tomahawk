/**
 * Retrograde Game API Client Library v1.0
 * Zero dependencies, works in browser and Node.js
 *
 * Usage:
 *   const api = new RetrogradeAPI();
 *   const games = await api.getGames(1);
 *   const categories = await api.getCategories();
 */

(function(global) {
  'use strict';

  class RetrogradeAPI {
    constructor(baseUrl = 'https://cdn.jsdelivr.net/gh/xazalea/retrograde@main/data') {
      this.baseUrl = baseUrl;
      this.cache = new Map();
    }

    async fetch(path) {
      const url = `${this.baseUrl}${path}`;
      if (this.cache.has(url)) {
        return this.cache.get(url);
      }
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
      const data = await res.json();
      this.cache.set(url, data);
      return data;
    }

    async getIndex() {
      return this.fetch('/index.json');
    }

    async getCategories() {
      const data = await this.fetch('/categories.json');
      return data.categories;
    }

    async getTags() {
      const data = await this.fetch('/tags.json');
      return data.tags;
    }

    async getGames(page = 1) {
      return this.fetch(`/games/pages/${page}.json`);
    }

    async getGamesByCategory(slug, page = 1) {
      return this.fetch(`/games/cat/${slug}/${page}.json`);
    }

    clearCache() {
      this.cache.clear();
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = RetrogradeAPI;
  } else {
    global.RetrogradeAPI = RetrogradeAPI;
  }
})(typeof window !== 'undefined' ? window : global);
