import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    LayoutDashboard, Users, Clapperboard, Mic, ShieldQuestion, Settings, LogOut,
    ChevronDown, UserCircle, ChevronsLeft, ChevronsRight
} from 'lucide-react';
import './AdminHeader.css';

const AdminHeader = ({ isCollapsed, toggleSidebar }) => {
    const location = useLocation();
    const [openMenus, setOpenMenus] = useState({});

    const navItems = [
        { name: "대시보드", icon: <LayoutDashboard size={20} />, path: "/admin", subItems: [] },
        {
            name: "사용자 관리",
            icon: <Users size={20} />,
            subItems: [
                { name: "사용자 목록", path: "/admin/user-list" },
                { name: "운영진 설정", path: "/admin/setting" },
            ]
        },
        {
            name: "애니메이션 관리",
            icon: <Clapperboard size={20} />,
            subItems: [
                { name: "애니메이션 관리", path: "/admin/ani" },
                { name: "애니메이션 태그 관리", path: "#" },
            ]
        },
        {
            name: "캐릭터 관리",
            icon: <Mic size={20} />,
            subItems: [
                { name: "캐릭터 게시판", path: "#" },
                { name: "캐릭터 명대사", path: "/admin/cha-fl" },
                { name: "성우 관리", path: "/admin/va" },
            ]
        },
        {
            name: "고객센터 관리",
            icon: <ShieldQuestion size={20} />,
            subItems: [
                { name: "1:1 문의", path: "/admin/cs" },
                { name: "자주 묻는 질문", path: "#" },
                { name: "문의 내역", path: "#" },
            ]
        },
        { name: "공지사항", icon: <Settings size={20} />, path: "#", subItems: [] }
    ];
    
    useEffect(() => {
        const currentMenu = navItems.find(item => 
            item.path === location.pathname || item.subItems?.some(sub => sub.path === location.pathname)
        );
        if (currentMenu) {
            setOpenMenus(prev => ({ ...prev, [currentMenu.name]: true }));
        }
    }, [location.pathname]);

    const toggleMenu = (menuName) => {
        if (!isCollapsed) {
            setOpenMenus(prev => ({
                ...prev,
                [menuName]: !prev[menuName]
            }));
        }
    };

    return (
        <aside 
            className={`bg-white shadow-lg flex flex-col h-screen fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`}
        >
            {/* Admin Info */}
            <div className={`p-4 border-b border-slate-100 text-center transition-all duration-300 overflow-hidden ${isCollapsed ? 'h-0 p-0 opacity-0' : 'h-auto p-6 opacity-100'}`}>
                <UserCircle size={48} className="text-slate-400 mx-auto mb-2" />
                <p className="font-bold text-slate-800 whitespace-nowrap">Admin Name</p>
                <p className="text-sm text-slate-500 whitespace-nowrap">admin@aniping.com</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-2">
                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            {item.subItems.length > 0 ? (
                                <>
                                    <button
                                        onClick={() => toggleMenu(item.name)}
                                        className={`flex items-center justify-between w-full p-3 rounded-lg text-left font-semibold transition-colors text-slate-700 hover:bg-slate-100 ${isCollapsed ? 'justify-center' : ''}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {item.icon}
                                            {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
                                        </div>
                                        {!isCollapsed && <ChevronDown size={16} className={`transition-transform duration-200 ${openMenus[item.name] ? 'rotate-180' : ''}`} />}
                                    </button>
                                    <div 
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${!isCollapsed && openMenus[item.name] ? 'max-h-96' : 'max-h-0'}`}
                                    >
                                        <ul className="flex flex-col pt-1 pl-8 space-y-1">
                                            {item.subItems.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link
                                                        to={subItem.path}
                                                        className={`block p-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap
                                                            ${location.pathname === subItem.path ? 'text-primary bg-blue-50' : 'text-slate-600 hover:bg-slate-100'}`}
                                                    >
                                                        - {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-3 w-full p-3 rounded-lg text-left font-semibold transition-colors 
                                        ${location.pathname === item.path ? 'bg-blue-50 text-primary' : 'text-slate-700 hover:bg-slate-100'}
                                        ${isCollapsed ? 'justify-center' : ''}`}
                                >
                                    {item.icon}
                                    {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Toggle & Logout */}
            <div className="p-2 border-t border-slate-100">
                <button 
                    onClick={toggleSidebar} 
                    className="flex items-center justify-center gap-2 w-full p-3 rounded-lg text-slate-600 hover:bg-slate-100 font-semibold transition-colors"
                >
                    {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
                </button>
                <Link
                    to="/"
                    className={`flex items-center gap-2 w-full p-3 mt-1 rounded-lg bg-red-50 text-red-600 font-bold hover:bg-red-100 transition-colors ${isCollapsed ? 'justify-center' : ''}`}
                >
                    <LogOut size={20} />
                    {!isCollapsed && <span className="whitespace-nowrap">나가기</span>}
                </Link>
            </div>
        </aside>
    );
};

export default AdminHeader;
