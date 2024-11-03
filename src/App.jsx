import { useState, useEffect } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { v4 } from "uuid"
import './App'
import Title from "./components/Title"

function App() {
  const [tasks, setTaks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)) // utilizando o localstorage para manter as informações
  }, [tasks]) // recebe um parametro e depois uma lista 

/*  EXEMPLO DE COMO INTERAGIR DE API COM O REACT 
    useEffect(() => {
    async function fetchTasks() {
        // Chamar a API
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
        method: 'GET'
      });
      // Pegar os dados
      const data = await response.json()

      // armazenar e persistir
      setTaks(data)
    }

    fetchTasks()
  }, []) */

  function onTaskClick(taskId) {
    const newTask = tasks.map(task => {
      // atualiza a tarefa atual
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task
    })
    setTaks(newTask)
  }

  function deleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTaks(newTasks)
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4, // incrementa o ID para cada tarefa de forma que fiquem únicos
      title,
      description,
      isCompleted: false
    }
    setTaks([...tasks, newTask]) // quando estamos atualizando uma lista não podemos utilizar o push as sim setar o que esta
  }                             //  dentro da lista com o que vai estar
  
  const onAddTask = (title, description) => {
    const newTask = {
      id: v4,
      title,
      description,
      isCompleted: false
    }
    setTaks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask  onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTaskClick={deleteTaskClick} onAddTask={onAddTask} />
      </div>
    </div>
  ) // função anomina setando a modificação no state criado anteriormente
}

export default App

/*
Version Tailwind CSS @3.4.10 postcss@8.4.1 autoprefixer@10.4.20
*/

/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const resetCount = () => {
    setCount(0)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Curso React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is
        </button>
        <button onClick={resetCount}>
          Clear
        </button>
        <p className='result-count'>{ count }</p>
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

--- Exemplos de componentes e useStates

function App() {
  const [message, setMessage] = useState('Clique e veja o resultado.') // valor padrão do state
  const resetMessage = () => {
     setMessage('Clique e veja o resultado.')
  }
  const title = 'React JS' // microcomponente
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ message }</p>
      
      <button onClick={() => {
        setMessage('Mudou após o clique!') // chamando o state após s definição
      }}>Resultado</button>
      <button onClick={ resetMessage }>Resetar</button> 
    </div>
  ) // função anomina setando a modificação no state criado anteriormente
}

 */