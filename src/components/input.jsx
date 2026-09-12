import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { theme } from '../constants/theme'
import { hp, wp } from '../../helpers/common'


const input = (props) => {
  return (
    <View style={[styles.container, props.containerStyle && props.containerStyle ]}>
        {
            props.icon && props.icon
        }
        <TextInput
          style={{flex: 1, outlineStyle: 'none'}}
          placeholderTextColor={theme.colors.textLight}
          {...props}
          placeholder={props.placeholder}
         onChangeText={value => {
          if (props.inputRef) props.inputRef.current = value;
          if (props.onChangeText) props.onChangeText(value);
         }}
      />
    </View>
  )
}

export default input;

const styles = StyleSheet.create({
       container: {
        flexDirection: 'row',
        height: hp(7.2),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderCurve: 'continuous',
        paddingHorizontal: 18,
        gap: 12
    },
});
