import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Styles/CommunityUser.css'
import PageNotFound from '../../Components/PageNotFound/PageNotFound';

export default function CommunityUser({ user }) {
  const { id } = useParams();
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    if (id && !user) {
      axios.get(`http://localhost:3000/community/${id}`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.log('Error getting data:', error);
        });
    }
  }, [id, user]);

  return (
    userData ? 
    <div className='card-component'>
      <img src={userData?.avatar} alt="" />
      <p>{userData?.testimony}</p>
      {userData?.firstName && userData?.lastName && <Link to={`/community/${userData?.id}`} className="link-name">{userData?.firstName} <br /> {userData?.lastName}</Link>}
      <span>{userData?.position}</span>
    </div>
    :
    <div>
        <PageNotFound />
    </div>
  )
}


