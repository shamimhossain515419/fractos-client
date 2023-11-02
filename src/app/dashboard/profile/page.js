import UserProfile from '@/Components/UserProfile/UserProfile';
import React from 'react';
export const generateMetadata = async () => {

     return {
          title: ` Profile `
     }
}

const Profile = () => {
     return (
          <div>
               <div className="py-10">
                    <UserProfile></UserProfile>
               </div>
          </div>
     );
};

export default Profile;