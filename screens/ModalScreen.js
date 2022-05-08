import { View, Text,TextInput ,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {useNavigation} from '@react-navigation/native'
const ModalScreen = () => {
    const Navigator = useNavigation()
    const blue = "#3777f0"
    const red = "#de1738"
    const BackToHome = () =>{
        Navigator.goBack()
    }
  return ( 
    <View style={ tw `flex justify-center items-center h-full  bg-blue-50 `}>
    <View style={ tw ` bg-white shadow h-54 rounded-xl w-84 p-2 flex justify-center items-center`}   >
    <Text style={ tw `text-lg mb-7 font-bold`}>Titre de votre liste de taches</Text>
    <View style={styles.inputContainer}>
          <TextInput style={styles.input}  
 
          placeholder="entrer quelquechose..."
          />
    
        </View>
        <View style={ tw `flex-row mt-4 `} >
            
              <TouchableOpacity  activeOpacity={0.8} style={ [tw `mt-2 bg-blue-700 p-2 w-36 rounded-full justify-center items-center`,{
      backgroundColor : blue
    }]} > 
    <Text style={ tw ` text-white  font-semibold text-lg`} >sauvergarder</Text>
</TouchableOpacity>

{/* annuler */}
              <TouchableOpacity  activeOpacity={0.8} style={ [tw `mt-2 ml-2 bg-blue-700 p-2 w-36 rounded-full justify-center items-center`,{
      backgroundColor : red
    }]} > 
    <Text onPress={BackToHome}  style={ tw ` text-white  font-semibold text-lg`} >annuler</Text>
</TouchableOpacity>
</View>
    </View>
    </View>
  )
}

export default ModalScreen

const styles = StyleSheet.create({
    root :{
   flexDirection : 'row',
   padding: 10
    },
    inputContainer :{
    backgroundColor : '#f2f2f2',
    borderRadius: 25,
    borderWidth: 1,
    flexDirection : 'row',
    borderColor : '#dedede',
    alignItems : 'center',
    padding: 5
    },
    buttonContainer :{
      width : 40,
      height: 40,
      backgroundColor :  "#3777f0",
      borderRadius : 25,
      justifyContent : 'center',
      alignItems : 'center'
    },
    buttonText :{
       color : 'white',
       fontSize: 25
    },input :{
      flex : 1,
      marginHorizontal : 5
    },
    icon :{
      marginHorizontal : 5
    }
  })