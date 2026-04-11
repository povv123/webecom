import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/resources/blog.css'; 

const Blog = () => {
  const posts = [
    { id: 1, title: "The Future of Industrial Design", category: "Design", date: "Mar 20, 2026", img: "/images/blog/design.jpg" },
    { id: 2, title: "Sustainable Tech in 2026", category: "Environment", date: "Mar 15, 2026", img: "/images/blog/eco.jpg" },
    { id: 3, title: "Why E-commerce is Changing", category: "Business", date: "Mar 10, 2026", img: "/images/blog/biz.jpg" }
  ];

  return (
    <div className="resource-page blog">
      <header className="resource-header">
        <p className="eyebrow">Eter Newsroom</p>
        <h1>Insights on the <span>future of tech.</span></h1>
      </header>

      <div className="blog-grid">
        {posts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="blog-meta">
              <span className="blog-cat">{post.category}</span>
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <Link to={`/resources/blog/${post.id}`} className="apple-link">Read more &gt;</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;