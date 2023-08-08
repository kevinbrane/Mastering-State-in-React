import CommunityUser from '../../Components/CommunityUser/CommunityUser';
import '../../Styles/CommunitySection.css'

export default function CommunitySection({ data }) {
  return (
    <div className='main'>
      <p className='main-section-title'>{data?.description}</p>
      <div className='cards-container'>
        {data?.map((user) => (
          <CommunityUser key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
