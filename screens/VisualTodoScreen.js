import { View, Text,TextInput ,StyleSheet ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {useNavigation} from '@react-navigation/native'

const VisualTodo = () => {
  const Navigator = useNavigation()
  const blue = "#3777f0"
  const red = "#de1738"
  const BackToHome = () =>{
      Navigator.goBack()
  }
  return (
    <View style={ tw `flex justify-center items-center h-full  bg-blue-50 `}>
    <View style={ tw ` bg-white shadow h-96 rounded-xl w-84 p-2 flex justify-center items-center relative`}   >
    <Text style={ tw `text-lg mb-7 font-bold mt-5`}>cdcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffff</Text>
        <View style={ tw `flex-row mt-4 `} >
            


{/* annuler */}
              <TouchableOpacity  activeOpacity={0.8} style={ [tw `mt-2 ml-2 bg-blue-700 p-2 w-36 rounded-full justify-center items-center bg-green-500`,{
    }]} > 
    <Text onPress={BackToHome}  style={ tw ` text-white  font-semibold text-lg`} >revenir</Text>
</TouchableOpacity>
</View>
    </View>
    </View>
  )
}

export default VisualTodo