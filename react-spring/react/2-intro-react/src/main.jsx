import React from 'react'
import ReactDOM from 'react-dom'
import { HelloWordApp } from './HelloWordApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWordApp user={{name:"juan", lastName:"Leon"}} id={1}/>
  </React.StrictMode>,
)
