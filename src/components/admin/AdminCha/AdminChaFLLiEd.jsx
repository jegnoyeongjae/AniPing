import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminChaFLLiEd = ({ chaFLs, setChaFLs }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [chaFLLiEd, setChaFLLiEd] = useState({
        image: '',
        title: '',
        content: ''
    });

    useEffect(() => {
        console.log("chaFLs 상태:", chaFLs);
        console.log("id:", id);

        if (Array.isArray(chaFLs) && chaFLs.length > 0) {
            const target = chaFLs.find(item => item.id === Number(id));
            if (target) {
                setChaFLLiEd(target);
            } else {
                console.warn("ID에 해당하는 데이터를 찾을 수 없습니다:", id);
            }
        }
    }, [chaFLs, id]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setChaFLLiEd(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setChaFLs(prev =>
            prev.map(item =>
                item.id === Number(id) ? chaFLLiEd : item
            )
        );
        navigate('/AdminChaFL');
    };

    return (
        <div>
            <h2>{chaFLLiEd.title} 명대사 수정</h2>
            <div>
                <label>성우 이미지 URL: </label>
                <input type="text" name="image" value={chaFLLiEd.image || ''} onChange={handleChange} />
            </div>
            <div>
                <label>제목: </label>
                <input type="text" name="title" value={chaFLLiEd.title || ''} onChange={handleChange} />
            </div>
            <div>
                <label>내용: </label>
                <input type="text" name="content" value={chaFLLiEd.content || ''} onChange={handleChange} />
            </div>
            <button onClick={handleSubmit}>저장하기</button>
        </div>
    );
};

export default AdminChaFLLiEd;
