import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AdminChaFLLi, AdminChaFLLiEd } from "../../../components/admin/AdminCha";
import { Quote, PlusCircle } from 'lucide-react';

const AdminChaFL = () => {
    const [chaFLs, setChaFLs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/adminChaLine.json');
            setChaFLs(response.data);
        } catch (e) {
            console.error(e);
        }
    };

    const handleNClick = () => {
        navigate('/AdCha/new'); // 새 명대사 추가 페이지로 라우팅
    };

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-10 bg-primary rounded-full"></div>
                        <div>
                            <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                                Famous Line Management
                                <Quote className="text-primary" size={28} />
                            </h2>
                            <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">캐릭터 명대사 관리</p>
                        </div>
                    </div>
                    <button onClick={handleNClick} className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        <PlusCircle size={18} />
                        <span>신규 등록</span>
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-5 bg-slate-100/80 text-sm font-bold text-slate-500 uppercase tracking-wider text-left">
                        <div className="col-span-1 text-center">Image</div>
                        <div className="col-span-2">Title</div>
                        <div className="col-span-7">Content</div>
                        <div className="col-span-2 text-center">Actions</div>
                    </div>

                    <ul className="divide-y divide-slate-100">
                        {chaFLs.map(chaFl => (
                            <AdminChaFLLi
                                key={chaFl.id}
                                chaFl={chaFl}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminChaFL;
