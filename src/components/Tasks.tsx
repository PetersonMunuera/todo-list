import clipboardImg from '../assets/clipboard.svg'
import styles from './Tasks.module.css'

export function Tasks() {
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

      <div className={styles.emptyList}>
        <img src={clipboardImg} alt="Lista vazia" />
        
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </main>
  )
}