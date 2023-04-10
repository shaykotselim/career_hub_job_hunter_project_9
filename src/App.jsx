import { useState } from 'react'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Home/>
        <Footer/>
    </div>
  )
}

export default App
