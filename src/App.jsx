import { useState } from 'react'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App
