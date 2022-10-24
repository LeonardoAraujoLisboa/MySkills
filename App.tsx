import React, {useEffect} from 'react'
import {Text, StatusBar} from 'react-native'
import Home from './src/pages/Home'
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()//isso é para fazer com que a splash screen sai até q tudo seja carregado, por isso coloquei no useeffect, pois o effect esperar carregar tudo para ser chamado
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Home />
    </>
  )
}

export default App