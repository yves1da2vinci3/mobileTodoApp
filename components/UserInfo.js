import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const UserInfo = () => {
  return (
    <View style={ tw `flex-row   mr-2 items-center`}>
      <Text  style={ tw `font-semibold mr-2 `}>yves lionel domande</Text>
      <Image style={ tw ` h-8 w-8 rounded-full`} source={{ uri : "https://www.allotrends.com/uploads/2022/02/3/569_one-piece-chapitre-1037-kaido-le-dernier-homme-debout.jpg"}} />
    </View>
  )
}

export default UserInfo