import { View, Text,TextInput ,StyleSheet ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {useNavigation} from '@react-navigation/native'
import { useToast } from "react-native-toast-notifications";
const AddTodo = () => {
  const toast = useToast();
  const Navigator = useNavigation()
  const blue = "#3777f0"
  const red = "#de1738"
  const BackToHome = () =>{
      Navigator.goBack()
  }
  const saveNewTodo = () => {
    Navigator.goBack()
    toast.show(" tache enregistrée avec succés",{
      type : 'success',
   duration: 1500,
   offset: 30,
  animationType: "slide-in"
    })

  }
  return (
    <View style={ tw `flex justify-center items-center h-full  bg-blue-50 `}>
    <View style={ tw ` bg-white shadow h-96 rounded-xl w-84 p-1 flex justify-center items-center relative`}   >
<Image  style={ tw ` h-26 w-26 rounded-full bg-red-200 mb-8 absolute top-3`} source={{ uri : 'https://media.istockphoto.com/photos/tablet-with-paper-clip-todo-list-3d-illustration-3d-rendering-picture-id1285082518?b=1&k=20&m=1285082518&s=170667a&w=0&h=b-ByZ7VS2dnHJRvHUBxdp1qLoeNz_XVBGQK7X8eXgGU='}} />
    <Text style={ tw `text-lg mb-7 font-bold mt-5`}>Titre de la tache a effectuée</Text>
    <View style={styles.inputContainer}>
          <TextInput style={styles.input}  
 
          placeholder="entrer quelquechose..."
          />
    
        </View>
        <View style={ tw `flex-row mt-4 `} >
            
              <TouchableOpacity onPress={saveNewTodo}  activeOpacity={0.8} style={ [tw `mt-2 bg-blue-700 p-2 w-36 rounded-full justify-center items-center`,{
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

export default AddTodo

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