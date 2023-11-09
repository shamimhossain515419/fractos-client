
'use client'
import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GetSingleUser, jwtSingUp } from '@/services/users';
import Cookies from 'js-cookie';
import app from '../../firebase/firebase.config';
import { GetSingleTeacher } from '@/services/teacher';
import { GetCourses } from '@/services/courses';
import { GetAllDetails } from '@/services/admin';
export const GlobalContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
//
const GlobalState = ({ children }) => {
     const [openModal, setOpenModal] = useState(false);
     const [loading, setLoading] = useState(true)
     const [user, setUser] = useState(null);
     const [Error, setError] = useState(false)
     const [AllCourses, setAllCourses] = useState(false)
     const [setIsAdmin, isAdmin] = useState(false)

     const [userinfo, setUserinfo] = useState(null)

     const [isUserModalOpen, setIsUserModalOpen] = useState(false);

     const [Open, setOpen] = useState(false);

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
     };

     const userCullaction = async (email) => {
          const result = await GetSingleUser(email);

          setUserinfo(result?.data)
     }
  
    const loginUser = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);
     }

     const logOutUser = () => {
          setLoading(true)
          return signOut(auth);
     }

     const googleSignIn = async () => {
          const data = await signInWithPopup(auth, googleProvider);
          return data;
     }
     //

     const JWTAuthorization = async (email) => {
          const result = await jwtSingUp(email);
          Cookies.set("token", result?.data?.token);

     }


     useEffect(() => {
          const getAll = async () => {
               const res = await GetAllDetails();

          }

          getAll();
     })


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
          };



     }, [])
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
          componentLevelLoader, setComponentLevelLoader,
          createUser, updateUserProfile,
          loginUser, logOutUser,
          googleSignIn, setIsAdmin, isAdmin,
          setIsUserModalOpen, isUserModalOpen,
          Open, setOpen,

          AllCourses


     }





     return (
          <div>
               <GlobalContext.Provider value={stateInfo}> {children} </GlobalContext.Provider>
          </div>
     );
};

export default GlobalState;