import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'  
const LoginScreen = () => {
    const Navigator = useNavigation()
    const MoveToHomeScreen = () => {
        Navigator.navigate('home')
    }
  return (
    <View style={  [tw `h-full bg-white `,{   }]}>
      <Text style={ tw ` text-xl font-bold text-center mt-8 `}>Bienvenue sur SaveYourTodo</Text>

      <Image style={  tw`h-64 w-64 self-center mt-35`}  source={ require("../assets/images/TodoIcon.png")} />
      <TouchableOpacity  activeOpacity={0.8} onPress={MoveToHomeScreen} style={ tw `flex items-center  justify-center bg-blue-400 h-17 w-64 self-center shadow rounded p-2`} >
       <Text style={ tw ` text-white font-bold text-lg ` }>se connecter avec google</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen