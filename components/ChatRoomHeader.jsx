import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image } from 'expo-image';

const ChatRoomHeader = ({user,router}) => {
  return (
   <Stack.Screen
    options={{
        title:'',
        headerShadowVisible: false,
        headerLeft:()=>(
            <View className='flex-row items-center gap-4'>
                 <TouchableOpacity>
                    <Entypo name='chevron-left' size={hp(4)} color='#737373' onPress={()=>router.back()}/>
                 </TouchableOpacity>

                 <View className='flex-row items-center gap-3'>
                       <Image
                        source={user?.profile}
                        style={{height: hp(4.5) ,aspectRatio:1, borderRadius:100}}
                       />
                       <Text style={{fontSize:hp(2.5)}} className='text-neutral-800 font-medium'>
                        {user?.username}
                       </Text>
                 </View>
            </View>
        ),
        headerRight:()=>(
            <View className='flex-row items-center gap-8 '>

            <Ionicons name='call' size={hp(2.8)} color={'#737373'}/>
            <Ionicons name='videocam' size={hp(2.8)} color={'#737373'}/>

            </View>
        )
    }}
   />
  )
}

export default ChatRoomHeader;