import { View, Text ,TouchableOpacity ,FlatList } from 'react-native'
import React ,{useLayoutEffect} from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import UserInfo from '../components/UserInfo'

import {MaterialCommunityIcons }from '@expo/vector-icons'
import TodoListItem from '../components/TodoListItem'
import DataList from '../assets/data/TodoList'
const HomeScreen = () => {
  const Navigator = useNavigation()
  const OpenModal = () => {
Navigator.navigate('modal')
  }
  useLayoutEffect(() =>{
    
    Navigator.setOptions({
      headerLeftLabelVisible : false,
      headerRight : () => <UserInfo />
  })
  } ,[Navigator])

  return (
    <View style={ tw `bg-white h-full p-2 relative`}>
      <Text style={ tw `text-lg font-semibold `}>Voici les Todo listes</Text>
   
   {/* afficher des listes */}


<FlatList
showsVerticalScrollIndicator={false}
data={DataList}
style={tw `ml-1 flex-1 bg-white mt-8 w-full  ` }  
 renderItem={({item}) => <TodoListItem  key={item.id}  TodoInfo={item} /> }/>
     
     

      


<TouchableOpacity activeOpacity={0.7} onPress={OpenModal} style={ tw `flex justify-center items-center bg-blue-700 w-16 h-16 rounded-full absolute bottom-8 right-5`}>
  <MaterialCommunityIcons  name='plus' size={38} color="white" />
</TouchableOpacity>

    </View>
  )
}

export default HomeScreen