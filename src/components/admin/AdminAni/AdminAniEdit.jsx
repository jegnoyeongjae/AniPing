import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Save, ArrowLeft } from 'lucide-react';

const AdminAniEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        infoImg: '',
        director: '',
        studio: '',
        genre: '',
        airDate: '',
        rating: ''
    });

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/animeInfoData.json');
            const data = response.data.find(item => item.id === Number(id));
            if (data) {
                setFormData(data);
            }
        } catch (e) {
            console.error("데이터 로드에 실패했습니다.", e);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 실제 데이터 수정 로직을 수행합니다 (예: API 호출).
        // 지금은 로컬 JSON 파일을 사용하므로, 수정된 내용을 콘솔에 출력하고 이전 페이지로 이동합니다.
        console.log("수정된 데이터:", formData);
        alert("수정되었습니다.");
        navigate(`/AdminAniLiEd/${id}`); // 수정 후 상세 페이지로 이동
    };

    const handleGoBack = () => {
        navigate(-1);
    }

    const inputClass = "w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition";
    const labelClass = "block text-sm font-bold text-slate-600 mb-2";

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-10">
                 <button onClick={handleGoBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-primary transition-colors">
                    <ArrowLeft size={20} />
                    <span>뒤로가기</span>
                </button>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                    "{formData.title}" 정보 수정
                </h2>
                <div className="w-24"></div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className={labelClass}>제목</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} className={inputClass} required />
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClass}>이미지 URL</label>
                        <input type="text" name="infoImg" value={formData.infoImg} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>감독</label>
                        <input type="text" name="director" value={formData.director} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>스튜디오</label>
                        <input type="text" name="studio" value={formData.studio} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>장르</label>
                        <input type="text" name="genre" value={formData.genre} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>방영일</label>
                        <input type="text" name="airDate" value={formData.airDate} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClass}>연령</label>
                        <input type="text" name="rating" value={formData.rating} onChange={handleChange} className={inputClass} />
                    </div>
                </div>

                <div className="flex justify-end pt-6 border-t">
                    <button type="submit" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        <Save size={18} />
                        수정 완료
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminAniEdit;