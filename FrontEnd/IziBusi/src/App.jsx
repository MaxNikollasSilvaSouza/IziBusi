import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//2 - Reaproveitamento de estrutura
//O outlet é o q ficará mudando, e em volta é possível colocar outras estruturas pra ser o footer, navegação e etc
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <p>navbar</p>
      <h1>

       Router

      </h1>
      
      <Outlet></Outlet>
      <p>Footer</p>
    </div>
  )
}

export default App
