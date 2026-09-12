import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Stack } from 'expo-router';
import Screenwrapper  from "../components/ui/ScreenWrapper";
import { AuthProvider, useAuth } from '../../constants/AuthContext';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'expo-router';
import { hp, wp } from '../../helpers/common'
import { getUserData } from  '../../services/userService'

const layout = ()=>{
  return(
    <AuthProvider>
      <MainLayout/>
    </AuthProvider>
  )
}
const MainLayout = () => {
  const {setAuth, setUserData} = useAuth();
  const router = useRouter();

  const updateUserdata = async (user) => {
    let res = await getUserData(user?.id);
    if (res.success) {
      setUserData({
        ...res.data.name|| user?.user_metadata?.name || user?.user_metadata?.full_name,
      email: user?.email || res.data?.email,
      });
    }
  };

  useEffect(()=>{
    supabase.auth.onAuthStateChange((_event, session) =>{
      // console.log('session user', session?.user?.id)

      if(session){
        setAuth(session?.user);
        updateUserdata(session?.user );
        router.replace('/main/home')

      }else{
       setAuth(null);
        router.replace('/welcome')
      }
    })
  }, []);

  const  updateUserData = async (user, email)=>{
    let res = await getUserData(user?.id);
   if(res.success); setUserData({...res.data, email});
  }
  return (
    <Stack
       screenOptions={{
        headerShown: false
       }}
    />
  );
}

export default layout
