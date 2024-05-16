import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './AddTask.module.css'

interface AddTaskProps {
  onAddTask: (task: string) => void
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')


  function handleAddTask(event: FormEvent) {
    event.preventDefault()

    onAddTask(newTaskText)
    setNewTaskText('')
  }

  function handleTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  return (
    <form onSubmit={handleAddTask} className={styles.addTask}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
        value={newTaskText}
        onChange={handleTaskTextChange}
      />
      <button>
        Criar
        <PlusCircle size={20} weight='bold' />
      </button>
    </form>
  )
}