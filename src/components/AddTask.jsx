import { useState } from "react"
import Input from './Input'

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return (
        <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow flex flex-col">
            <Input 
                type="text" 
                placeholder="Digite o título da tarefa..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <Input 
                type="text" 
                placeholder="Descrição da tarefa..." 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button onClick={() => {
                if (!title.trim() || !description.trim()) { // verificar o titulo e a descricao
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