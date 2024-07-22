import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { IndexPage } from './Pages/IndexPage'

import './App.css'

function App() {
  return (
 
<Routes>
  <Route index element ={IndexPage} />

</Routes>
    
  )
}

export default App
