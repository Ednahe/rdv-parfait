import { useEffect, useState, createContext, useContext } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
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

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(false);

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(true);

            if (currentUser) {
                const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                setIsAdmin(userDoc.exists() && userDoc.data()?.isAdmin === true);
            } else {
                setIsAdmin(false);
            }
            setLoading(false);
    });
    return () => unsubscribe();
}, [auth]);

const login = async () => {
    // implémenter la logique de connexion
  };

  const logout = async () => {
    await auth.signOut();
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthAdmin = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useAuth doit être utilisé dans un AuthProvider");
    }
    return context;
}