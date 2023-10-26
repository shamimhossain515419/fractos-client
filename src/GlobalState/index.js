
'use client'
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
<<<<<<< HEAD
=======
import jwt from "jsonwebtoken";
import { GetSingleUser, jwtSingUp } from '@/services/users';
import Cookies from 'js-cookie';
>>>>>>> 3dfa3cbf910decad1ef01fe0b37418f4ca7d8565


export const GlobalContext = createContext(null);

// abdur rahman code
const auth = getAuth(app);
//
const GlobalState = ({ children }) => {

     const [openModal, setOpenModal] = useState(false);
     const [loading, setLoading] = useState(true)
     const [user, setUser] = useState(null);
     const [Error, setError] = useState(false)
     const [setIsAdmin, isAdmin] = useState(false)
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
<<<<<<< HEAD
          return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
=======
          return updateProfile(auth.currentUser, {
               displayName: name, photoURL: photo
          })



     };

     const userCullaction = async (email) => {
          const result = await GetSingleUser(email)
          setUserinfo(result?.data)
>>>>>>> 3dfa3cbf910decad1ef01fe0b37418f4ca7d8565
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

<<<<<<< HEAD
=======
     const JWTAuthorization = async (email) => {
          const result = await jwtSingUp(email);
          Cookies.set("token", result?.data?.token);

     }


     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {


               if (currentUser) {
                    setUser(currentUser);
                    setLoading(false);
                    JWTAuthorization(currentUser?.email)
                    userCullaction(currentUser?.email)
               }
               console.log('current User: ', currentUser)

          })
          return () => {
               return unsubscribe();
          }
     }, [])
     //
>>>>>>> 3dfa3cbf910decad1ef01fe0b37418f4ca7d8565


     const stateInfo = {
          openModal, setOpenModal,
          loading, setLoading,
          user,
          Error, setError,
          userinfo, setUserinfo,
          componentLevelLoader,
          setComponentLevelLoader,
          pageLoader, setPageLoader,
          createUser, updateUserProfile,
          loginUser, logOutUser,
<<<<<<< HEAD
          googleSignIn
=======
          googleSignIn,
          setIsAdmin, isAdmin
>>>>>>> 3dfa3cbf910decad1ef01fe0b37418f4ca7d8565

     }



     // abdur rahman code
<<<<<<< HEAD
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
=======

>>>>>>> 3dfa3cbf910decad1ef01fe0b37418f4ca7d8565

     return (
          <div>
               <GlobalContext.Provider value={stateInfo}> {children} </GlobalContext.Provider>
          </div>
     );
};

export default GlobalState;