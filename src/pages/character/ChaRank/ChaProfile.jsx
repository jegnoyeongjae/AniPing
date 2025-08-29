import './ChaProfile.css';

const ChaProfile = ({ data }) => {
  const { profile } = data;
  return (
    <div className="Profile">
      <div className="profileContent">
        <h2>프로필</h2>
        <span>{profile}</span>
      </div>
    </div>
  );
};
export default ChaProfile;
