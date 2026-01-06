import React from 'react';
import Image from 'next/image';
import { Tag } from 'lucide-react';

const blogPosts = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/lw0JDgZaSQ4XgYXSqjfkArEcnt9R9EjWtmMMobTP-15.webp",
    category: "Islam",
    categoryColor: "#a855f7", // Purple theme from screenshot
    title: "Signification de “Ahhadu Alla Ilaha Illallah” : explication complète, prononciation et enseignement",
    date: "3 janv. 2026",
    link: "/blog/signification-ahhadu"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/Y83IHFiZhlt40m7KbeRSTCxqmSv5JRJHdomkJeOj-16.webp",
    category: "Arabe",
    categoryColor: "#29ABE2", // Cyan theme
    title: "Alphabet arabe Alif Ba Ta : guide du débutant",
    date: "1 janv. 2026",
    link: "/blog/alphabet-arabe"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e45c9f35-e52b-4c3b-800c-6b6caddca86c-talqeeny-com/assets/images/C28IJBzgrVZu2lUltpoFojLUx5dCjjJEryuIg86q-17.webp",
    category: "Mémorisation",
    categoryColor: "#a855f7",
    title: "Comment mémoriser le Coran avec un travail à temps plein ?",
    date: "30 déc. 2025",
    link: "/blog/memoriser-coran"
  }
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-soft overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 border border-gray-100">
      {/* Blog Image */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-medium shadow-sm transition-colors duration-200" style={{ color: post.categoryColor }}>
          <Tag size={12} fill={post.categoryColor} stroke="none" />
          <span>{post.category}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[20px] font-display font-semibold text-[#003049] leading-[1.3] mb-6 line-clamp-3 hover:text-[#29ABE2] transition-colors cursor-pointer">
          {post.title}
        </h3>
        
        <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between text-[14px]">
          <span className="text-[#5E6266]">{post.date}</span>
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1px] bg-gray-300"></span>
            <a 
              href={post.link} 
              className="text-[#003049] font-semibold hover:text-[#29ABE2] transition-colors inline-flex items-center gap-1 group"
            >
              Lire plus 
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentBlogs = () => {
  return (
    <section className="bg-white py-[100px] font-sans">
      <div className="container max-w-[1320px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[40px] font-display font-bold text-[#003049] mb-4">
            Blogs récents
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;