import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'

const TodoItem = ({TodoInfo}) => {
  const Navigator = useNavigation()

const MoveToTodoScreen =  () => {
Navigator.navigate('todo',{ IdTodo :TodoInfo.id })
console.log(TodoInfo)
}
  return (
<TouchableOpacity onPress={MoveToTodoScreen} activeOpacity={0.8} style={ tw ` bg-blue-50 h-42 w-90 rounded shadow-lg mb-4 items-center`}> 
      {/* header card */}
        <View style={ tw ` bg-white  shadow h-14 flex-row items-center pl-28  `}>
             <Text style={ tw ` font-semibold self-center text-center `}>{TodoInfo.createdAt}</Text>
             <TouchableOpacity style={ tw `items-center justify-center  h-45  w-14 ml-27  `}>

             <MaterialCommunityIcons style={ tw `mb-5`} name="settings-helper" size={38} color="black" />
             </TouchableOpacity>
        </View>

        {/* card body */}
        <View style={ tw ` flex-1 justify-center items-center`}>
          <Text style={ tw `font-bold `}> {TodoInfo.title}</Text>
        </View>

      </TouchableOpacity>
  )
}

export default TodoItem