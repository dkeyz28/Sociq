import React from 'react'
import {Button, Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import Screenwrapper  from "../../components/ui/ScreenWrapper";
import { useAuth } from '../../../constants/AuthContext'
import { supabase } from '../../../lib/supabase'
import { hp, wp } from '../../../helpers/common'
import { theme } from '../../constants/theme'
import Icon from '../../../assets/icons'
import { useRouter } from 'expo-router'
import Avatar from "../../components/ui/Avatar"

const home = () => {

  const {user, setAuth} = useAuth();
  console.log('user: ', user);
  const router = useRouter();

  // const onLogout = async ()=>{
  //   const {error} = await supabase.auth.signOut();
  //   if(error){
  //     Alert.alert('Sign out', 'Error signing out!')
  //   }
  // };
  return (
    <Screenwrapper bg='white'>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.title}>Sociq</Text>
          <View style={styles.icons}>
            <Pressable onPress={() => router.push('main/notifications')}>
              <Icon name='heart' size={hp(3.8)} strokeWidth={2} color={theme.colors.text}/>
            </Pressable>
            <Pressable onPress={() => router.push('main/newPost')}>
              <Icon name='plus' size={hp(3.8)} strokeWidth={2} color={theme.colors.text}/>
            </Pressable>
            <Pressable onPress={() => router.push('main/profile')}>
              <Avatar 
                url={user?.image}
                size={hp(4.3)}
                rounded={theme.radius.sm}
                style={{borderWidth: 2}}
              />
            </Pressable>
          </View>
       </View>
      </View>
      {/* <Button title='logout' onPress={onLogout} /> */}
    </Screenwrapper>
  )
};

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddiingHorizontal: wp(4)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: wp(4)
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(3.5),
    fontWeight: theme.fonts.bold
  },
  avatarImage: {
    height: hp(4.3),
    width: hp(4.3),
    borderRadius: theme.radius.sm,
    borderCurve:'continous',
    borderColor: theme.colors.gray,
    borderWidth: 3
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },
  listStyle: {
    paddingTop: 20,
    paddiingHorizontal: wp(4)
  },
  noPosts: {
    fontSize: hp(2),
    textAlign: 'center',
    color: theme.colors.texts
  },
  pill: {
    position: 'absolute',
    right: -10,
    top: -4,
    height: hp(2.2),
    width: hp(2.2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: theme.colors.roseLight
  },
  pillText: {
    color: 'white',
    fontSize:hp(1.2),
    fontWeight: theme.fonts.bold
  }

})
