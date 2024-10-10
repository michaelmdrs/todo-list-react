import { ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks({tasks, onTaskClick, deleteTaskClick}) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams() // garante uma melhor entrega na URL
        query.set('title', task.title)
        query.set('description', task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                    onClick={() => onTaskClick(task.id)} 
                    className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${task.isCompleted && 'line-through'} hover:bg-sky-700
                    focus:outline-none focus:ring focus:ring-sky-500`}
                    >
                    
                    {task.title}
                    </button>

                    <button onClick={() => onSeeDetailsClick(task)} className="p-2 bg-slate-400 rounded-md text-white hover:bg-green-700">
                        <ChevronRightIcon />
                    </button>

                    <button
                    onClick={() => deleteTaskClick(task.id)} 
                    className="p-2 bg-slate-400 rounded-md text-white hover:bg-red-700">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks