import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [dependency, setDependency] = useState(false);

  const addTask = () => {
    setShowInput(true);
  };

  const handleDelete = (taskId: any) => {
    fetch(`https://65842a564d1ee97c6bcf225e.mockapi.io/api/v1/todo/${taskId}`, {
      method: "DELETE",
    }).then(() => {
      if (dependency) {
        setDependency(false);
      } else {
        setDependency(true);
      }
      console.log("deleted");
    });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const task = { title, category };
    setTimeout(() => {
      fetch("  https://65842a564d1ee97c6bcf225e.mockapi.io/api/v1/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then(() => {
          if (dependency) {
            setDependency(false);
          } else {
            setDependency(true);
          }
          console.log("new task added");
          setShowInput(false);
        });
    });
  };

  useEffect(() => {
    let url = `https://65842a564d1ee97c6bcf225e.mockapi.io/api/v1/todo`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTasks(data);
      });
  }, [dependency]);
  return (
    <div>
      {!showInput &&
        tasks.map((task: any) => (
          <div className="flex justify-between " key={task.id}>
            <div>
              <Link to={`/tasks/${task.id}`}>
                <h1 className="text-3xl">{task.title}</h1>
                <p>{task.category}</p>
              </Link>
            </div>
            <div>
              <button
                className="bg-gray-400 flex rounded-md mt-3 "
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      {showInput && (
        <div>
          <div>
            <form onSubmit={handleSubmit} className="max-w-[200px] m-0 mx-auto">
              <label>Enter a task:</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="rounded-lg bg-gradient-to-l from-blue-400 to-purple-200 p-0.8 text-sm"
              ></input>

              <label className="">Category:</label>
              <input
                type="text"
                required
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="rounded-lg bg-gradient-to-l from-blue-400 to-purple-200 p-0.8 text-sm"
              ></input>
              <br />

              {showInput && (
                <button className="bg-blue-600 text-white">Add</button>
              )}
            </form>
          </div>
        </div>
      )}
      <hr />
      {!showInput && <button onClick={addTask}>+ Add a task</button>}
    </div>
  );
};

export default TaskList;
