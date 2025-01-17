import { View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MessageItem = ({ message, currentUser }) => {
    if (currentUser?.userId == message?.userId) {
        //my message
        return (
            <View className='flex-row justify-end mb-3 mr-3'>
                <View style={{ width: wp(80) }}>
                    <View className='flex self-end p-3 bg-white border rounded-2xl border-neutral-200'>
                        <Text style={{fontSize:hp(1.9)}}>
                            {message?.text}
                        </Text>
                    </View>
                </View>
            </View>
        )
    } else {
        return(
            <View style={{width: wp(80)}} className='mb-3 ml-3'>
                 <View className='flex self-start p-3 px-4 border border-gray-200 rounded-2xl bg-slate-100'>
                     <Text style={{fontSize:hp(1.9)}}>
                        {message?.text}
                     </Text>
                 </View>
            </View>
        )
    }
}

export default MessageItem;