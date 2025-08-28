import './ChaProfile.css';

const ChaProfile = ({ data }) => {
  const { profile } = data;
  return <div className="ChaProfile">{profile}</div>;
};
export default ChaProfile;
