import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'
var num = 0;
let endpoint = "http://localhost:8080";
const App = () => {
    const [tasks, setTasks] = useState('')
    const [AD, setAD] = useState(false)

    const addTask = (task) => {
        const id = num
        const newTask = {
            id, ...task
        }
        num += 1
        console.log(newTask.value)
        setTasks([...tasks, newTask])
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
        console.log('deleteTask', id)
    }
    const toggleTask = (id) => {
        setTasks(tasks.map((task) => task.id === id ?
            { ...task, reminder: !task.reminder } : task
        ))
        console.log(id)
    }
    function changeAD() {
        setAD(!AD)
    }

    return (
        <div className="container">
            <Header onAdd={changeAD} showAdd={AD} />
            {AD && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ?
                < Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleTask}
                />
                : 'No Tasks'
            }
        </div >
    )
}

export default App;