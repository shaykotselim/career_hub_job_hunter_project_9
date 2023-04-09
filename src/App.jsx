import { useState } from 'react'
import Category from './components/home/category/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Category/>
    </div>
  )
}

export default App
