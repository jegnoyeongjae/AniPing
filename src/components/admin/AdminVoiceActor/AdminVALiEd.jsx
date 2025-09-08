import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminVALiEd = () => {
    const { id } = useParams();
    const [voiceActor, setVoiceActor] = useState(null);
    const [vADetail, setVADetail] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        fetchVoiceActorData();
    }, [id]);

    const fetchVoiceActorData = async () => {
        try {
            const [mainResponse, detailResponse] = await Promise.all([
                axios.get('/data/adminChaCVLi.json'),
                axios.get('/data/adminVoiceActor.json')
            ]);

            const mainData = mainResponse.data;
            const detailData = detailResponse.data;

            const foundActor = mainData.find(actor => actor.id === Number(id));
            setVoiceActor(foundActor);

            const foundDetail = detailData.find(vC => vC.id === Number(id));
            setVADetail(foundDetail);
        } catch (e) {
            console.error(e);
        }
    };

    if (!voiceActor || !vADetail) {
        return <div>로딩 중...</div>;
    }

    const handleEditClick = () => {
        navigate(`/Adedit/${voiceActor.id}`);
    }

    return (
        <div id="AdminVALiEd">
            <h2>{vADetail.name} 상세 정보 및 수정</h2>
            <div>
                <p>순위: {voiceActor.rank}</p>
                <img src={voiceActor.image} alt={voiceActor.name} />
                <div>
                    <div>
                        <p>생년월일 : {vADetail.birth}</p>
                        <p>신장 : {vADetail.stature}</p>
                        <p>혈액형 : {vADetail.blood}</p>
                        <p>소속사 : {vADetail.agency}</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>프로필</h3>
                <p>{vADetail.profile}</p>
            </div>
            <div>
                {vADetail.aniList.map((vADeta, idx) => (
                    <div key={idx} >
                        <img src={vADeta.aniImg} />
                        <p>{vADeta.aniTitle}</p>
                        <p>{vADeta.aniname}</p>
                    </div>
                ))}
            </div>
            <div>
                <h3>최근 참여 작품</h3>
                <p>
                    {voiceActor.aniimage.map((aniImg, index) => (
                        <img key={index} src={aniImg} alt={`${voiceActor.name} 작품 이미지 ${index + 1}`} />
                    ))}
                </p>
            </div>
            <button onClick={handleEditClick}>수정</button>
        </div>
    );
};

export default AdminVALiEd;