import { CheckCircle, Circle, Trash } from '@phosphor-icons/react'
import { useState } from 'react'
import styles from './TaskItem.module.css'

export function TaskItem() {
  const [isDone, setIsDone] = useState(false)

  function handleDoneTask() {
    setIsDone(!isDone)
  }

  return (
    <div className={`${styles.taskItem} ${isDone && styles.isDone}`}>
      <button onClick={handleDoneTask} className={styles.check}>
        {!isDone ? <Circle size={24} /> : <CheckCircle size={24} weight='fill' />}
      </button>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button className={styles.delete}>
        <Trash size={24} />
      </button>
    </div>
  )
}