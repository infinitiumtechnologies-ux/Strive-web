import * as React from 'react';
import { Card } from '../../../shared/ui/Card';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const blogs: BlogPost[] = [
  {
    id: 1,
    title: 'Top 10 Road Trips to Take This Summer',
    excerpt: 'Discover the most scenic routes and hidden coastal spots for your next weekend escape.',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=600&q=80',
    category: 'Travel Guide',
  },
  {
    id: 2,
    title: 'Why Telemetry is Revolutionizing Car Rentals',
    excerpt: 'How real-time performance checkups keep rental fleets safer and more reliable.',
    date: 'June 24, 2026',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&q=80',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Electric Vehicles vs Hybrids: What to Rent?',
    excerpt: 'We compare battery ranges, charging nodes, and driving styles for your next business trip.',
    date: 'June 18, 2026',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
    category: 'Fleet Review',
  },
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900" data-testid="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-500 uppercase">
            Our Blog
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Latest News & Travel Tips
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Stay updated with corporate insights, driving tips, and luxury car reviews.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              hoverEffect
              className="flex flex-col h-[400px] overflow-hidden p-0 border border-slate-800 bg-slate-900/30 group"
              data-testid="blog-card"
            >
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {blog.category}
                </span>
              </div>
              <div className="flex-grow p-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 font-semibold">{blog.date}</p>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-500 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors cursor-pointer pt-4">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
