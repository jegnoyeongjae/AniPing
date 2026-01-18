import { Heart, Quote } from "lucide-react";

const ChaLineItem = ({ line }) => {
  const { image, title, content, rank, likeCount } = line;
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-blue-50/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-bold text-lg truncate">{title}</h3>
            {rank && <span className="text-xs font-bold bg-primary px-2 py-0.5 rounded text-white inline-block mt-1">#{rank}</span>}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between relative">
        <Quote className="absolute top-4 right-4 text-blue-100 rotate-180" size={40} />
        
        <p className="text-slate-700 font-bold text-lg leading-relaxed mb-6 relative z-10">
            "{content}"
        </p>

        <div className="flex items-center justify-end text-sm font-bold text-slate-400">
            {likeCount !== undefined && (
              <div className="flex items-center gap-1.5 group-hover:text-accent transition-colors">
                <Heart size={16} className="group-hover:fill-accent" /> 
                {likeCount.toLocaleString()}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ChaLineItem;
