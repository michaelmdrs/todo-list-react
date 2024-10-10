import { useState } from "react"

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return (
        <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o título da tarefa..." 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" required autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input type="text" placeholder="Descrição da tarefa..." 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button onClick={() => {
                if (!title.trim() || !description.trim()) {
                    return alert('Preencha os campos e tente novamente.')
                }
                onAddTaskSubmit(title, description)
                setTitle('')
                setDescription('')
            }} 
                className="bg-slate-500 px-4 py-2 text-white rounded-md font-medium">
            Adicionar
            </button>
        </div>
    )
}

export default AddTask