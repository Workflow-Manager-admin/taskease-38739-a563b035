import React, { useState } from 'react';

// PUBLIC_INTERFACE
function TaskEaseContainer() {
  /**
   * Main container component for the TaskEase todo app.
   * Provides the UI and logic for adding, viewing, completing, and deleting tasks.
   * Designed to be visually clean in a single-column layout with light theme colors.
   */
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // PUBLIC_INTERFACE
  const handleAddTask = (e) => {
    /** Adds a new task to the list, preventing empty tasks. */
    e.preventDefault();
    const trimmed = newTask.trim();
    if (!trimmed) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: trimmed, completed: false }
    ]);
    setNewTask('');
  };

  // PUBLIC_INTERFACE
  const handleToggleComplete = (id) => {
    /** Toggles the completion status of a task. */
    setTasks(
      tasks.map(task =>
        (task.id === id)
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // PUBLIC_INTERFACE
  const handleDeleteTask = (id) => {
    /** Deletes a task from the list. */
    setTasks(tasks.filter(task => task.id !== id));
  };

  // PUBLIC_INTERFACE
  const handleInputChange = (e) => {
    /** Handles controlled input state for newTask. */
    setNewTask(e.target.value);
  };

  // App-specific colors
  const COLORS = {
    primary: "#1976d2",
    secondary: "#ffffff",
    accent: "#43a047"
  };

  return (
    <div
      style={{
        margin: '0 auto',
        marginTop: '56px',
        maxWidth: '420px',
        background: COLORS.secondary,
        borderRadius: '12px',
        boxShadow: '0 3px 12px 0 rgba(0,0,0,0.09)',
        padding: '28px 20px 36px 20px'
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: COLORS.primary,
          fontWeight: 700,
          letterSpacing: '.5px',
          margin: '0 0 16px'
        }}
      >
        TaskEase <span role="img" aria-label="check">✅</span>
      </h1>
      <form
        onSubmit={handleAddTask}
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "24px",
          alignItems: "center"
        }}
        autoComplete="off"
      >
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          style={{
            flex: 1,
            fontSize: "1rem",
            padding: "9px 12px",
            border: `1.5px solid ${COLORS.primary}`,
            borderRadius: "4px",
            outline: "none",
            transition: "border-color 0.2s",
            background: "#f8fafc"
          }}
          aria-label="New task input"
        />
        <button
          type="submit"
          disabled={!newTask.trim()}
          style={{
            background: COLORS.primary,
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "9px 20px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: newTask.trim() ? "pointer" : "not-allowed",
            boxShadow: 'none',
            transition: 'background 0.2s'
          }}
        >
          Add
        </button>
      </form>
      <section>
        {tasks.length === 0 && (
          <p style={{
            color: "#888",
            textAlign: "center",
            margin: "38px 0 18px 0",
            fontSize: ".98rem"
          }}>
            No tasks yet. Add your first task!
          </p>
        )}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "11px 0",
                borderBottom: "1px solid #e3e3e3"
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
                aria-label={`Mark ${task.text} as complete`}
                style={{
                  accentColor: COLORS.accent,
                  width: "19px",
                  height: "19px"
                }}
              />
              <span
                style={{
                  flex: 1,
                  fontSize: "1.09rem",
                  color: task.completed ? "#888" : "#1A1A1A",
                  textDecoration: task.completed ? "line-through" : "none",
                  opacity: task.completed ? 0.55 : 1,
                  wordBreak: 'break-word'
                }}
              >
                {task.text}
              </span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                aria-label={`Delete ${task.text}`}
                title="Delete"
                style={{
                  background: "none",
                  border: "none",
                  color: "#e53935",
                  fontSize: "1.13rem",
                  padding: "4px 6px",
                  cursor: "pointer",
                  borderRadius: "3px"
                }}
              >
                &#128465;
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TaskEaseContainer;
