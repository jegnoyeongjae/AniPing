import { useState, useEffect } from "react";
import axios from "axios";

import { AdminAniLi } from "../../../components/admin/AdminAni";

const AdminAni = () => {
    const [anis, setAnis] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/animeInfoData.json');
            const data = response.data;
            setAnis(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div id="AdminAni">
            <div className="inner">
                <h2>애니 리스트</h2>
                <ul>
                    {anis.map(ani =>
                        <AdminAniLi
                            ani={ani}
                            key={ani.id}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default AdminAni;