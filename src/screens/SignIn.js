import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Mink from '../../assets/Mink.svg';

import {
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {authSelector, registerUser} from '../slices/Authslice';

import 'firebase/compat/auth';
import {useSelector, useDispatch} from 'react-redux';
import {
  setDetails,
  setToken,
  setJWT,
  setAppUrl,
  setLeavetype,
  setLeavelist,
  setTaskList,
  setAnnoucementList,
  setTaskReport,
  setEventsList,
} from '../redux/actions/useractions';

const SignIn: () => Node = ({navigation}) => {
  const {userData} = useSelector(authSelector);
  console.log('aaaaaaaaaaaaaaaaa', userData);
  const dispatch = useDispatch();
  const [loggedIn, setloggedIn] = useState(false);
  const [firebaseUserData, setFirebaseUserData] = useState({
    name: '',
    email: '',
    firebase_token: '',
  });

  GoogleSignin.configure({
    webClientId:
      '1040528052761-t3f42v2jiccs82j283v62grsvc1l7hg3.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential')
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in.then((user)=>{
    
      setFirebaseUserData({
        name: user.additionalUserInfo.profile.name,
        email: user.additionalUserInfo.profile.email,
        firebase_token: idToken
      })
     
      
  })
}

  useEffect(()=>{

  if(firebaseUserData.firebase_token){
    dispatch(registerUser(firebaseUserData)).then((data)=>{
      alert("sfusydfh")
   console.log("bbbbbbbbbbbbbbbbbb",data.payload.data)
   if(data.payload.data){
    navigation.navigate('Dashboard');
   }
    })
  }
  },[firebaseUserData])
  console.log('mmmmmmmmmmmmmmmmmmmm', firebaseUserData, loggedIn);
  return (
    <View
      style={{
        height: 800,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#38A1F2',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Mink width={400} height={100} />
      </View>
      <View
        style={{
          marginTop: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            fontFamily: 'Proxima Nova',
            color: '#fff',
          }}>
          SIGN UP
        </Text>
        <Text style={{fontSize: 16, fontFamily: 'Proxima Nova', color: '#fff'}}>
          Create an account to start using Mink
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <GoogleSigninButton
          style={{width: 280, height: 60}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={() => signInWithGoogleAsync()}
        />
      </View>
    </View>
  );
};

export default SignIn;
