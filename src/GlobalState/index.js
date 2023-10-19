
'use client'
import React, { createContext, useState } from 'react';
export const GlobalContext = createContext(null);
const GlobalState = ({children}) => {

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



     const stateInfo = {
          openModal, setOpenModal,
          loading, setLoading,
          user, setUser,
          Error, setError,
          userinfo, setUserinfo,
          componentLevelLoader,
          setComponentLevelLoader,
          pageLoader, setPageLoader
     }

     return (
          <div>
               <GlobalContext.Provider value={stateInfo}> {children} </GlobalContext.Provider>

          </div>
     );
};

export default GlobalState;