const modules = import.meta.glob('./blog/*.md', { eager: true, query: '?raw', import: 'default' })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }

  const frontmatter = match[1]
  const content = match[2].trim()
  const meta = {}

  for (const line of frontmatter.split('\n')) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    let value = line.slice(colonIdx + 1).trim()
    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    // Parse arrays
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''))
    }
    // Parse booleans
    if (value === 'true') value = true
    if (value === 'false') value = false
    meta[key] = value
  }

  return { meta, content }
}

function slugFromPath(path) {
  return path.replace('./blog/', '').replace('.md', '')
}

const posts = Object.entries(modules).map(([path, raw]) => {
  const { meta, content } = parseFrontmatter(raw)
  return {
    slug: slugFromPath(path),
    content,
    ...meta,
  }
}).sort((a, b) => new Date(b.date) - new Date(a.date))

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug) || null
}

export function getPostsByCategory(category) {
  if (category === 'All') return posts
  return posts.filter(p => p.category === category)
}

export const categories = ['All', ...new Set(posts.map(p => p.category))]
