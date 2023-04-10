import { useState } from 'react'
import Category from './components/home/category/Category'
import Feature from './components/home/feature/Feature'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Category/>
        <Feature/>
        <Footer/>
    </div>
  )
}

export default App
