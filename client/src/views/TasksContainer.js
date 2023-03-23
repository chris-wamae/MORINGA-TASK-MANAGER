import React from 'react';
import SingleTask from '../components/SingleTask';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function TasksContainer({props}) {
    const [tasks,setTasks] = useState([])
    console.log(tasks)
    useEffect(()=>{
    axios.get("http://127.0.0.1:3000/tasks").then((r)=>{
     setTasks(r.data)
    })
    },[])
    return (
    <>
    <h2>Here are your tasks: Username</h2>
    <div className="task-container">
    {tasks.map((task)=>{
    return <SingleTask task={task}/>
    })}
    </div>
    </>
    
    );
}

export default TasksContainer;