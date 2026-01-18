import { Link } from "wouter";
import { useState } from "react";
import { Search, X, User, ChevronDown, Sparkles } from "lucide-react";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const menuItems = [
        { name: "장르", items: ["판타지", "로맨스", "미스터리", "액션", "코미디"] },
        { name: "테마", items: ["이세계", "학원물", "메카닉", "치유물"] },
        { name: "순위", items: ["일간 랭킹", "주간 랭킹", "월간 랭킹", "역대 TOP 100"] },
        { name: "커뮤니티", items: ["자유게시판", "리뷰게시판", "질문게시판"] },
    ];

    const handleClickSearchBtn = () => {
        setIsOpenSearch(!isOpenSearch);
    };

    return (
        <header className="fixed top-0 left-0 w-full h-20 glass-panel z-[500] flex items-center px-6 md:px-12 border-b border-blue-50/50">
            <div className="flex-1">
                <Link href="/">
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <img src="/images/AniPing_candidate1.png" alt="AniPing" className="h-9 w-auto transition-transform group-hover:scale-105" />
                        <Sparkles className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                    </div>
                </Link>
            </div>

            <nav className="hidden md:flex flex-[2] justify-center space-x-10 h-full items-center">
                {menuItems.map((menu) => (
                    <div 
                        key={menu.name}
                        className="relative h-full flex items-center group"
                        onMouseEnter={() => setActiveDropdown(menu.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1.5 text-[14px] font-bold text-slate-600 hover:text-primary transition-all cursor-pointer relative py-2">
                            {menu.name}
                            <ChevronDown size={14} className={`transition-transform duration-300 opacity-50 ${activeDropdown === menu.name ? 'rotate-180' : ''}`} />
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </button>
                        
                        <div className={`absolute top-[80%] left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur-xl border border-blue-50 shadow-[0_20px_40px_-15px_rgba(125,211,252,0.3)] transition-all duration-500 origin-top rounded-2xl overflow-hidden p-2 ${activeDropdown === menu.name ? 'opacity-100 translate-y-2 visible' : 'opacity-0 translate-y-0 invisible'}`}>
                            <ul className="space-y-1">
                                {menu.items.map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="block px-4 py-2.5 text-[12px] font-semibold text-slate-500 hover:text-primary hover:bg-blue-50/50 rounded-xl transition-all">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </nav>

            <div className="flex-1 flex justify-end items-center space-x-6">
                <div className="hidden lg:flex items-center space-x-6 text-[13px] font-bold">
                    {isLogin ? (
                        <ul className="flex items-center space-x-6">
                            <li><Link href="#" className="text-slate-600 hover:text-primary transition-colors flex items-center gap-2"><User size={16} /> MyPage</Link></li>
                            <li><button onClick={() => setIsLogin(false)} className="text-slate-600 hover:text-primary transition-colors">LogOut</button></li>
                        </ul>
                    ) : (
                        <ul className="flex items-center space-x-6">
                            <li><button onClick={() => setIsLogin(true)} className="text-slate-500 hover:text-primary transition-colors uppercase tracking-wider">LOGIN</button></li>
                            <li><Link href="#" className="bg-primary text-white px-7 py-2.5 rounded-full hover:shadow-[0_10px_20px_-5px_rgba(125,211,252,0.5)] hover:-translate-y-0.5 transition-all uppercase tracking-wider">JOIN</Link></li>
                        </ul>
                    )}
                </div>
                <button 
                    onClick={handleClickSearchBtn}
                    className="p-2 rounded-full hover:bg-blue-50 transition-colors text-slate-400 hover:text-primary"
                >
                    {isOpenSearch ? (
                        <X size={22} />
                    ) : (
                        <Search size={22} />
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
