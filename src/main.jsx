import React from 'react'
import ReactDOM from 'react-dom/client'
import TinDogNavBar from './TinDogNavBar'
import TinDogTitle from './TinDogTitle'
import TinDogFeatures from './TinDogFeatures'
import TinDogPrevNext from './TinDogPrevNext'
import TinDogCTA from './TinDogCTA'
import TinDogPress from './TinDogPress'
import TinDogFooter from './TinDogFooter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  	<TinDogNavBar />
  	<TinDogTitle />
  	<TinDogFeatures />
  	<TinDogPrevNext />
  	<TinDogPress />
  	<TinDogCTA />
  	<TinDogFooter />
  </React.StrictMode>
)
