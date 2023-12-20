import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
interface Tasks {
  id: string;
  category: string;
}
const TaskDetails = () => {
  const { id } = useParams<Tasks>();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let url = `http://localhost:5000/tasks`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("hi");
        return res.json();
      })
      .then((data) => {
        console.log("yes");
        console.log(data);

        data.map((task: any) => {
          const foundTask = data.find((task: any) => task.id.toString() == id);
          if (foundTask) {
            setTasks(foundTask);
          } else {
            `not found`;
          }
        });
      })
      .catch((error) => {
        alert(`Error fetching data for taks ${id}`);
      });
  }, [id]);
  return (
    <div>
      TaskDetails:{id}
      {tasks ? <div>{tasks.title}</div> : <p>Error</p>}
    </div>
  );
};

export default TaskDetails;