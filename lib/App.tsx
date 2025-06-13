import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ActivityRings from './components/activity-rings'

function App() {
  return (
    <ActivityRings progress={[0.1, 0.5, 0.5]}  />
  )
}

export default App
