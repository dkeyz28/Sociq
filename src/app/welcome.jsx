import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import ScreenWrapper from '../components/ui/ScreenWrapper'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/ui/button';
import { useRouter } from 'expo-router';

const Welcome = () => {
    const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style='dark'/>
      <View style={styles.container}>
        {/* welcome image */}
        <Image style={styles.welcomeImage} resizeMode='contain'source={require('../../assets/images/welcome.png')} /> 

        {/* title */}
        <View style={{gap: 20}}>
          <Text style={styles.title}>Sociq!</Text>
          <Text style={styles.punchLine}>
            Where every thought finds a home and every image tells a story 
          </Text>
        </View>

        {/*footer*/}
        <View style={styles.footer}>
          <Button 
            title='Getting Started'
            buttonStyle={{marginHorizontal: wp(3)}}
            onPress={()=> router.push('signUp')}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>
              Already have an account!
            </Text>
            <Pressable onPress={()=> router.push('login')}>
              <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingHorizontal: wp(4),
    },
    welcomeImage:{
      width: wp(100),
      height:hp(60),
      alignSelf: 'center', 
    },
    title: {
      color: theme.colors.text,
      fontSize: hp(4),
      textAlign: 'center',
      fontWeight: theme.fonts.bold
    },
    punchLine: {
      textAlign: 'center',
      paddingHorizontal:wp(0),
      fontSize: hp(1.7),
      color: theme.colors.text
    },
    footer: {
      gap:30,
      width: '100%'
    },
    bottomTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5
    },
    loginText: {
      textAlign: 'center',
      color: theme.colors.text,
      fontSize: hp(1.6)
    }
})
