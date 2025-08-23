import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | Vivek</h1>
    </div>
  )
}

// Example JSX element
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "chai or react"

// Example using React.createElement
const ReactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit Google - ',
  anotherElement

)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement   
)
