import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper  from "../components/ui/ScreenWrapper";
import React from "react";
import Loading from '../components/Loading'

const Index = () => {
  const router = useRouter();
  return (
   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Loading />
   </View>
  );
};

export default Index;