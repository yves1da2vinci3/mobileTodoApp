import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import tw from 'twrnc'
import TodoItem from '../components/TodoItem'
import {MaterialCommunityIcons } from '@expo/vector-icons'
import {useRoute} from '@react-navigation/native'
import Calculate from '../utils/Calculate'
import TodosList from '../assets/data/TodosList'
import {useNavigation} from '@react-navigation/native'
const TodoScreen = () => {
  const Navigator = useNavigation()
  const Route = useRoute()
  const idTodo  = Route.params?.IdTodo
  const todo =  TodosList.find(todo => todo.id ===idTodo)
  const TodoListInfo =     Calculate(todo)
 const moveToAddScreen = () => {
   Navigator.navigate('add')
 }
  return (
    <View style={ tw `bg-white h-full relative`}>
        <View style={ tw `flex-row `}>
      <Text style={ tw `font-extrabold ml-8 `}>Ttitre</Text>
      <Text style={ tw `font-bold uppercase ml-8`}>{todo.todoTitle}</Text>
        </View>

        {/* vues pour les statistiques */}
        <View style={ tw   ` bg-green-50 h-full`}>
        <View style={ tw `  h-36 mt-5 p-2 flex-row justify-between bg-green-50 `}>
          <View style={ tw ` h-32  bg-blue-50  w-28 rounded shadow-lg items-center`}>
    <Text style={ tw `font-bold text-xl mb-2`}>Total</Text>
    <Text style={ tw `font-bold text-5xl mt-6`}>{TodoListInfo.length}</Text>
          </View>
          <View style={ tw ` h-32  bg-yellow-50  w-28 rounded shadow items-center`}>
          <Text style={ tw `font-bold text-xl mb-2`}>En cours</Text>
    <Text style={ tw `font-bold text-5xl mt-6`}>{TodoListInfo.NotFinishedLength}</Text>
          </View>
          <View style={ tw ` h-32  bg-green-50 w-28 rounded shadow items-center`}>
          <Text style={ tw `font-bold text-xl mb-2`}>Terminé</Text>
    <Text style={ tw `font-bold text-5xl mt-6`}>{TodoListInfo.FinishedLength}</Text>
          </View>
        </View>
            <Text style={ tw `m-2 bg-green-50 text-lg font-semibold`}>Liste des taches</Text>
         <View style={ tw `bg-green-50 flex-1 p-2 mb-2`}>
         
         <FlatList
showsVerticalScrollIndicator={false}
data={todo.todos}
style={tw `ml-1 flex-1 bg-green-50  w-full  ` }  
 renderItem={({item}) => <TodoItem  key={item.id}  TodoInfo={item} /> }/>
           
         </View>

    </View>
         {/* FAB */}
         <TouchableOpacity onPress={moveToAddScreen} activeOpacity={0.7}  style={ tw `flex justify-center items-center bg-blue-700 w-16 h-16 rounded-full absolute bottom-8 right-5`}>
  <MaterialCommunityIcons  name='plus' size={38} color="white" />
</TouchableOpacity>
    </View>
  )
}

export default TodoScreen