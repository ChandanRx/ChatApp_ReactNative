import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import "../global.css"
import { Slot, useRouter, useSegments } from 'expo-router'
import { AuthContextProvider, useAuth } from '../context/authContext'
import { MenuProvider } from 'react-native-popup-menu';

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segements = useSegments();
  const router = useRouter()

  useEffect(() => {
    if (typeof isAuthenticated == 'undefined') return;
    const inApp = segements[0] == '(app)';
    if (isAuthenticated && !inApp) {
      //redirect to home
      router.replace('home')
    } else if (isAuthenticated == false) {
      //redirect to signin page
      router.replace('signIn')
    }
  }, [isAuthenticated])

  return <Slot />

}

const RootLayout = () => {
  return (

    <MenuProvider>
      <AuthContextProvider>
        <MainLayout />
      </AuthContextProvider>
    </MenuProvider>
  )
}

export default RootLayout;