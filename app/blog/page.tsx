'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Loader2 } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback data
  const defaultPosts = [
    {
      id: '1',
      title: 'Building Scalable React Applications with TypeScript',
      category: 'React',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      excerpt: 'Learn best practices for structuring large-scale React applications with TypeScript, including patterns for type safety and code organization.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
      link: '#'
    },
    {
      id: '2',
      title: 'The Art of API Design: REST vs GraphQL',
      category: 'Backend',
      date: 'Dec 28, 2023',
      readTime: '12 min read',
      excerpt: 'A comprehensive comparison of REST and GraphQL, exploring when to use each approach and real-world trade-offs.',
      image: 'https://images.unsplash.com/photo-1558494949-efdeb6bf80a1?auto=format&fit=crop&q=80&w=800',
      link: '#'
    },
    {
      id: '3',
      title: 'CSS Grid and Flexbox: A Modern Layout Guide',
      category: 'CSS',
      date: 'Dec 10, 2023',
      readTime: '6 min read',
      excerpt: 'Master modern CSS layout techniques with practical examples and use cases for building responsive interfaces.',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800',
      link: '#'
    },
    {
      id: '4',
      title: 'Optimizing Web Performance: Core Web Vitals',
      category: 'Performance',
      date: 'Nov 22, 2023',
      readTime: '10 min read',
      excerpt: 'Strategies and techniques for improving website performance and passing Core Web Vitals metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      link: '#'
    },
    {
      id: '5',
      title: 'Introduction to Docker for Frontend Developers',
      category: 'DevOps',
      date: 'Oct 05, 2023',
      readTime: '15 min read',
      excerpt: 'A beginner-friendly guide to containerizing your React applications and ensuring consistent environments across your team.',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=800',
      link: '#'
    },
    {
      id: '6',
      title: 'Mastering State Management with Redux Toolkit',
      category: 'State',
      date: 'Sep 12, 2023',
      readTime: '9 min read',
      excerpt: 'Simplify your Redux logic with Redux Toolkit. We explore slices, thunks, and how to manage complex state effortlessly.',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=800',
      link: '#'
    }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/blogs');
        if (!res.ok) throw new Error('Failed to fetch from API');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
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
    // Adjusted pt-12 to remove large top gap but keep safe distance
    <div className="min-h-screen bg-white w-screen relative left-1/2 -translate-x-1/2 pt-12 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        
        {/* Back Link */}
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-black transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </a>

        {/* Header Section */}
        <div className="border-b border-gray-200 pb-12 mb-16">
          <div className="mb-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
              (05)
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 uppercase tracking-tight">
            All Blog Posts
          </h1>
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            Thoughts on web development, design, and technology. Exploring best practices, 
            tutorials, and insights from the field.
          </p>
        </div>

        {/* Content Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-gray-400" size={32} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {posts.map((post, index) => (
              <article 
                key={post.id || index} 
                className="group bg-white border border-transparent hover:border-gray-200 transition-colors duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100 aspect-4/3 mb-6 rounded-sm p-2">
                  <img 
                    src={post.image || 'https://via.placeholder.com/800x600'} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col px-6 pb-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-medium text-gray-500 mb-3">
                    <span className="px-1.5 py-0.5 bg-gray-50 border border-gray-200 text-gray-700">
                      {post.category || 'Tech'}
                    </span>
                    <span>{post.date || 'Recently'}</span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-gray-900 mb-3 leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-gray-900 cursor-pointer">
                    <a href={post.link || '#'}>
                      {post.title}
                    </a>
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <a 
                    href={post.link || '#'}
                    className="inline-flex items-center text-xs font-bold text-gray-900 group/link mt-auto"
                  >
                    Read Article
                    <ArrowUpRight 
                      size={14} 
                      className="ml-1 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" 
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}