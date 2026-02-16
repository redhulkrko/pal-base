import React from 'react';
import './TodoList.css';

const TodoList = () => {
  const todos = [
    { id: 1, task: 'Lunch meeting', time: '10:30 AM' },
    { id: 2, task: 'Lunch meeting', time: '11:30 AM' },
    { id: 3, task: 'Lunch meeting', time: '12:30 PM' },
  ];

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="text-primary m-0 fw-bold">Todo List</h6>
      </div>
      <ul className="list-group list-group-flush">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <div className="row g-0 align-items-center">
              <div className="col me-2">
                <h6 className="mb-0">
                  <strong>{todo.task}</strong>
                </h6>
                <span className="text-xs">{todo.time}</span>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id={`formCheck-${todo.id}`} />
                  <label className="form-check-label" htmlFor={`formCheck-${todo.id}`}></label>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
