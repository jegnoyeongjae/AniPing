import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminAniLiEd = () => {
    const { id } = useParams();
    const [thisAni, setThisAni] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/animeInfoData.json');
            const data = response.data.find(item => item.id === Number(id))
            setThisAni(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div id="AdminAniLiEd">
            <div>
                <p>제목 : {thisAni.title}</p>
                <p>첨부파일 : <img src={thisAni.infoImg}></img></p>
                <p>감독 : {thisAni.director}</p>
                <p>스튜디오 : {thisAni.studio}</p>
                <p>장르 : {thisAni.genre}</p>
                <p>방영일 : {thisAni.airDate}</p>
                <p>연령 : {thisAni.rating}</p>

            </div>
        </div>
    )
}

export default AdminAniLiEd;