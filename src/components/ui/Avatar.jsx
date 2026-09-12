import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native' 
import { theme } from '../../constants/theme'
import { Image } from 'expo-image';
import { hp } from '../../../helpers/common'
import { getUserImageSrc } from '../../../services/imageService';

const Avatar = ({
    url,
    size=hp(4.5),
    rounded=theme.radius.md,
    style={}
}) => {
  return (
   <Image
   source={getUserImageSrc(url)}
   transition={100}
   style={[styles.avatar, {height: size, width: size, borderRadius: rounded}, style]}
   />
  )
}

export default Avatar

const styles = StyleSheet.create({
    avatar:{
        borderCurves: 'continuous',
        borderColor: theme.colors.darkLight,
        borderWidth: 1
    }
})
 