import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MessageItem from './MessageItem'

const MessageList = ({Messages,currentUser, scrollViewRef}) => {
  return (
   <ScrollView
       ref={scrollViewRef}
       showsVerticalScrollIndicator={false} 
       contentContainerStyle={{paddingTop:10}}
   >
       {
        Messages.map((message,index)=>{
          return (
            <MessageItem message={message} key={index} currentUser={currentUser}/>
          )
        })
       }
   </ScrollView>
  )
}

export default MessageList