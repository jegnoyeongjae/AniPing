import { useNavigate } from "react-router-dom";

const AdminVALi = ({ vCList }) => {
    const navigate = useNavigate();


    const handleEditClick = () => {
        navigate(`/AdminVALiEd/${vCList.id}`);
    }

    return (
        <li id="AdminVALi">
            <p>{vCList.rank}</p>
            <div>
                <p><img src={vCList.image} alt={vCList.title} /></p>
                <p>{vCList.name}</p>
            </div>
            <p>
                {vCList.aniimage.map((vCLi, index) =>
                    <img key={index} src={vCLi} alt={vCList.title} />)}
            </p>
            <button onClick={handleEditClick}>상세</button>
            <button>수정</button>
        </li>
    )
}

export default AdminVALi;