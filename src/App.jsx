import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Records from './components/Records'
// import Sample from './components/Sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>welcome to my react demo</h3>
        <View/>
        <Records/>
        <Add/>
        
        {/* <Sample/> */}
        
     
    </>
  )
}

export default App
