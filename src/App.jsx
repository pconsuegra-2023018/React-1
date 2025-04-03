import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { Home } from './components/Home'

function App() {
  //Constantes y variables
  const persons = [
    {name: 'Edson', surname: 'Aguilar'},
    {name: 'Jilian', surname: 'Alvarez'},
    {name: 'Francisco', surname: 'Marroquín'}
  ]
  
const x = 5

  const [count, setCount] = useState(0)
                                          //Valor inicial
  const [fullName, setFullName] = useState('Chupina despierto')
  const [sleep, setSleep] = useState(false)
  const [personsArray, setPersonsArray] = useState(persons)
  const [num, setNum]= useState(0)
  
//Funciones y Metodos
const addBautista = ()=>{
  setPersonsArray([...persons, {name: 'Pedrito', surname:'Bautista'}])//como es array va []y el ... sirve para poner lo que ya esta agregado y no borrar los datos ya ingresados
}
//Hooks


//Renderizado condicional
if(x){
  return <Home/>
}else{

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
      <button onClick={addBautista}>Agregar a Bautista</button>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{personsArray[0].name}</td>
            <td>{personsArray[0].surname}</td>
          </tr>
          <tr>
            <td>{personsArray[1].name}</td>
            <td>{personsArray[1].surname}</td>
          </tr>
          <tr>
            <td>{personsArray[2].name}</td>
            <td>{personsArray[2].surname}</td>
          </tr>
          <tr>
            <td>{personsArray[3]?.name}</td>{/* Si tiene un signo de interrogacion es opcional */}
            <td>{personsArray[3]?.surname}</td>
          </tr>
        </tbody>
      </table>
      <button  onClick={()=>{
        if(num-count >= -99){
          setNum(num -count)
        }else{
          console.log('Ya no se puede, peldon')
        }
      }}>Restar -{count}</button>
      <h3>{num}</h3>
      <button onClick={()=>{
        if(num+count <= 99){
          setNum(num + count)
        }else{
          console.log('Ya no se puede, peldon')
        }
      }}>Sumar {count}</button>
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
          + count is {count}
        </button>
        <button onClick={() => {
          if(count>0){
            setCount((count) => count - 1)
            }else{
              console.log('no se pueden negativos')
            }
            }}>
          - count is {count}
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
}

export default App
