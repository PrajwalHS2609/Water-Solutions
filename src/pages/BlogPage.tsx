import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/waterData';
import { BlogPost, PageId } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, ChevronRight, Check } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenWaterTest }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            <span>Water Treatment Guides & Research</span>
            <span>·</span>
            <span>Empirical Science</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Educational Guides & Water Quality Insights
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Unpack the chemistry of hard water, understand true ion exchange vs salt-free conditioners, and calculate the real financial impact of limescale on your appliances.
          </p>
        </div>

        {/* Selected Post Reader View */}
        {selectedPost ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8 max-w-4xl mx-auto">
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 cursor-pointer"
            >
              ← Back to All Articles
            </button>

            <div>
              <div className="flex items-center gap-3 text-xs text-slate-500 font-mono mb-2">
                <span className="text-cyan-700 font-semibold">{selectedPost.category}</span>
                <span>·</span>
                <span>{selectedPost.date}</span>
                <span>·</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {selectedPost.title}
              </h2>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-4 border-t border-slate-100">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Concerned about hard water in your home?
                </h4>
                <p className="text-xs text-slate-500">
                  Book a free, certified on-site hardness test with our specialists.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenWaterTest}
                className="px-5 py-2.5 bg-slate-900 hover:bg-cyan-600 text-white font-semibold text-xs rounded-xl transition-colors whitespace-nowrap cursor-pointer"
              >
                Schedule My Free Test
              </button>
            </div>
          </div>
        ) : (
          /* Article Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <span className="text-cyan-700 font-semibold">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{post.date}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 cursor-pointer"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
