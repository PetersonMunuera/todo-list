import { PlusCircle } from '@phosphor-icons/react'
import styles from './AddTask.module.css'

export function AddTask() {
  return (
    <form className={styles.addTask}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button>
        Criar
        <PlusCircle size={20} weight='bold' />
      </button>
    </form>
  )
}