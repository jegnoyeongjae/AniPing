import "./AniDetail.css"
import { AniCha,AniComment,AniInfo,AniPv,AniTag } from "../../components/anime"

const AniDetail = ()=>{
  return(
    <div className="ani-detail-container">
      <AniCha />
      <AniComment />
      <AniTag />
      <AniInfo />
      <AniPv />
    </div>
  )
}


export default AniDetail;