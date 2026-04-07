import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PageHero from '../components/PageHero'
import { getAllPosts, categories } from '../content/blogData'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './Blog.css'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const gridRef = useScrollAnimation()

  const allPosts = getAllPosts()
  const filtered = activeCategory === 'All'
    ? allPosts
    : allPosts.filter(p => p.category === activeCategory)

  const featured = allPosts.find(p => p.featured)
  const regular = filtered.filter(p => !p.featured || activeCategory !== 'All')

  const dateFormat = (d) => new Date(d).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div>
      <SEO
        title="Blog"
        description="Mental performance insights, leadership frameworks, and culture-building strategies from Coach Tommy Brown."
        path="/blog"
      />
      <PageHero
        label="Insights & Articles"
        title={<>Warrior <span className="text-orange">Blog</span></>}
        subtitle="Mental performance insights, leadership frameworks, and culture-building strategies from Coach Tommy Brown and the One Heartbeat Warriors team."
      />

      <section className="section section-white">
        <div className="container">
          {/* FEATURED */}
          {activeCategory === 'All' && featured && (
            <Link to={`/blog/${featured.slug}`} className="blog-featured fade-in visible" style={{ textDecoration: 'none' }}>
              <div className="blog-featured-thumb" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 100%)' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>Featured</span>
              </div>
              <div className="blog-featured-content">
                <span className="blog-category">{featured.category}</span>
                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.description}</p>
                <div className="blog-meta">
                  <span>{dateFormat(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="btn btn-primary mt-3">Read Article</span>
              </div>
            </Link>
          )}

          {/* CATEGORIES */}
          <div className="blog-categories fade-up visible mt-6">
            {categories.map(c => (
              <button
                key={c}
                className={`category-btn ${activeCategory === c ? 'active' : ''}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="blog-grid mt-4" ref={gridRef}>
            {(activeCategory === 'All' ? regular : filtered).map((post, i) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className={`blog-card fade-up stagger-${(i % 3) + 1}`} style={{ textDecoration: 'none' }}>
                <div className="blog-thumb" style={{ background: 'linear-gradient(135deg, var(--navy-800) 0%, var(--gray-700) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '0.85rem' }}>{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-category">{post.category}</div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.description}</p>
                  <div className="blog-meta">
                    <span>{dateFormat(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
