import React from 'react';

function SingleTask({task}) {
    return (
        <div className='single-task'>
            {/* task_name, :task_description, :task_status */}
            <h3>{task.task_name}</h3>
            <p>{task.task_description}</p>
            <button type="button" class="btn btn-dark">{task.task_status}</button>        
        </div>
    );
}

export default SingleTask;