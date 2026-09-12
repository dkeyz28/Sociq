import React from 'react'
import { useState, useEffect} from 'react'
import { Platform, Alert, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native'
import Screenwrapper  from "../../components/ui/ScreenWrapper"
import { hp, wp } from '../../../helpers/common'
import { theme } from '../../constants/theme'
import Header from '../../components/Header'
import { Image } from 'expo-image'
import Input from '../../components/input'
import Icon from '../../../assets/icons'
import { useAuth } from '../../../constants/AuthContext'
import Button from '../../components/ui/button'
import { updateUser } from '../../../services/userService'
import { getUserImageSrc } from '../../../services/imageService'
import { useRouter } from 'expo-router'
import * as ImagePicker from 'expo-image-picker'

const EditProfile = () => {

    const{user: currentUser, setUserData}= useAuth();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    const [user, setUser] = useState({
        name: '',
        phoneNumber: '',
        image: null,
        bio: '',
        address: ''
    });
    useEffect(()=>{
        if(currentUser){
            setUser({
                name: currentUser.name || '',
                phoneNumber: currentUser.phoneNumber || '',
                image: currentUser.image || null,
                address: currentUser.address || '',
                bio: currentUser.bio || '',
            });
        }
    }, []);

    const onPickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
        });

        if (!result.cancelled && result.assets && result.assets.length > 0){
            setUser({...user, image: result.assets[0].uri});
        }
    }

   

    const onSubmit = async ()=>{
        let userData = {...user};
        let {name, phoneNumber, address, image, bio} = userData;
        if (!name|| !phoneNumber || !address || !bio || !image){
            if (Platform.OS === 'web') {
                alert("Profile: Please fill all the fields");
            } else {
            Alert.alert('Profile', "please fill all the fields");
            }
            return;
        }
        setLoading(true);

        if(typeof image == 'object'){
            //upload Image 
        }
        // update user
        const res = await updateUser(currentUser?.id, userData);
        setLoading(false);
        if(res.success){
            setUserData(res.data || userData);

            router.back();
        }else{
        console.error('Failed to update profile: ', res.msg);
        }
    };
    
    let imageSource = user?.image
    ? (typeof user.image === 'object'? user.image.url : { uri: user.image}) : getUserImageSrc(user?.image);
    
  return (
    <Screenwrapper bg='white'>
     <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
            <Header title="Edit Profile"/>

            {/* form */}
            <View style={styles.form}>
                <View style={styles. avatarContainer}>
                    <Image source={imageSource} style={styles.avatar}/>
                    <Pressable style={styles.cameraIcon} onPress={onPickImage}> 
                        <Icon name='camera' size={20} strokeWidth={2.5}/>
                    </Pressable>
                </View>
                <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
                    Please fill your profile details
                </Text>
                <Input
                   icon={<Icon name="user"/>}
                   placeholder='Enter your name'
                   value={user.name}
                   onChangeText={value=> setUser({...user, name: value})}
                   />
                    <Input
                   icon={<Icon name="call"/>}
                   placeholder='Enter your phone number'
                   value={user.phoneNumber}
                   onChangeText={value=> setUser({...user, phoneNumber: value})}
                   />
                    <Input
                   icon={<Icon name="location"/>}
                   placeholder='Enter your address'
                   value={user.address}
                   onChangeText={value=> setUser({...user, address: value})}
                   />
                    <Input
                   placeholder='Enter your bio'
                   value={user.bio}
                   multiline={true}
                   containerStyle={styles.bio}
                   onChangeText={value=> setUser({...user, bio: value})}
                   />

                   <Button title="Update" loading={loading} onPress={onSubmit} />
            </View>
        </ScrollView>
     </View>
    </Screenwrapper>
  )
};

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    avatarContainer: {
        height: hp(14),
        width: hp(14),
        alignSelf: 'center'
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: theme.radius.xxl*1.0,
        borderCurves: 'continuous',
        borderWidth: 1,
        borderColor: theme.colors.darkLight
    },
    cameraIcon:{
        position: 'absolute',
        bottom: 0,
        right: -10,
        padding: 8,
        borderRadius: 50,
        backgroundColor: 'white',
        shadowColor: theme.colors.textLight,
        shadowOffset: {width:0, height:4 },
        shadowOpacity: 0.4,
        shadowRadius:5,
        elevation:7
    },
    form: {
        gap:10,
        marginTop:20,
    },
    input: {
        flexDirection: 'row',
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderCurve: 'continuous',
        padding: 17,
        paddingHorizontal: 20,
        gap: 15
    },
    bio: {
        flexDirection: 'row',
        height: hp(15),
        alignItems: 'flex-start',
        paddingVertical: 15
    }
})
