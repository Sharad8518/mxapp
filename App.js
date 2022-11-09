/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useState}from 'react';

import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import img from "./assest/food.jpg"
import mx from "./assest/Mx.png"
import Feather from 'react-native-vector-icons/Feather';
import { Checkbox } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';


const App =() => {
  const [checked, setChecked] = React.useState(false);

  const zoomOut = {
    1: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    0: {
      opacity: 0,
      scale: 0,
    },
  };

  return (
   <SafeAreaView style={{flex:1,}}>
  <StatusBar   
     backgroundColor = "#fff"  
     barStyle = "dark-content"   
  />  
    <ImageBackground  
    style={{flex:1}}
    source={img}
    >
<View style={{flex:1,margin:16,backgroundColor: 'rgba(270, 270, 270, 0.4)',borderRadius:10,borderColor:"#fff",borderWidth:2,}}>
  <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:30}}>
    <Animatable.View animation={zoomOut}>
<  Image source={mx}  style={{width:90,height:90}}/>
</Animatable.View>
<Text style={{fontWeight:"800",fontSize:17,color:"#000"}}>Welcome to mxwasl</Text>

<Text style={{fontWeight:"800",fontSize:19,color:"#000",marginTop:20,color:"#5f27cd"}}>Sign up</Text>
</View>

 <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:10,}}>
  <View style={{width:"90%",backgroundColor:"#fff",borderRadius:10,borderColor:"#000",borderWidth:2}}>
  <TextInput  placeholder='Enter your email/phone no' style={{marginLeft:5}}/>
  </View>
  <View style={{width:"90%",backgroundColor:"#fff",borderRadius:10,marginTop:10,borderColor:"#000",borderWidth:2,flexDirection:"row",justifyContent:"space-between"}}>
  <TextInput  placeholder='Enter your password' style={{marginLeft:5}}/>
   <Feather name="eye-off" size={20} style={{marginTop:13,marginRight:10}}/>
  </View>
 </View>

 <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>

   <View style={{marginLeft:22,flexDirection:"row"}}>
   <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{fontWeight:"700",fontSize:15,color:"#000",marginTop:6}}>Remember me</Text>
   </View>

   <View style={{marginRight:22}}>
    <Text style={{fontWeight:"700",fontSize:15,color:"#00a8ff",marginTop:6}}>Forget Password</Text>
   </View>
  </View>


  <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
  
  <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:120,backgroundColor:"#fff",height:45,marginLeft:20,borderRadius:10,elevation:5,borderColor:"#000",borderWidth:1}}>
    <Text style={{fontWeight:"700",color:"#bdc3c7"}}>Sign up</Text>
  </View>
  <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:120,backgroundColor:"#5f27cd",height:45,marginRight:20,borderRadius:10,elevation:5,borderColor:"#000",borderWidth:1}}>
    <Text style={{fontWeight:"700",color:"#fff"}}>Sign up</Text>
  </View>

  </View>

  <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
   <View style={{width:"30%",height:2,backgroundColor:"#000",marginLeft:20,marginTop:10}}>

   </View>

   <View>
    <Text style={{color:"#2f3640",fontWeight:"800"}}>Social Login</Text>
    </View>
    <View style={{width:"30%",height:2,backgroundColor:"#000",marginRight:20,marginTop:10}}>
    
    </View>

    </View>

   <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:10,}}>
   <View style={{backgroundColor:"#fff",height:45,width:"60%",borderRadius:10,flexDirection:"row"}}>

   <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"}}  style={{width:30,height:30,marginTop:7,marginLeft:10}}/>
   <Text style={{marginTop:12,marginLeft:10,color:"#000",fontWeight:"700"}}>Continue with Google</Text>
   </View>
   <Text style={{color:"#5f27cd",fontWeight:"800",marginTop:20}}>Continue as Guest</Text>

   </View>





</View>

    </ImageBackground>


   </SafeAreaView>
  );
};



export default App;
