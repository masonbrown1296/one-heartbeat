import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PageHero from '../components/PageHero'
import './InnerPage.css'
import './Blog.css'

const categories = ['All', 'Mental Toughness', 'Leadership', 'Culture', 'Training Tips', 'Foundation']

const posts = [
  {
    title: '5 Mental Performance Habits Every Athlete Needs Before Game Day',
    category: 'Mental Toughness',
    excerpt: 'Championship performance starts hours before tip-off. Here are the five pre-game mental habits that elite athletes use to get locked in and stay there.',
    date: 'January 28, 2025',
    readTime: '7 min read',
    featured: true,
  },
  {
    title: 'What Real Team Chemistry Actually Looks Like',
    category: 'Culture',
    excerpt: 'Forget the pizza parties. Genuine team chemistry is built through difficult conversations, shared standards, and a culture of radical accountability.',
    date: 'January 15, 2025',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'The Problem With "Just Believe in Yourself"',
    category: 'Mental Toughness',
    excerpt: "Confidence doesn't come from affirmations. It comes from a proven process. Here's how to build the kind of confidence that holds up when the stakes are highest.",
    date: 'January 8, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    title: 'How to Lead When You\'re Not the Captain',
    category: 'Leadership',
    excerpt: 'Positional leadership is the floor. Warrior leadership is the ceiling. Anyone on a team can lead — here\'s how.',
    date: 'December 20, 2024',
    readTime: '8 min read',
    featured: false,
  },
  {
    title: 'Why Your Practice Habits Are Destroying Your Game Day Performance',
    category: 'Training Tips',
    excerpt: "You can't be sloppy in practice and sharp in games. Warrior Culture starts in the daily reps — here's how to practice like you mean it.",
    date: 'December 12, 2024',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'The Be Grundy Story: Why Mentorship Changes Everything',
    category: 'Foundation',
    excerpt: 'One person\'s belief in a young Tommy Brown changed the entire trajectory of his life. That\'s why the Be Grundy Foundation exists.',
    date: 'December 5, 2024',
    readTime: '9 min read',
    featured: false,
  },
  {
    title: 'Building a Coaching Culture That Actually Sustains Success',
    category: 'Culture',
    excerpt: 'One championship is luck. A dynasty is culture. Here\'s what consistently great programs do differently — and how you can implement it today.',
    date: 'November 28, 2024',
    readTime: '7 min read',
    featured: false,
  },
  {
    title: "The Composure Code: Staying Locked In When the Game's on the Line",
    category: 'Mental Toughness',
    excerpt: 'Elite performers don\'t hope for composure — they train for it. Here are the systems and routines that keep warriors calm when everything is on the line.',
    date: 'November 20, 2024',
    readTime: '6 min read',
    featured: false,
  },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const gridRef = useScrollAnimation()

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  const featured = posts.find(p => p.featured)
  const regular = filtered.filter(p => !p.featured || activeCategory !== 'All')

  return (
    <div>
      <PageHero
        label="Insights & Articles"
        title={<>Warrior <span className="text-orange">Blog</span></>}
        subtitle="Mental performance insights, leadership frameworks, and culture-building strategies from Coach Tommy Brown and the One Heartbeat Warriors team."
      />

      <section className="section section-white">
        <div className="container">
          {/* FEATURED */}
          {activeCategory === 'All' && featured && (
            <div className="blog-featured fade-in visible">
              <div className="blog-featured-thumb placeholder-img">
                <span>Featured Image</span>
              </div>
              <div className="blog-featured-content">
                <span className="blog-category">{featured.category}</span>
                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>
                <div className="blog-meta">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <a href="#" className="btn btn-primary mt-3">Read Article</a>
              </div>
            </div>
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
              <article key={post.title} className={`blog-card fade-up stagger-${(i % 3) + 1}`}>
                <div className="blog-thumb placeholder-img">
                  <span>{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-category">{post.category}</div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="btn btn-outline-orange">Load More Articles</button>
          </div>
        </div>
      </section>
    </div>
  )
}
