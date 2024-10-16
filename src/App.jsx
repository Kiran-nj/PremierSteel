import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import SteelProductsShowcase from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SteelProductsShowcase/>
    </>
  )
}

export default App
