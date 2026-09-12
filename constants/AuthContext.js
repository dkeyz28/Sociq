import { createContext, useState, useContext, useEffect } from "react"
import { supabase } from "../lib/supabase"

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);

    const setAuth = authUser=> {
        setUser(authUser);
    };

    const setUserData = (userData) => {
        setUser((prev) => ({
            ...prev,
            ...userData,
            email: prev?.email || userData?.email, 
        }));
    };
    useEffect(()=>{
        const getUserData = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (session?.user){
                const { data: profile } = await supabase
                .from('Users')
                .select('*')
                .eq('id', session.user.id)
                .single();

                setUser ({ 
                    ...session.user,
                    ...profile, 
                    email: session.user.email,
                 });
            } else {
                setUser(null);
            }
        };

        getUserData();

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) =>{
            if (session) {
                getUserData();
            } else {
                setUser(null);
            }
       });

        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{user, setAuth,setUserData}}>
          {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)