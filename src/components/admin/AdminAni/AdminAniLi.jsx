import { useNavigate } from "react-router-dom";

const AdminAniLi = ({ani}) => {
    const navigate = useNavigate();

    const handleLiClick = () => {
        navigate(`/AdminAniLiEd/${ani.id}`)
    }
    return(
        <li id="AdminAniLi">
            <h3 onClick={handleLiClick}>{ani.title}</h3>
        </li>
    )
}

export default AdminAniLi;