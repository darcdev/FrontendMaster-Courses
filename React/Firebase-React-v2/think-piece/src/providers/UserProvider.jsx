import React, { createContext, useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../firebase";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        return userRef.onSnapshot((snapshot) => {
          setUser({ uid: snapshot.id, ...snapshot.data() });
        });
      }
      setUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
