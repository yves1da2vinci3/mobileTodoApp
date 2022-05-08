import { View, Text ,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {MaterialCommunityIcons ,Feather}from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
const TodoItem = ({TodoInfo}) => {
  const Navigator = useNavigation()
  const textToDisplay  = TodoInfo.content.length >  25 ? TodoInfo.content.slice(0,25) + '...' :  TodoInfo.content

  const SeeTodo = () => {
    Navigator.navigate('see')
  }
 const [todoStatus,SetTodoStatus] = useState(TodoInfo.status)
 const ToggleState = () => {
    SetTodoStatus(!todoStatus)
 }
  return (
    <TouchableOpacity onLongPress={ToggleState} onPress={SeeTodo} activeOpacity={0.7} style={ tw `  my-2 h-16 bg-white rounded-full shadow-lg flex-row items-center`}>
    { !todoStatus ?      <MaterialCommunityIcons style={ tw ` text-yellow-300 mx-4`} name="clock-time-three" size={38} color="yellow" />
:   <Feather style={ tw ` text-green-300 mx-4`} name="check-circle" size={38} color="black" />  }
     <Text  style={ tw `text-center `}>{textToDisplay}</Text>
    </TouchableOpacity>
  )
}

export default TodoItem