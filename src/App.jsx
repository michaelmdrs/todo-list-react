import { useState, useEffect } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import './App'

function App() {
  const [tasks, setTaks] = useState([{
    id: 1,
    title: 'Estudar programação',
    description: 'Estudar programação para se tornar um desenvolvedor full stack.',
    isCompleted: false
  }, {
    id: 2,
    title: 'Estudar matemática e lógica matemática',
    description: 'Aprender os fundamentos básicos para melhorar minha lógica.',
    isCompleted: false
  }, {
    id: 3,
    title: 'Estudar inglês',
    description: 'Aprender o inglês para me tornar fluente e crescer profissionalmente',
    isCompleted: false
  }])

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
      id: tasks.length + 1, // incrementa o ID para cada tarefa de forma que fiquem únicos
      title,
      description,
      isCompleted: false
    }
    setTaks([...tasks, newTask])
  }
  
  const onAddTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false
    }
    setTaks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center p-6">Gerenciador de tarefas</h1>
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