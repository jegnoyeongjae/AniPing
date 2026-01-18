import { Trophy } from 'lucide-react';

const ChaRankItem = ({ character }) => {
  const { image, rank, name, aniname, anidate } = character;
  
  let rankColor = "text-slate-500";
  let rankIcon = null;

  if (rank === 1 || rank === '1') {
    rankColor = "text-yellow-500";
    rankIcon = <Trophy size={16} className="fill-yellow-500 text-yellow-500" />;
  } else if (rank === 2 || rank === '2') {
    rankColor = "text-slate-400";
    rankIcon = <Trophy size={16} className="fill-slate-400 text-slate-400" />;
  } else if (rank === 3 || rank === '3') {
    rankColor = "text-amber-700";
    rankIcon = <Trophy size={16} className="fill-amber-700 text-amber-700" />;
  }

 return (
    <li className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-blue-50/30 transition-colors group">
      <div className={`col-span-1 flex flex-col items-center justify-center font-black text-xl ${rankColor}`}>
        {rank}
        {rankIcon}
      </div>
      <div className="col-span-2 flex justify-center">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-110 transition-transform">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="col-span-3 text-left pl-4 font-bold text-slate-700 text-lg group-hover:text-primary transition-colors">
        {name}
      </div>
      <div className="col-span-4 text-left font-medium text-slate-500">
        {aniname}
      </div>
      <div className="col-span-2 text-center text-sm text-slate-400 font-medium">
        {anidate}
      </div>
    </li>
  );
};
export default ChaRankItem;
