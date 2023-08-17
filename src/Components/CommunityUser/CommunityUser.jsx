import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../../Styles/CommunityUser.css';
import PageNotFound from '../../Components/PageNotFound/PageNotFound';

export default function CommunityUser({ user }) {
  const { id } = useParams();
  const [userData, setUserData] = useState(user);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id && !user) {
      axios.get(`http://localhost:3000/community/${id}`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(err => {
          console.log('Error getting data:', err);
          setError(err);
        });
    }
  }, [id, user]);

  const renderUserData = () => (
    <div className='card-component'>
      <img src={userData?.avatar} alt="" />
      <p>{userData?.testimony}</p>
      {userData?.firstName && userData?.lastName && 
        <Link to={`/community/${userData?.id}`} className="link-name">
          {userData?.firstName} <br /> {userData?.lastName}
        </Link>
      }
      <span>{userData?.position}</span>
    </div>
  );

  return userData ? renderUserData() : <PageNotFound />;
}


