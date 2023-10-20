
'use client'
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const GlobalContext = createContext(null);

// abdur rahman code
const auth = getAuth(app);
//
const GlobalState = ({ children }) => {

     const [openModal, setOpenModal] = useState(false);
     const [loading, setLoading] = useState(true)
     const [user, setUser] = useState(null);
     const [Error, setError] = useState(false)
     const [userinfo, setUserinfo] = useState(null)
     const [componentLevelLoader, setComponentLevelLoader] = useState({
          loading: false,
          id: "",
     });
     const [pageLoader, setPageLoader] = useState(false)


     //abdur rahman code
     const createUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password);
     }

     const updateUserProfile = (name, photo) => {
          setLoading(true);
          return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
     }

     const loginUser = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);
     }

     const logOutUser = () => {
          setLoading(true)
          return signOut(auth);
     }

     const googleSignIn = () => {
          return signInWithPopup(auth, googleProvider);
     }
     //



     const stateInfo = {
          openModal, setOpenModal,
          loading, setLoading,
          user, setUser,
          Error, setError,
          userinfo, setUserinfo,
          componentLevelLoader,
          setComponentLevelLoader,
          pageLoader, setPageLoader,
          createUser, updateUserProfile,
          loginUser, logOutUser,
          googleSignIn

     }



     // abdur rahman code
     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               console.log('current User: ', currentUser)
               setLoading(false)
          })
          return () => {
               return unsubscribe();
          }
     }, [])
     //

     return (
          <div>
               <GlobalContext.Provider value={stateInfo}> {children} </GlobalContext.Provider>
          </div>
     );
};

export default GlobalState;