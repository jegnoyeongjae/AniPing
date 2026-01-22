import { useNavigate } from "react-router-dom";
import { Edit, Trash2 } from 'lucide-react';

const AdminChaFLLi = ({chaFl}) => {
    const navigate = useNavigate();

    const handleEditClick = (e) => {
        e.stopPropagation();
        navigate(`/admin/cha-edit/${chaFl.id}`);
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        if (confirm(`'${chaFl.title}'의 명대사를 정말 삭제하시겠습니까?`)) {
            console.log("삭제 처리:", chaFl.id);
            alert("삭제되었습니다.");
            // 여기에 실제 삭제 로직 추가 (상위 컴포넌트에서 상태 업데이트 필요)
        }
    }

    return(
        <li 
            className="grid grid-cols-12 gap-4 p-5 items-center hover:bg-slate-50/50 transition-colors cursor-pointer text-left"
        >
            <div className="col-span-1 flex justify-center">
                <img src={chaFl.image} alt={chaFl.title} className="w-12 h-12 object-cover rounded-md shadow-sm"/>
            </div>
            <div className="col-span-2 font-bold text-slate-800 truncate">{chaFl.title}</div>
            <div className="col-span-7 text-slate-600 italic truncate">"{chaFl.line}"</div> {/* content -> line */}
            <div className="col-span-2 flex items-center justify-center gap-2">
                <button 
                    onClick={handleEditClick}
                    className="flex items-center gap-1.5 text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
                >
                    <Edit size={14} />
                    수정
                </button>
                <button 
                    onClick={handleDelete}
                    className="p-2 text-slate-400 hover:bg-red-100 hover:text-red-500 rounded-full transition-colors"
                    title="삭제"
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </li>
    )
}

export default AdminChaFLLi;
