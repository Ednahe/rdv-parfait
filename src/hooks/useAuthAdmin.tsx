import { useEffect, useState, createContext, useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
  onAuthStateChanged,
  User,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/dbConfig";

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     setLoading(true);
  //     try {
  //       // Vérifie si une redirection a renvoyé un utilisateur
  //       const result = await getRedirectResult(auth); // Vérification de la redirection
  //       if (result) {
  //         const loggedInUser = result.user;
  //         setUser(loggedInUser); // Mise à jour de l'état avec l'utilisateur

  //         // Vérifie si l'utilisateur est administrateur
  //         const userDoc = await getDoc(doc(db, "users", loggedInUser.uid));
  //         setIsAdmin(userDoc.exists() && userDoc.data()?.isAdmin === true);
  //       }
  //     } catch (error) {
  //       console.error("Erreur de récupération de l'utilisateur :", error);
  //     }
  //     setLoading(false);
  //   };

  //   checkAuth(); // Appel de la fonction pour vérifier l'authentification
  // }, [auth]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      setUser(currentUser);
  
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        setIsAdmin(userDoc.exists() && userDoc.data()?.isAdmin === true);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, [auth]);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
      // const loggedInUser = result.user;
      // setUser(loggedInUser);

      // // Vérifier si l'utilisateur est administrateur
      // const userDoc = await getDoc(doc(db, "users", loggedInUser.uid));
      // setIsAdmin(userDoc.exists() && userDoc.data()?.isAdmin === true);
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error("Erreur de déconnexion :", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthAdmin = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
};
