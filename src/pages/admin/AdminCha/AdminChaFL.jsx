import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AdminChaFLLi, AdminChaFLLiEd } from "../../../components/admin/AdminCha";

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
        navigate('/AdminChaFL/new');
    };

    const handleEditClick = (id) => {
        navigate(`/AdminChaFL/edit/${id}`);
    };

    return (
        <div id="AdminChaFL">
            <div className="inner">
                <h2>명대사</h2>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ul>
                                    {chaFLs.map(chaFl => (
                                        <AdminChaFLLi
                                            key={chaFl.id}
                                            chaFl={chaFl}
                                            onEditClick={() => handleEditClick(chaFl.id)}
                                        />
                                    ))}
                                </ul>
                                <button onClick={handleNClick}>추가하기</button>
                            </>
                        }
                    />
                    <Route
                        path="edit/:id"
                        element={<AdminChaFLLiEd chaFLs={chaFLs} setChaFLs={setChaFLs} />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default AdminChaFL;
