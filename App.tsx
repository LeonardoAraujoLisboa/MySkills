import React from 'react'
import {Text, StatusBar} from 'react-native'
import Home from './src/pages/Home'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Home />
    </>
  )
}

export default App