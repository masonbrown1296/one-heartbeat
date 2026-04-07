import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '../content/blogData'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="section section-white" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
        <h2>Post not found</h2>
        <Link to="/blog" className="btn btn-primary mt-4">Back to Blog</Link>
      </div>
    )
  }

  const dateFormatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const related = allPosts.filter((p, i) => i !== currentIndex && p.category === post.category).slice(0, 2)
  if (related.length < 2) {
    const extras = allPosts.filter(p => p.slug !== slug && !related.find(r => r.slug === p.slug)).slice(0, 2 - related.length)
    related.push(...extras)
  }

  return (
    <div>
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${slug}`}
      />
      <section className="blogpost-hero section-dark">
        <div className="container">
          <Link to="/blog" className="blogpost-back">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          <span className="blog-category">{post.category}</span>
          <h1 className="blogpost-title">{post.title}</h1>
          <div className="blogpost-meta">
            <span className="blogpost-meta-item"><User size={16} /> {post.author}</span>
            <span className="blogpost-meta-item"><Calendar size={16} /> {dateFormatted}</span>
            <span className="blogpost-meta-item"><Clock size={16} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container blogpost-container">
          <article className="blogpost-content">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
          </article>

          <div className="blogpost-author-card">
            <img src="/headshot.webp" alt="Tommy Brown" className="blogpost-author-img" />
            <div>
              <h4 className="blogpost-author-name">Tommy Brown</h4>
              <p className="blogpost-author-bio">
                Speaker, coach, and founder of One Heartbeat Warriors. Tommy helps teams, businesses, and athletes develop the mental toughness to perform at the highest level.
              </p>
            </div>
          </div>

          {related.length > 0 && (
            <div className="blogpost-related">
              <h3 className="blogpost-related-heading">More Articles</h3>
              <div className="blogpost-related-grid">
                {related.map(r => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="blogpost-related-card">
                    <span className="blog-category">{r.category}</span>
                    <h4>{r.title}</h4>
                    <p>{r.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
