import * as React from 'react'
import Header from './components/Header'

export function App() {
  return (
    <div>
      <Header name={'World'} salutation='Mr ' sayHi={(name) => { alert('Hello ' + name) }} />
      <Header name={'World'} sayHi={() => { alert('Hello There') }} />
      <p>React up and running</p>
    </div>
  )
}
