import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';
import styles from './TaskItem.module.css';

export interface TaskType {
  text: string;
  isDone: boolean;
}

interface TaskItemProps {
  task: TaskType;
  onToggleTaskDone: (task: string) => void;
  onDeleteTask: (task: string) => void;
}

export function TaskItem({ task, onToggleTaskDone, onDeleteTask }: TaskItemProps) {

  function handleToggleTaskDone() {
    onToggleTaskDone(task.text)
  }

  function handleDeleteTask() {
    onDeleteTask(task.text)
  }

  return (
    <div className={`${styles.taskItem} ${task.isDone && styles.isDone}`}>
      <button onClick={handleToggleTaskDone} className={styles.check}>
        {!task.isDone ? <Circle size={24} /> : <CheckCircle size={24} weight='fill' />}
      </button>
      <p>{task.text}</p>
      <button onClick={handleDeleteTask} className={styles.delete}>
        <Trash size={24} />
      </button>
    </div>
  )
}