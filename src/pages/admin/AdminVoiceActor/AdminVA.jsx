import axios from "axios";
import { useState, useEffect } from "react";

import { AdminVALi } from "../../../components/admin/AdminVoiceActor";

const AdminVA = () => {
    const [vCLists, setVCLists] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/adminChaCVLi.json');
            const data = response.data;
            setVCLists(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div id="AdminVA">
            <div className="inner">
                <ul>
                    <p>순위</p>
                    <p>성우</p>
                    <p>최근 참여작품</p>
                </ul>
                <ul>
                    {vCLists.map(vCList =>(
                        <AdminVALi
                            vCList={vCList}
                            key={vCList.id}
                        /> 
                    ))}
                </ul>
                <button>추가하기</button>
            </div>
        </div>
    )
}

export default AdminVA;