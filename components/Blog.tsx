'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, BookOpen, Loader2 } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback data in case DB is empty
  const defaultPosts = [
    {
      id: '1',
      title: 'Building Scalable React Applications with TypeScript',
      category: 'React',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      excerpt: 'Learn best practices for structuring large-scale React applications with TypeScript, including patterns for type safety and code organization.',
      link: '#'
    },
    {
      id: '2',
      title: 'The Art of API Design: REST vs GraphQL',
      category: 'Backend',
      date: 'Dec 28, 2023',
      readTime: '12 min read',
      excerpt: 'A comprehensive comparison of REST and GraphQL, exploring when to use each approach and real-world trade-offs.',
      link: '#'
    },
    {
      id: '3',
      title: 'CSS Grid and Flexbox: A Modern Layout Guide',
      category: 'CSS',
      date: 'Dec 10, 2023',
      readTime: '6 min read',
      excerpt: 'Master modern CSS layout techniques with practical examples and use cases for building responsive interfaces.',
      link: '#'
    },
    {
      id: '4',
      title: 'Optimizing Web Performance: Core Web Vitals',
      category: 'Performance',
      date: 'Nov 22, 2023',
      readTime: '10 min read',
      excerpt: 'Strategies and techniques for improving website performance and passing Core Web Vitals metrics.',
      link: '#'
    }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch from local Postgres API
        const res = await fetch('/api/blogs');
        const data = await res.json();

        // Use DB data if available, otherwise fallback
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data.slice(0, 4)); // Limit to 4 posts for the homepage
        } else {
          setPosts(defaultPosts);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setPosts(defaultPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="bg-white w-screen relative left-1/2 -translate-x-1/2 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        
        <div className="border-t border-gray-200 pt-8 mb-12">
          <span className="text-xl font-medium text-gray-500 uppercase tracking-widest">
            (05) Latest Blog Posts
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-gray-400" size={32} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {posts.map((post, index) => (
              <article 
                key={post.id || index} 
                className="group bg-gray-50 border border-gray-100 p-6 hover:border-gray-300 transition-colors duration-300 flex flex-col"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-medium text-gray-500 mb-3">
                  <span className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-700">
                    {post.category || 'Tech'}
                  </span>
                  <span>{post.date || 'Recently'}</span>
                  {post.readTime && (
                    <>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </>
                  )}
                </div>

                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2 group-hover:underline decoration-2 decoration-gray-900 underline-offset-4 cursor-pointer">
                  <a href={post.link || '#'}>
                    {post.title}
                  </a>
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 text-sm grow">
                  {post.excerpt}
                </p>

                <a 
                  href={post.link || '#'}
                  className="inline-flex items-center text-xs font-bold text-gray-900 group/link mt-auto"
                >
                  Read More
                  <ArrowUpRight 
                    size={14} 
                    className="ml-1 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" 
                  />
                </a>
              </article>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View All Posts
            <BookOpen size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;