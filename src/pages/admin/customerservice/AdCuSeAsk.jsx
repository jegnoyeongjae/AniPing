import { useState, useEffect } from "react";
import axios from "axios";
import { AdCSAskLi } from "../../../components/admin/customerservice";

const AdCuSeAsk = () => {
    const [userAsks, setUserAsks] = useState([]);
    const [ansTitles, setAnsTitles] = useState('');
    const [anses, setAnses] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/userAsk.json');
            const data = response.data.userAsk;
            setUserAsks(data);
            setAnsTitles(data.answerTitle);
            setAnses(data.answer);
        } catch (e) {
            console.error('데이터 로드에 실패했습니다.');
        }
    }



    return (
        <div id="AdCuSeAsk">
            <div className="inner">
                <ul>
                    <div>
                        <p></p>
                        <p>제목</p>
                        <p>글쓴이</p>
                        <p>문의일자</p>
                        <p>처리상태</p>
                    </div>
                    <div>
                        {userAsks.map((userAsk, idx) => (
                            <AdCSAskLi
                                key={userAsk.id}
                                userAsk={userAsk}
                                idx={idx}
                                ansTitles={ansTitles}
                                setAnsTitles={setAnsTitles}
                                anses={anses}
                                setAnses={setAnses}
                            />
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default AdCuSeAsk;