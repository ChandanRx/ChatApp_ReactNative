import { View, TouchableOpacity, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import blurhash, { formatDate, getRoomId } from '../utils/common'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ChatItem = ({ item, router, noBorder, currentUser }) => {

    const [LastMessage, setLastMessage] = useState(undefined);

    useEffect(()=>{
  
        let roomId = getRoomId(currentUser?.userId , item?.userId)
        const docRef = doc(db,"rooms",roomId)
        const messagesRef = collection(docRef,"messages")
        const q = query(messagesRef,orderBy('createdAt','desc'))
  
        let unsub = onSnapshot(q,(snapshot)=>{
               let allMessages = snapshot.docs.map(doc=>{
                return doc.data();
               })
               setLastMessage(allMessages[0]? allMessages[0]: null)
        })
        return unsub;
    },[])


  

    const openChatRoom = () =>{
        router.push({pathname:'/chatroom', params:item})
    }

    const renderTime = () =>{
        if(LastMessage){
             let date = LastMessage?.createdAt;
             return formatDate(new Date(date?.seconds * 1000))
        }
    }

    const renederLastMessage = () =>{
            if(typeof LastMessage == 'undefined') return 'Loading...';
            if(LastMessage){
                 if(currentUser?.userId == LastMessage?.userId) return "You : " + LastMessage?.text;
                 return LastMessage?.text;
            }else{
                return 'Say Hii 🖐️';
            }
    }

    return (

        <View className={`flex-row justify-between mx-4 items-center gap-3 mb-4 pb-2 ${noBorder ? '' : 'border-b border-b-neutral-200'}`}>

           {/* 
            <Image
                source={{uri:item?.profile}}
                style={{ height: hp(6), width: hp(6) }}
                className='rounded-full'
            /> */}

            <Image
                style={{ height: hp(6), width: hp(6),borderRadius:100 }}
                source={{uri:item?.profile}}
                placeholder={blurhash}
                transition={500}
            />

            <View className='flex-1 gap-1' >
                <TouchableOpacity onPress={openChatRoom}>
                    <View className='flex-row justify-between'>
                        <Text style={{ fontSize: hp(1.8) }} className='font-semibold text-neutral-950'>{item?.username}</Text>
                        <Text style={{ fontSize: hp(1.6) }} className='font-medium text-neutral-500'>{renderTime()}</Text>
                    </View>

                    <Text style={{ fontSize: hp(1.6) }} className='font-medium text-neutral-500'>
                        {renederLastMessage()}
                    </Text>
                </TouchableOpacity>
            </View>

        </View>


    )
} 

export default ChatItem;