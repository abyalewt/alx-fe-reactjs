import { useContext } from 'react';
import UserContext from '../UserContext';  // go up one level to src/

function UserProfile() {
    const userData = useContext(UserContext);

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserProfile;