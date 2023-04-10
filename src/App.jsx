import { useState } from 'react'
import Category from './components/home/category/Category'
import Feature from './components/home/feature/Feature'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Category/>
        <Feature/>
    </div>
  )
}

export default App
