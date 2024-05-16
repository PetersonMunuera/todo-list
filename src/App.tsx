import styles from './App.module.css'
import { AddTask } from './components/AddTask'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <AddTask />
        <Tasks />
      </div>
    </div>
  )
}

export default App
