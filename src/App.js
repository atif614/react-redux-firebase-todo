import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const getTasks = () => {
    return tasks.map((task, index) => <li key={index} className="list-group-item" onClick={() => deleteTodo(task)}>{task}</li>)
  }
  // const getTasks =  task.map((task)=> <li class="list-group-item">{task}</li>)
  // console.log(task)
  const addTask = (task) => {
    // const newTasks = [...tasks];
    // newTasks.push(task);
    if (task) {
      setTasks([...tasks, task]);
      setTask('')
    }
    else {
      alert('Pleae Enter a Value')
    }
  }
  const deleteTodo = (task) => {
    // console.log(id);
    console.log(tasks);
    // const deletedTodo = tasks.filter((task) => task.id !== id);
    setTasks(tasks.filter((e) => e !== task))
    // console.log(deletedTodo);
    // setTasks(deletedTodo)
  //  tasks.slice(id,1);
    // console.log(deletedTodo);
    // console.log(tasks)
    // setTasks(deletedTodo);
  }
  return (
    <div className="App">
      <input className='form-control' type="text" value={task} placeholder='Enter the task' onChange={(e) => { setTask(e.target.value) }} />
      <button className='btn btn-success w-100' onClick={() => { addTask(task) }} >Add Todo</button>
      <ul className="list-group">
        {getTasks()}
        {/* {getTasks} */}
      </ul>
    </div>
  );
}

export default App;
