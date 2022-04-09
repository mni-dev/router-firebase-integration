import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    // const {user} = useFirebase();
    return (
        <div>
            <h2>This is Home</h2>
            <h2>Current user: {user ? user.displayName : 'no body'}</h2>
        </div>
    );
};

export default Home;