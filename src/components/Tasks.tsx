import { useState } from 'react'
import clipboardImg from '../assets/clipboard.svg'
import { TaskItem } from './TaskItem'
import styles from './Tasks.module.css'

export function Tasks() {
  const [tasks, setTasks] = useState([
    'Comprar comida',
    'Estudar React',
    'Trabalhar',
    'Ir pra academia',
  ])

  return (
    <main className={styles.tasks}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>

      {tasks.length > 0 ? (
        <div>
          {tasks.map(task => {
            return <TaskItem key={task} />
          })}
        </div>
      ) : (
        <div className={styles.emptyList}>
          <img src={clipboardImg} alt="Lista vazia" />

          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </main>
  )
}