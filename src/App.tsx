import { useState } from 'react';
import styles from './App.module.css';
import clipboardImg from './assets/clipboard.svg';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskItem, TaskType } from './components/TaskItem';
import './global.css';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function addTask(taskToAdd: string) {
    const newTask: TaskType = {
      text: taskToAdd,
      isDone: false,
    }

    setTasks(tasks => [...tasks, newTask])
  }

  function toggleTaskDone(taskToToggle: string) {
    const tasksUpdated = tasks.map(task => {
      if (task.text === taskToToggle) {
        task.isDone = !task.isDone
      }

      return task
    })

    setTasks(tasksUpdated)
  }

  function deleteTask(taskToRemove: string) {
    const tasksWithoutDeleted = tasks.filter(task => {
      return task.text !== taskToRemove
    })

    setTasks(tasksWithoutDeleted)
  }

  const tasksDoneNumber = tasks.filter(task => task.isDone).length

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <AddTask onAddTask={addTask} />

        <main className={styles.tasks}>
          <header>
            <div className={styles.createdTasks}>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.completedTasks}>
              <strong>Concluídas</strong>
              <span>{tasksDoneNumber}</span>
            </div>
          </header>

          {tasks.length > 0 ? (
            <div>
              {tasks.map(task => {
                return (
                  <TaskItem 
                    key={task.text}
                    task={task}
                    onToggleTaskDone={toggleTaskDone}
                    onDeleteTask={deleteTask}
                  />
                )
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
      </div>
    </div>
  )
}

export default App
