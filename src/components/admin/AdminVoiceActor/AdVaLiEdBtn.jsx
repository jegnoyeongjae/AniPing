import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AdVaLiEdBtn = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = id !== undefined;

    const [formData, setFormData] = useState({
        rank: '',
        image: '',
        name: '',
        birth: '',
        stature: '',
        blood: '',
        agency: '',
        profile: '',
        aniList: [],
        aniimage: []
    });

    useEffect(() => {
        if (isEditing) {
            fetchData();
        }
    }, [id, isEditing]);

    const fetchData = async () => {
        try {
            const [mainResponse, detailResponse] = await Promise.all([
                axios.get('/data/adminChaCVLi.json'),
                axios.get('/data/adminVoiceActor.json')
            ]);

            const mainData = mainResponse.data;
            const detailData = detailResponse.data;

            const foundMain = mainData.find(actor => actor.id === Number(id));
            const foundDetail = detailData.find(vC => vC.id === Number(id));

            if (foundMain && foundDetail) {
                setFormData({
                    rank: foundMain.rank,
                    image: foundMain.image,
                    name: foundDetail.name,
                    birth: foundDetail.birth,
                    stature: foundDetail.stature,
                    blood: foundDetail.blood,
                    agency: foundDetail.agency,
                    profile: foundDetail.profile,
                    aniList: foundDetail.aniList,
                    aniimage: foundMain.aniimage
                });
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleAniListChange = (index, e) => {
        const { name, value } = e.target;
        const newAniList = [...formData.aniList];
        newAniList[index] = { ...newAniList[index], [name]: value };
        setFormData(prevData => ({ ...prevData, aniList: newAniList }));
    };

    const addAniItem = () => {
        setFormData(prevData => ({
            ...prevData,
            aniList: [...prevData.aniList, { aniImg: '', aniTitle: '', aniname: '' }]
        }));
    };

    const removeAniItem = (index) => {
        const newAniList = formData.aniList.filter((_, i) => i !== index);
        setFormData(prevData => ({ ...prevData, aniList: newAniList }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            alert("수정되었습니다.");
            navigate(`/AdminVALiEd/${id}`);
        } else {
            const newId = Date.now(); 
            const newVoiceActor = { ...formData, id: newId };
            alert("추가되었습니다.");
            navigate(`/AdminVA`);
        }
    };

    return (
        <div id="AdVaLiEdBtn">
            <h2>{isEditing ? `${formData.name} 정보 수정` : '새로운 성우 추가'}</h2>
            <form >
                <div>
                    <label>순위: </label>
                    <input type="number" name="rank" value={formData.rank} onChange={handleChange} />
                </div>
                <div>
                    <label>성우 이미지 URL: </label>
                    <input type="text" name="image" value={formData.image} onChange={handleChange} />
                </div>
                <div>
                    <label>이름: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>생년월일: </label>
                    <input type="text" name="birth" value={formData.birth} onChange={handleChange} />
                </div>
                <div>
                    <label>신장: </label>
                    <input type="text" name="stature" value={formData.stature} onChange={handleChange} />
                </div>
                <div>
                    <label>혈액형: </label>
                    <input type="text" name="blood" value={formData.blood} onChange={handleChange} />
                </div>
                <div>
                    <label>소속사: </label>
                    <input type="text" name="agency" value={formData.agency} onChange={handleChange} />
                </div>
                <div>
                    <label>프로필: </label>
                    <textarea name="profile" value={formData.profile} onChange={handleChange}></textarea>
                </div>

                <h3>참여 작품 {isEditing ? '수정' : '추가'}</h3>
                {formData.aniList.map((item, index) => (
                    <div key={index} className="ani-item">
                        <label>작품 이미지 URL: </label>
                        <input
                            type="text"
                            name="aniImg"
                            value={item.aniImg}
                            onChange={(e) => handleAniListChange(index, e)}
                        />
                        <label>작품 제목: </label>
                        <input
                            type="text"
                            name="aniTitle"
                            value={item.aniTitle}
                            onChange={(e) => handleAniListChange(index, e)}
                        />
                        <label>배역 이름: </label>
                        <input
                            type="text"
                            name="aniname"
                            value={item.aniname}
                            onChange={(e) => handleAniListChange(index, e)}
                        />
                        <button type="button" onClick={() => removeAniItem(index)}>삭제</button>
                    </div>
                ))}
                <button type="button" onClick={addAniItem}>작품 추가</button>

                <button type="submit">{isEditing ? '수정 완료' : '추가하기'}</button>
            </form>
        </div>
    );
};

export default AdVaLiEdBtn;