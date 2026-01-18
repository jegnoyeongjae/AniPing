import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChaPostItem from './ChaPostItem';
import { PenSquare, MessageSquare } from 'lucide-react';

const ChaPost = ({ posts }) => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-primary rounded-full"></div>
                <div>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                        Community
                        <MessageSquare className="text-primary" size={24} />
                    </h2>
                    <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">Free Board</p>
                </div>
            </div>
            <Link to={'/chaNewPost'} className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <PenSquare size={18} />
                <span>새 글 작성</span>
            </Link>
        </div>

        <div className="bg-white rounded-[2rem] shadow-sm border border-blue-50/50 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-6 bg-slate-50/50 border-b border-blue-50 text-sm font-bold text-slate-500 uppercase tracking-wider text-center">
                <div className="col-span-6 text-left pl-4">Title</div>
                <div className="col-span-2">Writer</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-1">Views</div>
                <div className="col-span-1">Likes</div>
            </div>

            <ul className="divide-y divide-blue-50">
                {posts.map((post) => (
                    <ChaPostItem key={post.id} post={post} />
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};
export default ChaPost;
