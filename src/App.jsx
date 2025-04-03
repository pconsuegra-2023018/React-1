import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const persons = [
    {name: 'Edson', surname: 'Aguilar'},
    {name: 'Jilian', surname: 'Alvarez'},
    {name: 'Francisco', surname: 'Marroquín'}
  ]


  const [count, setCount] = useState(0)
                                          //Valor inicial
  const [fullName, setFullName] = useState('Chupina despierto')
  const [sleep, setSleep] = useState(false)

  return (
    <>
      <h2>Hola mundo</h2>
      <h3>Me llamo: {fullName}</h3>
      <button onClick={() => {
        if(sleep) {
          setSleep(false)
          setFullName('Chupina dormido')
        }else{
          setSleep(true)
          setFullName('Chupina despierto')
        }
        }
      }>Actualizar nombre</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
